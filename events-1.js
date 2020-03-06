let events = require('events')

let myEmitter = new events.EventEmitter()

myEmitter.on('someEvent', (message) => {
  console.log(message)
})

myEmitter.emit('someEvent', 'the event was emitted')