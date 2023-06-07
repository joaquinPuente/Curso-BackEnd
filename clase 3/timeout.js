
const temporizador = (callback) => {
    setTimeout (() => {
        callback()}, 5000)
    }
    
const operacion = () => {console.log('BOOOOOOOOOM')}

temporizador(operacion)