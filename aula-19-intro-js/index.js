//alert ('Foi mano!')
// let
// var
let nome = 'José Eduardo - vulgo Pão'
console.log(nome)
let num = 9
let mult = 5
let res = 0
res = num * mult
//let cont = 1
/*while (cont < 11) {
    console.log(num * cont)
    cont++
}
 for(let cont =1;cont < 11; cont++){
        console.log(`${num} x ${cont} = ${cont * num} <br>`)
    } */
var x = 0;
let b = '78'
x = Number(b)
console.log(x)
const valor = 45687
const userId = valor
console.log(userId)
function abrir(x){
 
}
console.log(abrir(15))
let l1 = '2'
let l2 = '2'
let l3 = '3'
console.log (`O valor desse cara é: ${l1*'154'}`)
// template string
// document.write(abrir())
function tabuada (){
    let numero = Number(document.getElementById ('txtn').value)
    let resUL = document.getElementById ('result')
    resUL.innerHTML = ''
    for (let i= 0; i < 11; i++){ 
        let item = document.createElement('li')
        item.innerHTML = numero + ' x ' + i + ' = ' + numero*i
        item.id= `item${i}`
        resUL.appendChild(item)
    }
}