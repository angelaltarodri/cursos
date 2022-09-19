export class MyUser{
  name: string;
  profesion: string;
  age: number;

  constructor(name: string, profesion: string, age: number) {
    this.name = name;
    this.profesion = profesion;
    this.age = age;
  }

  printPresentation() : string{
    return `My name is ${this.name}, I'm a(n) ${this.profesion} and I'm ${this.age} years old.`
  }

  changeProfesion(newProfesion: 'engineer' | 'comunicator' | 'web developer'){
    this.profesion = newProfesion;
    console.log(`I'm ${this.name} and my new profesion is ${this.profesion}.`)
  }
  addYears(amount: number){
    this.age += amount;
    console.log(`I'm ${this.name} and now I'm ${this.age} years old.`)
  }
}

const myUser = new MyUser('Angel', 'programmer', 26);
// console.log(myUser.printPresentation())
// myUser.changeProfesion('engineer')
// myUser.addYears(5)
console.log(myUser.age)
