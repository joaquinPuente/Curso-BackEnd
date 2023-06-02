// ECMAscript  07
// Uso de los astericos 

const valores = [1,2,3,4,5,8,9]
const nuevosValores = valores.map (numero => numero **2)
const nuevosValores2 = valores.map( (numero,idx) => {
    console.log(numero,idx)
    return numero + 1

} )

console.log(nuevosValores)


