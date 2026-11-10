let produtos = JSON.parse(localStorage.getItem('produtos')) || [];




function gerarCodigoBarras() {
    let codigo = '789';
    for (let i = 0; i < 9; i++) {
        codigo += Math.floor(Math.random() * 10);
    }
    let soma = 0;
    for (let i = 0; i < 12; i++) {
        soma += Number(codigo[i]) * (i % 2 === 0 ? 1 : 3);
    }
    const digito = (10 - (soma % 10)) % 10;
    return codigo + digito;
}

let meuGraficoRosca = null;
let meuGraficoBarras = null;

const formProduto = document.getElementById('form-produto');
const tabelaCorpo = document.querySelector('#tabela-produtos tbody');
const totalProdutosCadastrados = document.getElementById('total-produtos-cadastrados');
const totalVendasEl = document.getElementById('total-vendas');
const qtd_visitas = document.getElementById('qtd-visitas');
const qtd_nao_visitantes = document.getElementById('qtd-nao-visitantes');

function cadastrar_produtos() {

    const nome = document.getElementById('nome-produto').value;
    const descricao = document.getElementById('descricao-produto').value;
    const codigo = gerarCodigoBarras();
    const categoria = document.getElementById('categoria-produto').value;

    if (!categoria) {
        return;
    }



    const listaClientes = (typeof clientes !== 'undefined') ? clientes : [];




    produtos.push({ nome, descricao, codigo, categoria, })
    atualizarTabela();
    // atualizarResumo();
    atualizarGraficosDinamicos();


    console.log(produtos)
    localStorage.setItem('produtos', JSON.stringify(produtos))
}



function atualizarTabela() {
    tabelaCorpo.innerHTML = '';

    produtos.forEach((prod, index) => {
        console.log(prod)
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${prod.nome}</td>
            <td>${prod.descricao}</td>
            <td>${prod.codigo}<br></td>
            <td class="acoes">
                <button class="btn-excluir" onclick="removerProduto(${index})">Excluir</button>
                <button class="btn-setor" onclick="abrirSetor(${prod.codigo})">abrir setor</button>
            </td>
        `;
        tabelaCorpo.appendChild(linha);
    });
}

function abrirSetor(codigo) {
    localStorage.setItem('setor_aberto', codigo)
    window.location.href = "setores.html";
}

function removerProduto(index) {
    produtos.splice(index, 1);
    localStorage.setItem('produtos', JSON.stringify(produtos));
    atualizarTabela();
    // atualizarResumo();
    atualizarGraficosDinamicos();
}

// function atualizarResumo() {
    
    



    

//     if (qtd_visitas) qtd_visitas.innerHTML = `<strong>Total de visitas:</strong> ${totalVisitas}`;
   
// }




window.addEventListener('DOMContentLoaded', () => {
    atualizarTabela();
    // atualizarResumo();
    // atualizarGraficosDinamicos();
});

// let ingressos = []
function atualizar_card(){
    // ingressos = JSON.parse(localStorage.getItem('ingressos'))
let ingressos = JSON.parse(localStorage.getItem('ingressos')) || []
let produtos = JSON.parse(localStorage.getItem('produtos'))  || []
let clientes = JSON.parse(localStorage.getItem('clientes')) || []
let visistas_por_setor = []

for(let i = 0;  i < produtos.length; i++ ){
    visistas_por_setor.push(
        {
            produto: produtos[i].codigo,
            qtd : ingressos.filter( (ingresso) => ingresso.produto == produtos[i].codigo ).length
        }
    )
}

console.log(visistas_por_setor);


document.getElementById ('qtd-ingressos').innerHTML = ingressos.length
document.getElementById ('qtd-produtos').innerHTML = produtos.length
document.getElementById ('qtd-visitas').innerHTML = clientes.length
}

atualizar_card()

