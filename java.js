let clientes = JSON.parse(localStorage.getItem('clientes')) || []


function mostrarMensagemCliente(texto, erro) {
    const mensagem = document.getElementById('mensagem-cliente');
    if (!mensagem) return;
    mensagem.textContent = texto;
    mensagem.className = 'mensagem-cliente' + (erro ? ' erro' : ' ok');
}

function abrir_modal_usuario(){
document.getElementById('modal-usuario').showModal()
}

function abrir_modal_produtos(){
    document.getElementById('modal-produtos').showModal()
    }


function cadastrar_cliente() {
    const campoNome = document.getElementById('input-nome');
    const campoSenha = document.getElementById('input-senha');
    const campoCpf = document.getElementById('input-cpf');
    const campoData = document.getElementById('input-data');

    const nome = campoNome.value.trim();
    const senha = campoSenha.value;
    const cpf = campoCpf.value.replace(/\D/g, '');
    const data = campoData.value;

    if (!nome || !senha || !cpf || !data) {
        mostrarMensagemCliente('Preencha nome, senha, CPF e data.', true);
        return;
    }
    if (cpf.length !== 11) {
        mostrarMensagemCliente('O CPF precisa ter 11 dígitos.', true);
        return;
    }

    const codigoExiste = codigo => clientes.some(c => String(c.codigo_barra) === codigo);


    let codigo_barra;
    if (!codigo_barra) {
        do {
            codigo_barra = gerarCodigoBarras();
        } while (codigoExiste(codigo_barra));
    }

    const novoCliente = {
        id: Date.now(),
        nome,
        senha,
        cpf,
        codigo_barra,
        data,
    }

    clientes.push(novoCliente)
    console.log(clientes)
    localStorage.setItem('clientes', JSON.stringify(clientes))

    campoNome.value = ''
    campoSenha.value = ''
    campoCpf.value = ''
    campoData.value = ''




    mostrarMensagemCliente(`Cliente ${nome} cadastrado. Código de barras: ${codigo_barra}`, false)
    atualizarResumo()
}


function excluir_cliente() {
    const campoCodigoBarra = document.getElementById('input-codigo-barra');
    const codigo = campoCodigoBarra.value.trim();

    if (!codigo) {
        mostrarMensagemCliente('Digite o código de barras do cliente que deseja excluir.', true);
        return;
    }

    const indice = clientes.findIndex(c => String(c.codigo_barra) === codigo);
    if (indice === -1) {
        mostrarMensagemCliente('Nenhum cliente cadastrado com esse código de barras.', true);
        return;
    }

    const [removido] = clientes.splice(indice, 1);
    localStorage.setItem('clientes', JSON.stringify(clientes))

    for (let i = produtos.length - 1; i >= 0; i--) {
        if (String(produtos[i].clienteCodigoBarra || '') === codigo) {
            produtos.splice(i, 1);
        }
    }
    localStorage.setItem('produtos', JSON.stringify(produtos))

    campoCodigoBarra.value = ''
    const campoClienteProduto = document.getElementById('cliente-codigo-produto');
    if (campoClienteProduto.value.trim() === codigo) campoClienteProduto.value = ''

    mostrarMensagemCliente(`Cliente ${removido.nome} excluído.`, false)
    atualizarTabela()
    atualizarResumo()
    atualizarGraficosDinamicos()
}
