export class Animal {
  constructor(
    public name: string
  ){}

  move(){
    console.log('Going!')
  }
  greeting(){
    return `HELLO, I'm ${this.name}`
  }
}

export class Dog extends Animal{
  constructor(
    public name: string,
    public owner: string
    ){
      super(name)
    }
  woof(times:number){
    for (var i= 0; i <times; i++){
      console.log('Woof!')
    }
  }
}

const tintinela = new Animal('Tintinela')
tintinela.move()
console.log(tintinela.greeting())

const capitan = new Dog('Capitan', 'Píero')
capitan.move()
console.log(capitan.greeting())
capitan.woof(2)
console.log(capitan.owner)
