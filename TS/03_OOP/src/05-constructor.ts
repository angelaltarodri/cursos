export class MyUser{

  constructor( //si no pones el public o el private no va a automatizar la declaracion de la variable, seria solo una variable con alcance en el mismo constructor
    public name: string = 'Angel',
    public profesion: string = 'Administrator',
    private age: number = 26 //valores por defecto en caso no se ingresen los parametros
  ) {}

  public printPresentation() : void{
    console.log(`My name is ${this.name}, I'm a(n) ${this.profesion} and I'm ${this.age} years old.`)
  }

  public changeProfesion(newProfesion: 'engineer' | 'comunicator' | 'web developer'){
    this.profesion = newProfesion;
    console.log(`I'm ${this.name} and my new profesion is ${this.profesion}.`)
  }
  public addYears(amount: number){
    this.age += amount;
    console.log(`I'm ${this.name} and now I'm ${this.age} years old.`)
  }
}

const myUser = new MyUser();
myUser.printPresentation()
myUser.changeProfesion('engineer')
myUser.addYears(5)
console.log(myUser)

