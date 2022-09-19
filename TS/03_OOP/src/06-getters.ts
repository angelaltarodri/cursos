export class MyUser{

  constructor( //si no pones el public o el private no va a automatizar la declaracion de la variable, seria solo una variable con alcance en el mismo constructor
    public name: string = 'Angel',
    public profesion: string = 'Administrator',
    private _age: number = 26 //valores por defecto en caso no se ingresen los parametros
  ) {}

  public printPresentation() : void{
    console.log(`My name is ${this.name}, I'm a(n) ${this.profesion} and I'm ${this._age} years old.`)
  }

  public changeProfesion(newProfesion: 'engineer' | 'comunicator' | 'web developer'){
    this.profesion = newProfesion;
    console.log(`I'm ${this.name} and my new profesion is ${this.profesion}.`)
  }
  public addYears(amount: number){
    this._age += amount;
    console.log(`I'm ${this.name} and now I'm ${this._age} years old.`)
  }
  get age(){ //los get nunca deben retornar un voiod //siempre retornan algo
    //code
    return this._age
  }

  get isAdult(): boolean {
    if(this.age > 17){
      return true
    }
    return false
  }

}

const myUser = new MyUser();
const myUser2 = new MyUser('Margorie', 'economist', 24);

myUser.age
console.log(myUser.isAdult)
