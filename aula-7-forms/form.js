function dados(){
    let inputnome = document.getElementById('nome')
    let inputcpf = document.getElementById('cpf')
    let inputemail = document.getElementById('email')
    let inputinstrumento = document.getElementById ('instrumento')

    let obj = new Object()
    obj.nome = inputnome.value
    obj.cpf = inputcpf.value
    obj.email = inputemail.value
    obj.instrumento = inputinstrumento.value

    let objeto = JSON.stringify(obj)
    alert(objeto)
}