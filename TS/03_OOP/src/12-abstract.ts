import {Animal, Dog} from './09-protected'

//con clases abstractas evitamos que crean clases a partir de Animal

// const animal = new Animal('Elite')
// animal.greeting()

const chaise = new Dog('Chaise', 'Angel')
chaise.woof(3)
