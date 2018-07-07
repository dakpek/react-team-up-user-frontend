import openSocket from 'socket.io-client'
const socket = openSocket('192.168.1.187:2000')
socket.on('connection', ()=> console.log('connected'))

export default socket;
