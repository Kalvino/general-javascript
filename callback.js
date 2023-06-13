// logs 1,3, timeout
console.log('1');
setTimeout(() => {
  console.log('two seconds timeout');
}, 1000);
setTimeout(() => {
  console.log('one second timeout');
},1000)

console.log(3);

// const names = ['calvin', 'Maria', 'Jeje'];

// const myForEach = (arr,cb) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (i == 1) {
//       break;
//     }
//     const element = arr[i];
//     cb(element);
//   }
// }

// const logger = (name) => {
//   console.log(name);
// }


// myForEach(names,logger)

// myForEach(names,(name)=>{
//   console.log(name);
// })
