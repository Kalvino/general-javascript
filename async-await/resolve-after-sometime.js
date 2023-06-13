function resolveAfter3Secs() {
  return new Promise(resol => {
    setTimeout(() => {
      resol("Brobro");
    });
  })
}

 function asyncCall() {
  console.log("Calling");
  // result = resolveAfter3Secs();
  
  console.log(resolveAfter3Secs());
  console.log("waiting")
}

asyncCall();

// const sym = Symbol("example");
// console.log(sym[Symbol.toPrimitive]());


// outer_block: {
//   inner_block: {
//     console.log('1');
//     break outer_block; // breaks out of both inner_block and outer_block
//     console.log(':-('); // skipped
//   }
//   console.log('2'); // skipped
// }

// function sum(x, y, z) {
//   return x + y + z;
// }

// const numbers = [1, 2, 3,4];


// console.log(...numbers);
// // expected output: 6

// console.log(sum.apply(null, numbers));
// // expected output: 6