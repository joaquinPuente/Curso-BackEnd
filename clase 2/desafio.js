
class TicketManager {
    #precioBaseDeGanancia
    constructor() {
        this.events = []
        this.#precioBaseDeGanancia = 0.15
    }

    getEvents = () => { return this.events }

    addEvents = (name, place,price,capacidad,fecha) => {
        const event = {
            name,
            place,
            price: price + (price * this.#precioBaseDeGanancia),
            capacidad: capacidad ?? 50,
            fecha: fecha ?? new Date().toLocaleDateString(),
            participantes:[]
        }
        this.events.push(event)
    }

}

const manager = new TicketManager()
manager.addEvents('Lollapaloza','San Isidro', 100, 0, '')

console.log(manager.getEvents)