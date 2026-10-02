

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

// Encontra o cliente dono do ingresso: pelo vínculo gravado no cadastro do produto
// ou, em ingressos antigos sem vínculo, pelo "Código do produto" igual ao código do cliente
function buscarCompradorDoIngresso(ingresso, clientes) {
    const codigos = [ingresso.clienteCodigoBarra, ingresso.codigo]
        .filter(Boolean)
        .map(String);
    return clientes.find(c => codigos.includes(String(c.codigo_barra)));
}

// Busca o código no setor e devolve apenas dados públicos (nunca senha ou CPF)
function buscarNoSetor(codigo, setor) {
    const produtos = lerLista('produtos');
    const clientes = lerLista('clientes');

    const cliente = clientes.find(c => String(c.codigo_barra) === codigo);

    // O código pode ser o do ingresso (produto) ou o do cliente vinculado ao ingresso
    const ingressos = produtos.filter(p =>
        String(p.codigoBarras) === codigo ||
        String(p.clienteCodigoBarra || '') === codigo ||
        (cliente && !p.clienteCodigoBarra && String(p.codigo) === codigo)
    );
    const ingressoDoSetor = ingressos.find(p => p.categoria === setor);

    if (!ingressoDoSetor) {
        if (ingressos.length > 0) {
            const outros = [...new Set(ingressos.map(p => nomesSetores[p.categoria] || p.categoria))];
            return { status: 'outro-setor', setores: outros };
        }
        if (cliente) {
            return { status: 'sem-acesso', nome: cliente.nome };
        }
        return { status: 'nao-encontrado' };
    }

    const comprador = cliente || buscarCompradorDoIngresso(ingressoDoSetor, clientes);

    if (!comprador) {
        return { status: 'sem-cliente', produto: ingressoDoSetor.nome };
    }

    return {
        status: 'ok',
        nome: comprador.nome,
        produto: ingressoDoSetor.nome
    };
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

window.addEventListener('DOMContentLoaded', () => {
    const setor = document.body.dataset.setor;
    const form = document.getElementById('form-codigo-barra');
    const campo = document.getElementById('codigo-barra');
    const resultado = document.getElementById('resultado-setor');

    // Leitores de código de barras digitam o código e enviam "Enter", o que dispara o submit
    form.addEventListener('submit', (evento) => {
        evento.preventDefault();
        const codigo = campo.value.trim();
        if (!codigo) return;

        mostrarResultado(resultado, buscarNoSetor(codigo, setor), setor);
        campo.value = '';
        campo.focus();
    });

    campo.focus();
});
