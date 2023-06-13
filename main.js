const cars = ["BMW", "Volvo", "Mazda"]

for (let car in cars) {
  console.log(car)
  //expect "0"..
}

for (let car of cars){
  console.log(car)
  // expect "BMW"...
}

cars.forEach((_v,i) => console.log(i)) // expect "BMW"

console.log(cars.sort())
console.log(cars.length)
console.log([Array(5).keys()]);

for (const x of Array(5).keys()) {
  console.log(x, String.fromCharCode('b'.charCodeAt(0) + x));
}

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("kiwi", "Lemon", "Pineapple");
console.log(fruits);

Array.prototype.myCase = function(){
  for (i = 0;i < this.length;i++){
    this[i] = this[i] + "heye";
  }
}

console.log(fruits.myCase());
console.log(Number(9).toString(2))
var numbers = [175, 50, 25];

// numbers.reduce()

const myMap = new Map();

myMap.set("Nathan", "555-0182");
myMap.set("Jane", "315-0322");
console.log(myMap)

for (let [key, value] of myMap) {
  console.log(`${key} = ${value}`);
}

for (let [k,v] of myMap){
  console.log(`${k} is ${v}`)
}

tickets = [["JPN", "PHL"], ["BRA", "UAE"], ["USA", "BRA"], ["UAE", "JPN"]];



function getRoute(arr){
  let departures = []
  let destinations = []
  arr.forEach((v,i,a)=>{
    // console.log(`${v}:${i}:${a}`)
    departures.push(v[0])
    destinations.push(v[1])
  });
  
  const startOfJourney = arr.filter((v)=>{
    if (destinations.indexOf(v[0])=== -1){
      console.log(v);
      return v
    }
  });
  
  const itinerary = []
  startOfJourney[0].forEach(v => itinerary.push(v))
  for (let i = 0; i < arr.length;i++){
    if (arr[i][0] == itinerary[itinerary.length-1]){
      itinerary.push(arr[i][1])
    }
  }
  console.log(itinerary.join())
}

console.time();
getRoute(tickets);
console.timeEnd();

let sym1 = Symbol()
let sym2 = Symbol('foo')
let sym3 = Symbol('foo')

obj = {
  sym3 : "fof",
}
obj[sym1] = "fof";
obj[sym2] = "libo";

console.log(sym1);
console.log(sym2);
console.log(sym3);
console.log(Object.getOwnPropertySymbols(obj));
console.log(Object.getOwnPropertyNames(obj));

console.log(obj[sym2]);

map = new Map();

console.log(map.set('1', 'str1')
.set(1, 'num1')
.set(true, 'bool1'));

ele = [ 'JPN', 'PHL' ]
console.log(tickets[0])

const prompt = require('prompt');
names = ["Vino","cal","Libo","ochualvo", "Vino"];
var searchString = "Vino";
var idx = names.indexOf(searchString);

let indices = []
while (idx != -1){
  indices.push(idx);
  idx = names.indexOf(searchString, idx + 1);
}
console.log(indices);
