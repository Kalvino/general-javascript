const delayedResponses = {
  delays: [2000,3000,4000,5000,6000],
  wait(delay) {
    return new Promise(resolve =>{
      setTimeout(resolve, delay);
    });
  },

  async *[Symbol.asyncIterator](){
    for (const delay of this.delays){
      await this.wait(delay);
      yield `I had to wait for ${delay} milliseconds`;
    }
  },
};

// (async () => {
//   for await (const resp of delayedResponses){
//     console.log(resp);
//   }
// })();

// TODO spread operator asynciterator


function* makeIterator(arr) {
  let index = 0;
  while (index < arr.length){
    yield* arr[index++]
  }  
}


const iterator = makeIterator(['s', 'b', 'g']);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());