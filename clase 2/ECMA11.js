const varTest = 1
const varAsignable = varTest || "Sin valor"

console.log('varA1', varAsignable)

const varAsignable2 = varTest ?? "sin valor"
console.log('varA2  =>', varAsignable2)

//Private Atrributes

class Persona {
    #fullname
    constructor(name,lastname){
        this.name = name
        this.lastname = lastname
        this.#fullname = `${name} ${lastname}`
    }

    get = () => {
        return this.#fullname
    }
}

const nicolas = new Persona ('Nicolas', 'Ayala')
console.log