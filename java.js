 let clientes = []

function cadastrar_cliente(){
    const novasClientes = {
        id: Date.now(),
        nome: document.getElementById('input-nome').value,
        senha: (document.getElementById("input-senha").value),
        cpf: Number(document.getElementById("input-cpf").value),
        codigo_barra: Number(document.getElementById("input-codigo-barra").value),
        data: new Date(document.getElementById("input-data").value),
    }

    clientes.push(novasClientes)
    console.log(clientes)
    localStorage.setItem('clientes', JSON.stringify(clientes))
}