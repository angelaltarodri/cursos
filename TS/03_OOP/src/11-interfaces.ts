//IMPLEMENTS

export interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void;
  // disconnect(): void;
  isConnected(name:string):boolean;
}

// const driver: Driver = {
//   database: '',
//   password: '',
//   port: 1,
// }

class PostgresDriver implements Driver{
  constructor(
    public database: string,
    public password: string,
    public port: number,
    private host:number
    ){}
  connect(): void {

  }
  isConnected(name:string):boolean{
    return true
  }
}

class OracleDriver implements Driver{
  constructor(
    public database: string,
    public password: string,
    public port: number){}
  connect(): void {
    //code
  }
  isConnected(name:string):boolean{
    return false
  }
}
