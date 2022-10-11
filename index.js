alert("BIENVENIDO A FABRICA DE PIZZAS!!!")

class Pizza {
    constructor (tipo, ingredientes, precio ) {
        this.tipo = tipo
        this.ingredientes = ingredientes
        this.precio = precio
    }
}


let pizza1 = new Pizza ("Pizza cuatro quesos", ["salsa de tomate", "oregano", "aceitunas","queso mozarela", "queso gorgonzola", "queso fontina", "queso parmesano"], 400)
let pizza2 = new Pizza ("Pizza fugazzeta", ["salsa de tomate", "oregano", "aceitunas","queso mozarela", "cebolla"], 600)
let pizza3 = new Pizza ("Pizza con jamon", ["salsa de tomate", "oregano", "aceitunas","queso mozarela", "jamon"], 800)
let pizza4 = new Pizza ("Pizza calabresa", ["salsa de tomate", "oregano", "aceitunas","queso mozarela", "queso provolone", "morron", "calabresa"], 1000)
let pizza5 = new Pizza ("Pizza napolitana", ["salsa de tomate", "oregano", "aceitunas","queso mozarela", "tomate fresco", "anchoas", "orégano", "alcaparras", ], 1200)

let menu = [pizza1,pizza2,pizza3,pizza4,pizza5]
let conocerProductos = Number
conocerProductos = prompt("¿Quiere conocer nuestros Menú o quiere hacer un pedido? (ingrese un número) \n 1: ver menú \n 2: hacer un pedido")

if (conocerProductos == 1) {
    alert(`Menú: ${menu.map((pizza,i) => `\n ${(i+1)}: ${pizza.tipo}, ingredientes: \n  ${pizza.ingredientes}` )}`)
}

let cantidadDePizzas = 0

do {
    cantidadDePizzas = prompt("¿Cuántas pizzas va a llevar? (ingrese un valor mayor a 0)")
} while (cantidadDePizzas < 1);

let tipoDePizza
let arrayDePizzas = []
let precioTotalPizzas = 0
let confirmacion 

for (let i = 0; i < cantidadDePizzas; i++) {
    
    if ((i == 0) && (cantidadDePizzas>1)) {

        confirmacion = prompt("¿Todas del mismo tipo? \n 1: si \n 2: no")

        if (confirmacion == 1) {
            do {
                tipoDePizza = prompt("¿Qué tipo de pizza? (ingrese el número) \n 1: Pizza cuatro quesos \n 2: Pizza fugazzeta \n 3: Pizza con jamon \n 4: Pizza calabresa \n 5: Pizza napolitana")
            } while(tipoDePizza< 1 || tipoDePizza > 5)

            switch (tipoDePizza) {
                case "1":
                    precioTotalPizzas += (pizza1.precio * cantidadDePizzas)
                    break;
                case "2":
                    precioTotalPizzas += (pizza2.precio * cantidadDePizzas)
                    break;
                case "3":
                    precioTotalPizzas += (pizza3.precio * cantidadDePizzas)
                    break;
                case "4":
                    precioTotalPizzas += (pizza4.precio * cantidadDePizzas)
                    break;
                case "5":
                    precioTotalPizzas += (pizza5.precio * cantidadDePizzas)
                    break;
            }

            i = cantidadDePizzas
        }

    } else {

        do {
            tipoDePizza = prompt("¿Qué tipo de pizza? (ingrese el número) \n 1: Pizza cuatro quesos \n 2: Pizza fugazzeta \n 3: Pizza con jamon \n 4: Pizza calabresa \n 5: Pizza napolitana")
        } while((tipoDePizza< 1) || (tipoDePizza > 5))   
    
        switch (tipoDePizza) {
            case "1":
                arrayDePizzas.push(pizza1)
                precioTotalPizzas += pizza1.precio
                break;
            case "2":
                arrayDePizzas.push(pizza2)
                precioTotalPizzas += pizza2.precio
                break;
            case "3":
                arrayDePizzas.push(pizza3)
                precioTotalPizzas += pizza3.precio
                break;
            case "4":
                arrayDePizzas.push(pizza4)
                precioTotalPizzas += pizza4.precio
                break;
            case "5":
                arrayDePizzas.push(pizza5)
                precioTotalPizzas += pizza5.precio
                break;
        }
    }

}

alert(`Su pedido es el siguiente: ${arrayDePizzas.map((pizza, i) => `\n ${(i+1)}:   ${pizza.tipo} ------ ${pizza.precio}`)} \n total a pagar: ${precioTotalPizzas} `)

let nombre = prompt("Ingrese su nombre completo")
let metodoDePago
do {
    metodoDePago = prompt("Ingrese el metodo de pago: \n 1: tarjeta de Credito \n 2: tarjeta de Debito \n 3: Efectivo")
} while((metodoDePago < 0) || (metodoDePago > 3))

let ticket = (nombre,metodoDePago) => {
    alert(`----------TICKET---------- \n Nombre: ${nombre} ${arrayDePizzas.map((pizza, i) => `\n ${(i+1)}:   ${pizza.tipo} ------ ${pizza.precio}`)} \n total a pagar: ${precioTotalPizzas} \n Metodo de pago: ${metodoDePago}`)
}
ticket(nombre,metodoDePago)
console.log(arrayDePizzas);

// console.log(arrayDePizzas.push(pizza1));
// console.log(arrayDePizzas.push(pizza2));
// console.log(arrayDePizzas.push(pizza3));
// console.log(arrayDePizzas.push(pizza4));
// precioTotalPizzas += pizza1.precio
// precioTotalPizzas += pizza2.precio
// precioTotalPizzas += pizza3.precio
// precioTotalPizzas += pizza4.precio
// console.log(precioTotalPizzas);


// console.log(`pedido:  ${arrayDePizzas.map((pizza, i) => `\n ${(i+1)}:   ${pizza.tipo} ------ ${pizza.precio}`)} \n total a pagar: ${precioTotalPizzas}`)
