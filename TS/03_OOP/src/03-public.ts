export class MyUser{
  public name: string;
  public profesion: string;
  readonly age: number; //si es readonly no se puede modificar

  constructor(name: string, profesion: string, age: number) {
    this.name = name;
    this.profesion = profesion;
    this.age = age;
  }

  public printPresentation() : void{
    console.log(`My name is ${this.name}, I'm a(n) ${this.profesion} and I'm ${this.age} years old.`)
  }

  public changeProfesion(newProfesion: 'engineer' | 'comunicator' | 'web developer'){
    this.profesion = newProfesion;
    console.log(`I'm ${this.name} and my new profesion is ${this.profesion}.`)
  }
  // public addYears(amount: number){
  //   this.age += amount;
  //   console.log(`I'm ${this.name} and now I'm ${this.age} years old.`)
  // }
}

const myUser = new MyUser('Angel', 'programmer', 26);
myUser.printPresentation()
myUser.changeProfesion('engineer')
// myUser.addYears(5)
console.log(myUser.age)

/*
si es publica la informacion y metodos, es facil modificarlos

*/
