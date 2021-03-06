let events = require('events')
let util = require('util')

let Person = function(name) {
  this.name = name
}

util.inherits(Person, events.EventEmitter)

let person1 = new Person('James')
let person2 = new Person('Ana')
let person3 = new Person('Chris')

const people = [person1, person2, person3]

people.forEach((person) => {
  person.on('speak', (message) => {
    console.log(person.name + ' said: ' + message)
  })
})

person1.emit('speak', 'Hey, my name is James')
person2.emit('speak', 'How are you doing?')
person3.emit('speak', 'Look at you two talking and all!')