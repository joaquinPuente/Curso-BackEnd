const user = prompt('escribir nombre: ')
const socket = io()

socket.emit('new', user)