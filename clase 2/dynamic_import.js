const modo = 'calculos'

async function exampleImport() {
    if(modo == 'calculos') {
        // Importa libreria solo
        const {defalt: Calculadora} = await import ('./lib.js')
        let calc = new Calculadora()
        console.log(calc.cumar(12,18))
    }
}

exampleImport()