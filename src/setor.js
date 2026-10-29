

const nomesSetores = {
    radical: 'Radicais',
    familia: 'Família',
    comida: 'Comida',
    personagens: 'Personagens',
    zoologico: 'Zoológico',
    museu: 'Museu'
};

function lerLista(chave) {
    try {
        return JSON.parse(localStorage.getItem(chave)) || [];
    } catch (e) {
        return [];
    }
}


function buscar_Comprador_Do_Ingresso(ingresso, clientes) {
    const codigos = [ingresso.clienteCodigoBarra, ingresso.codigo]
        .filter(Boolean)
        .map(String);
    return clientes.find(c => codigos.includes(String(c.codigo_barra)));
}




function mostrarResultado(elemento, resultado, setor) {
    const nomeSetor = nomesSetores[setor];
    elemento.className = 'resultado-setor';
    elemento.replaceChildren();

    const titulo = document.createElement('p');
    const detalhe = document.createElement('p');

    switch (resultado.status) {
        case 'ok':
            elemento.classList.add('ok');
            titulo.innerHTML = '<strong>Acesso liberado</strong>';
            detalhe.textContent = `Nome: ${resultado.nome}`;
            const ingresso = document.createElement('p');
            ingresso.textContent = `Ingresso: ${resultado.produto}`;
            elemento.append(titulo, detalhe, ingresso);
            return;
        case 'sem-cliente':
            titulo.innerHTML = '<strong>Ingresso sem cliente vinculado</strong>';
            detalhe.textContent = `O ingresso "${resultado.produto}" não está ligado a nenhum cliente. Cadastre-o novamente no painel informando o código de barras do cliente.`;
            break;
        case 'outro-setor':
            titulo.innerHTML = '<strong>Acesso negado</strong>';
            detalhe.textContent = `Este código pertence ao setor: ${resultado.setores.join(', ')}.`;
            break;
        case 'sem-acesso':
            titulo.innerHTML = '<strong>Acesso negado</strong>';
            detalhe.textContent = `${resultado.nome} não possui ingresso para o setor ${nomeSetor}.`;
            break;
        default:
            titulo.innerHTML = '<strong>Código não encontrado</strong>';
            detalhe.textContent = 'Nenhum cadastro corresponde a este código de barras.';
    }
    elemento.classList.add('erro');
    elemento.append(titulo, detalhe);
}

function buscar_cliente() {
    let clientes = JSON.parse(localStorage.getItem('clientes'))
    let codigo = document.getElementById('codigo-barra').value
    let cliente = null
    let codigo_setor = document.getElementById('categoria-produto').value
    if (codigo_setor == "") {
        alert('selecione o setor primero')
        return
    }



    for (let i = 0; i < clientes.length; i++) {
        if (clientes[i].codigo_barra == codigo) {
            cliente = clientes[i]
        }
    }

    if (cliente != null) {
        document.getElementById('resultado-setor').innerHTML = `
    <p>${cliente.nome}</p>
    <p>${cliente.codigo_barra}</p>
     <button onclick="registrar_ingreso(${cliente.codigo_barra}, ${codigo_setor})" class="btn-black">registar</button>
    `
    } else {
        alert('cliente nao existe')
    }


}

function registrar_ingreso(cliente_codigo, codigo_setor) {
    console.log(cliente_codigo);
    console.log(codigo_setor);

    let ingressos = JSON.parse(localStorage.getItem('ingressos')) || []
    let ingreso = {
        cliente: cliente_codigo,
        setor: codigo_setor,
        data: new Date(),
        id: codigo_setor + '' + cliente_codigo + "" + Date.now(),
    }

    ingressos.push(ingreso)

    localStorage.setItem('ingressos', JSON.stringify(ingressos))


}

let produtos = JSON.parse(localStorage.getItem('produtos'))

console.log(produtos);

for (let i = 0; i < produtos.length; i++) {
    document.getElementById('categoria-produto').innerHTML += `
 <option value="${produtos[i].codigo}">${produtos[i].nome}</option>
`
}
