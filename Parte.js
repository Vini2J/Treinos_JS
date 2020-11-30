function verificar() {
    var nome = document.getElementById('nome')
    var res = document.getElementById('res')
    var Global = String(nome.value)
    res.innerHTML = `Seu Nome e:<strong>${Global}</strong>`
    if (Global.length == 0) {
        window.alert('ERRO: CAMPO VAZIO PREENCHA TODOS OS DADOS')
        res.innerHTML = ``
    }
}
function Idade() {
    var idade = document.getElementById('idade')
    var res1 = document.getElementById('res1')
    var Global = Number(idade.value)
    res1.innerHTML = `Voce tem:<strong>${Global}</strong> anos`
    if (Global == 0) {
        window.alert('ERRO: CAMPO VAZIO PREENCHA TODOS OS DADOS')
        res1.innerHTML = ''
    }else if (Global >= 110) {
        window.alert('ERRO: CAMPO INVALIDO')
        res1.innerHTML = ''
    }
}
function data() {
    var na = document.getElementById('na')
    var resultado = document.getElementById('resultado')
    var Global = Object(na.value)
    resultado.innerHTML = `Voce Nanceu EM:<strong>${Global}</strong>`
    if (Global == 0) {
        window.alert('ERRO: CAMPO VAZIO PRENECHA TODOS OS DADOS')
        resultado.innerHTML = ''
    }
}