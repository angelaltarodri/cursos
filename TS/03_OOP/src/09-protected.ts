export abstract class Animal {
  constructor(
    // private name: string

    protected name: string // solo se puede utilizar de forma interna, pero a la vez se va a poder heredar a los hijos como Dog
  ){}

  move(){
    console.log('Going! Move1!')
  }
  greeting(){
    return `HELLO, I'm ${this.name}`
  }
  protected doSomething(){
    console.log('dooooo')
  }
}

export class Dog extends Animal{
  constructor(
    name: string,
    public owner: string
    ){
      super(name)
    }
  woof(times:number): void{
    for (var i= 0; i <times; i++){
      console.log(`Woof! ${this.name}`)
    }
    this.doSomething()
  }
  move(): void {
    console.log('Move2!')
    super.move()
  }
}

const capitan = new Dog('Capitan', 'Píero')
// console.log(capitan.greeting())

// capitan.name = 'capitanchico'
capitan.woof(1)
capitan.move()
