 let clientes = JSON.parse(localStorage.getItem('clientes')) || []

function cadastrar_cliente(){
    const campoCodigoBarra = document.getElementById("input-codigo-barra");
    if (!campoCodigoBarra.value) {
        campoCodigoBarra.value = gerarCodigoBarras();
    }

    const novasClientes = {
        id: Date.now(),
        nome: document.getElementById('input-nome').value,
        senha: (document.getElementById("input-senha").value),
        cpf: Number(document.getElementById("input-cpf").value),
        codigo_barra: campoCodigoBarra.value,
        data: new Date(document.getElementById("input-data").value),
    }

    clientes.push(novasClientes)
    console.log(clientes)
    localStorage.setItem('clientes', JSON.stringify(clientes))

  
    document.getElementById('cliente-codigo-produto').value = novasClientes.codigo_barra
    atualizarResumo()
}
