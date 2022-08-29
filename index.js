let nombre=(prompt("Buenos dias, tardes o noches. Con quien tengo el placer de hablar?"))
let edad=(parseInt(prompt("Cual es tu edad?")))

// if (edad >= 18){
//     alert ("Un gusto " + nombre + ", espero que estes bien.")
// }
// else if (edad <= 18){
//     alert ("Lo sentimos, debes ser mayor de 18 años")
    
// }
if (edad >= 18){
alert ("Un gusto " + nombre + ", espero que estes bien. Hoy contamos con unos muy buenos descuentos de hasta el 25% por el dia del padre ")

let totalCompra = 0
let productoSeleccionado = parseInt(prompt("Ingresa el numero del producto que quieras comprar: \n 1. Botella de Cerveza \n 2.Wisky \n 3.Coca-Cola 1.75L \n 4. Fernet"))

let seguirComprando = true
let decision

while (seguirComprando === true) {
    if (productoSeleccionado === 1) {
        totalCompra = totalCompra + 600
    } else if (productoSeleccionado === 2) {
        totalCompra = totalCompra + 7000
    } else if (productoSeleccionado === 3) {
        totalCompra = totalCompra + 500
    } else if (productoSeleccionado === 4) {
        totalCompra = totalCompra + 1500
    } else {
        productoSeleccionado = parseInt(
            prompt(
                "Ingresa un producto existente: Ingresa el numero del producto que quieras comprar: \n 1.Cerveza \n 2.Wisky \n 3.Coca \n 4. Fernet"))
        continue
    }

    decision = parseInt(prompt('Quieres seguir agregando productos? 1.Si - 2.No'))
    if (decision === 1) {
        productoSeleccionado = parseInt(prompt(
            "Ingresa el numero del producto que quieras comprar: \n 1.Cerveza \n 2.Wisky \n 3.Coca \n 4. Fernet"))
    } else if (decision === 2) {
        seguirComprando = false
    }
}

alert('El valor total sin descuento ni impuestos es: ' + totalCompra)

function calcularPrecioConDescuento(valor) {
    let descuento = 0
    if (valor <= 1000) {
        descuento = 10
    } else if (valor > 1000 && valor <= 1500) {
        descuento = 15
    } else if (valor > 1500 && valor <= 2000) {
        descuento = 20
    } else {
        descuento = 25
    }
    let valorDescuento = valor * (descuento / 100)
    valor = valor - valorDescuento
    return valor
}
let valorConDescuento = calcularPrecioConDescuento(totalCompra)
alert('El total con descuento sin impuestos es: ' + valorConDescuento)

function calcularPrecioConImpuesto(valor) {
    const impuestos = valor * (8 / 100)
    return valor + impuestos
}

let valorFinalConImpuesto = calcularPrecioConImpuesto(valorConDescuento)
alert('Total a pagar: ' + valorFinalConImpuesto)
}
else if (edad <= 18){
    alert ("Lo sentimos, debes ser mayor de 18 años")
    
}