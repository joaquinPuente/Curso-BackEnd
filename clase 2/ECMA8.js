const impuestos = {
    iva:19,
    renta: 80,
    carro: 170
}
//sub arrays
const parLlaveValor = Object.entries(impuestos)
console.log(parLlaveValor)

/// campos del objeto
const fields = Object.keys(impuestos)
console.log(fields)

//valores del objeto
const values = Object.values(impuestos)
console.log(values)

const impuestosTotales = values.reduce((acumulacion,item) =>{
    console.log('->', acumulacion, item)
    return acumulacion - item
}, 0 ) 

console.log('Resultado ', impuestosTotales)