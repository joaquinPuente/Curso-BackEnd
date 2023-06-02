// .TRIM quita los espacio inecesario

const saludos = '                  hola, saludos'
console.log(saludos.trim())

const mensajes = []
const mensaje1 = "   Yes!!!"
const mensaje2 = "  "
const mensaje3 = "   No"

function addMessage(msn) {
    if(msn.trim() != '')
    mensajes.push(msn)
}

addMessage(mensaje1)
addMessage(mensaje2)
addMessage(mensaje3)

// FLAT = Convierte todo en un array
const arrayAnidado = [1,4,12,52,-1212,0,[21,56,7,12],90,92,[127,122]]
const result = arrayAnidado.flat()
console.log(result)