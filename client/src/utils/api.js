import io from 'socket.io-client'
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:1337'

const socket = io(API_URL)

export const createPrivateRoom = (roomName, playerName, cb = () => {}) => {
    socket.emit('create-private-room', {
        playerName,
        roomName
    })
    socket.on('create-private-room', (res) => {
        cb(res.roomCode)
    })
}

export const joinPrivateRoom = (roomCode, playerName, cb = () => {}) => {
    socket.emit('join-private-room', {code: roomCode, name: playerName})
    socket.on('join-private-room', output => {
        cb(output)
    })
}

export const addPrompt = (prompt, cb = () => {}) => {
    socket.emit('add-prompt', { prompt })
}

export const getPlayers = (roomCode, cb = () => {}) => {
    socket.emit('get-players', { roomCode })
    socket.on('get-players', ({ players }) => {
        cb(players)
    })
}

export default socket
