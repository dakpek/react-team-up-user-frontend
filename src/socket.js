import openSocket from 'socket.io-client'

const socket = openSocket('https://mobpong-backend.herokuapp.com/')
socket.on('connection', ()=> console.log('connected'))

export default socket;
