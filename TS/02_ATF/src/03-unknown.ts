let anyVar: any;
anyVar =true;
anyVar = undefined;
anyVar = 1;

let isNew: boolean = anyVar;

anyVar.doSomething()
anyVar.toUpperCase()

let unknownVar: unknown;
unknownVar = undefined;
unknownVar = undefined;
unknownVar = null;
unknownVar = "afsd";

// unknownVar.doSomething()

if(typeof unknownVar == 'string'){
  unknownVar.toUpperCase();
}

const parse = (str: string):unknown => {
  return JSON.parse(str)
}

JSON.parse('{name:"nicolas"}')
JSON.parse('sad}')

if( typeof unknownVar == 'boolean'){
  let isNew2: boolean = unknownVar
}
