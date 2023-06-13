export interface IAllFields {
  date: string;
  loglevel: string;
  body: {
    transactionId: string;
    err: string;
  }
}

// class Example {
//   constructor(){
//     this.methiod = this.methiod.bind(this)
//   }

//   methiod(){
//     console.log(this);    
//   }
// }

// const ex = new Example();
// const { methiod } = ex;