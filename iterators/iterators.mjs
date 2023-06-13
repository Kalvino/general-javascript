// iterator protocol defines how to produce a sequence of values from an (iterable) object 
// An object becomes an iterator when it implements a next() method / iterator protocol
// // returns an object which implements iterator protocol
// // function makeRangeIterator(start = 0, )
const arr = [1,2,3,4,5,5];

// // for (let n of arr) {
// //   console.log(n);
// // }

// // const iterator = arr.values();
// console.log(arr.values() );

// // for (let n of iterator) {
// //   console.log(n);
// // }

let map = new Map([[1,'two'],['two',2],[3,'three'],['four',4]]);
let set = new Set();
set.add([1,2,3,4]);
set.add('blue');

for (const key of set) {
  console.log(key);
}

const mySet2 = new Set('me');

console.log([...mySet2]);
console.log(typeof arr);