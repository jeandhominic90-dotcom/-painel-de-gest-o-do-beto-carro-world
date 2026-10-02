let produtos = JSON.parse(localStorage.getItem('produtos')) || [];

const paginasSetores = {
    museu: 'progeto.html',
    radical: 'radicais.html',
    zoologico: 'zoologico.html',
    comida: 'comida.html',
    personagens: 'personagens.html',
    familia: 'familia.html'
};

// Gera um código de barras EAN-13 aleatório (prefixo 789 = Brasil) com dígito verificador
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

function cadastrar_produtos(){

    const nome = document.getElementById('nome-produto').value;
    const descricao = document.getElementById('descricao-produto').value;
    const preco = parseFloat(document.getElementById('preco-produto').value);
    const estoque = parseInt(document.getElementById('estoque-produto').value);
    const codigo = document.getElementById('codigo-produto').value;
    const categoria = document.getElementById('categoria-produto').value;

    if (!categoria) {
        alert('Selecione a categoria (setor) do parque.');
        return;
    }

    // Vincula o ingresso ao cliente comprador para que o setor saiba quem tem acesso
    const clienteCodigoBarra = document.getElementById('cliente-codigo-produto').value.trim();
    const listaClientes = (typeof clientes !== 'undefined') ? clientes : [];
    if (!clienteCodigoBarra) {
        alert('Informe o código de barras do cliente comprador.');
        return;
    }
    if (!listaClientes.some(c => String(c.codigo_barra) === clienteCodigoBarra)) {
        alert('Nenhum cliente cadastrado com esse código de barras.');
        return;
    }

    const codigoBarras = gerarCodigoBarras();

    produtos.push({ nome, descricao, preco, estoque, codigo, categoria, codigoBarras, clienteCodigoBarra });

    atualizarTabela();
    atualizarResumo();
    atualizarGraficosDinamicos();

   
    console.log(produtos)
    localStorage.setItem('produtos', JSON.stringify(produtos))
}



function atualizarTabela() {
    tabelaCorpo.innerHTML = '';
    
    produtos.forEach((prod, index) => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${prod.nome}</td>
            <td>${prod.descricao}</td>
            <td>R$ ${prod.preco.toFixed(2).replace('.', ',')}</td>
            <td>${prod.estoque}</td>
            <td>${prod.codigo}<br><small>${prod.codigoBarras || ''}</small></td>
            <td class="acoes">
                <button class="btn-excluir" onclick="removerProduto(${index})">Excluir</button>
                <button class="btn-setor" onclick="abrirSetor('${prod.categoria}')">Ver setor</button>
            </td>
        `;
        tabelaCorpo.appendChild(linha);
    });
}

function abrirSetor(categoria) {
    const pagina = paginasSetores[categoria];
    if (pagina) {
        window.location.href = pagina;
    } else {
        alert('Este produto não possui um setor válido.');
    }
}

function removerProduto(index) {
    produtos.splice(index, 1);
    localStorage.setItem('produtos', JSON.stringify(produtos));
    atualizarTabela();
    atualizarResumo();
    atualizarGraficosDinamicos();
}

function atualizarResumo() {
    const totalQtd = produtos.reduce((acc, prod) => acc + prod.estoque, 0);
    const totalValor = produtos.reduce((acc, prod) => acc + (prod.preco * prod.estoque), 0);

    totalProdutosCadastrados.innerHTML = `<strong>Total de produtos:</strong> ${totalQtd}`;
    totalVendasEl.innerHTML = `<strong>Total vendido:</strong> R$ ${totalValor.toFixed(2).replace('.', ',')}`;
    
    
    // Cada cadastro conta +1 visita no setor escolhido
    const totalVisitas = produtos.length;
    // Clientes cadastrados que ainda não têm visita registrada (começa em 0)
    const totalClientes = (typeof clientes !== 'undefined') ? clientes.length : 0;
    const totalNaoVisitantes = Math.max(0, totalClientes - totalVisitas);

    if (qtd_visitas) qtd_visitas.innerHTML = `<strong>Total de visitas:</strong> ${totalVisitas}`;
    if (qtd_nao_visitantes) qtd_nao_visitantes.innerHTML = `<strong>Total não visitados:</strong> ${totalNaoVisitantes}`;
}

function calcularTotaisPorCategoria() {
    let totais = {
        radical: 0,
        familia: 0,
        comida: 0,
        personagens: 0,
        zoologico: 0,
        museu: 0 
    };

    produtos.forEach(prod => {
        if (totais[prod.categoria] !== undefined) {
            totais[prod.categoria] += 1;
        }
    });

    return [
        totais.radical,
        totais.familia,
        totais.comida,
        totais.personagens,
        totais.zoologico,
        totais.museu
    ];
}

function atualizarGraficosDinamicos() {
    const dadosCategorias = calcularTotaisPorCategoria();
    const labelsCategorias = ['Radicais', 'Família', 'Comida', 'Personagens', 'Zoológico', 'Museu'];
    const coresCategorias = ['#e74c3c', '#3498db', '#f1c40f', '#9b59b6', '#2ecc71', '#f36608'];

    
    const elRadical = document.getElementById('num-radical');
    const elFamilia = document.getElementById('num-familia');
    const elComida = document.getElementById('num-comida');
    const elPersonagens = document.getElementById('num-personagens');
    const elZoologico = document.getElementById('num-zoologico');
    const elMuseu = document.getElementById('num-museu');

    if (elRadical) elRadical.innerText = dadosCategorias[0];
    if (elFamilia) elFamilia.innerText = dadosCategorias[1];
    if (elComida) elComida.innerText = dadosCategorias[2];
    if (elPersonagens) elPersonagens.innerText = dadosCategorias[3];
    if (elZoologico) elZoologico.innerText = dadosCategorias[4];
    if (elMuseu) elMuseu.innerText = dadosCategorias[5];

    
    const idsSetores = ['radical', 'familia', 'comida', 'personagens', 'zoologico', 'museu'];
    idsSetores.forEach((id, i) => {
        const el = document.getElementById('visitas-' + id);
        if (el) el.innerText = dadosCategorias[i];
    });

    
    if (meuGraficoRosca) {
        meuGraficoRosca.data.datasets[0].data = dadosCategorias;
        meuGraficoRosca.update();
    } else {
        const ctxRosca = document.getElementById('donutChart');
        if (ctxRosca) {
            meuGraficoRosca = new Chart(ctxRosca.getContext('2d'), {
                type: 'doughnut',
                data: {
                    labels: labelsCategorias,
                    datasets: [{
                        data: dadosCategorias,
                        backgroundColor: coresCategorias,
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: { display: false }
                    }
                }
            });
        }
    }

  
    if (meuGraficoBarras) {
        meuGraficoBarras.data.datasets[0].data = dadosCategorias;
        meuGraficoBarras.update();
    } else {
        const ctxBarras = document.getElementById('barChart');
        if (ctxBarras) {
            meuGraficoBarras = new Chart(ctxBarras.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: labelsCategorias,
                    datasets: [{
                        label: 'Visitantes por Atração',
                        data: dadosCategorias,
                        backgroundColor: coresCategorias,
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: { display: false }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: { precision: 0 }
                        }
                    }
                }
            });
        }
    }
}

window.addEventListener('DOMContentLoaded', () => {
    atualizarTabela();
    atualizarResumo();
    atualizarGraficosDinamicos();
});