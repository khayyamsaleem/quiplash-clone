import io from 'socket.io-client'

const socket = io('/')
export const createPrivateRoom = (roomName, playerName, cb) => {
    socket.emit('create-private-room', {
        playerName,
        roomName
    })
    socket.on('create-private-room', (res) => {
        cb(res.roomCode)
    })
}

export const joinPrivateRoom = (roomCode, playerName, cb) => {
    socket.emit('join-private-room', {code: roomCode, name: playerName})
    socket.on('join-private-room', output => {
        cb(output)
    })
}

export default socket
