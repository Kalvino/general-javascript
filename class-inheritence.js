class Vehicle {
  // called whenever vehicle instance is called
  constructor(type){
    this.vehicleType = type
  }

  // class/static method
  static welcome() {
    console.log('Welcome to vehicle static method');
  }

  // inheritable instance method - listed/moved under __proto__
  blowHorn(){
    console.log('Hoink Hoink');
  }

  // instance method/property - own property ; all arrow functions
  // instance values inherited under own property
  cleaner = ()=>{
    console.log('instance method, not pushed to __proto__');
  }
}

Vehicle.prototype.sideMirrors = 10;

let vehicle = new Vehicle();

class Bus extends Vehicle {
  constructor(make){
    super("Bus"); //executes parents class constructor; passes vehicleType to mother class - Vehicle.call('Bus')
    this.make = make;
  }

  welcome(){
    // run parent class/static method here
    console.log(super.welcome());
  }
}





// any property other than normal function would be moved to instance - to create inheritable property
// for the bus we would do this:
Bus.prototype.numberOfWheels = 6;

let bus = new Bus('Leyland');
console.log(Vehicle.welcome());
console.log(bus.vehicleType);
console.log(bus.make);
console.log(bus.blowHorn());
console.log(bus.cleaner());
console.log(bus.hasOwnProperty('cleaner') );
console.log(bus.hasOwnProperty('blowHorn') );
console.log(bus.numberOfWheels );
console.log(Object.getOwnPropertyNames(bus));
console.log(bus.sideMirrors);
console.log(Object.getOwnPropertyNames(Vehicle));
console.log(Object.getPrototypeOf(vehicle));
console.log(Object.getOwnPropertySymbols(bus));
console.log(Bus.prototype);
console.log(Vehicle.prototype);
// console.log(Vehicle. );



global.lino = 'lobo'
console.log(global);

const object = {vino: "khal", libo: "odoyo"};
let { vino } = object;

// console.log(["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][n%7 || 0]);

let cuber = (function(n){n**3})(3);

console.log(cuber);

var makeCounter = function (){
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment: function(){
      changeBy(1);
    },
    decrement: function(){
      changeBy(-1);
    },
    value: function(){
      return privateCounter;
    }
  }
}

var counter1 = makeCounter();
var counter2 = makeCounter();
console.log(counter1.increment());
console.log(counter2.decrement());
console.log(counter2.decrement());

console.log(counter1.value());
console.log(counter1.value());
console.log(counter2.value());


console.log(true == false);

let str = "Hello Biblos";
console.log(str.charAt(0));
console.log(str.charCodeAt(0));
console.log(String.fromCharCode(str.charCodeAt(0)));
console.log(str.toUpperCase());
console.log(str.split(' '));
console.log(str.replace('Biblos','Quaran'));


let arr = [1,45,9,64,105,3];
let sortedArr = arr.sort((a,b) => a - b);
let sortedArrDesc = arr.sort((a,b) => b - a);

console.log(sortedArr);

let ar1 = [1, 2, 100, 12, -1];
var ar2 = arr.slice(1, 3); // [2, 100]
console.log(ar2);

function doubler(n){
  return n*2
}

let keyVal = {};

for (let i=0; i < ar1.length;i++ ){
  keyVal[ar1[i]] = doubler(ar1[i]);
}

console.log(keyVal);

function isInt(n){
  return n % 1 === 0
}
console.log(isInt(2));
console.log(isInt(2.8));

function multi(a){
    return function(b){
      return a*b;
    }
}

console.log(multi(1)(2));
console.log(ar1.reduce((a,b)=> a+b));


function modifyArray(arr, callback) {
  // do something to arr here
  arr.push(100);
  // then execute the callback function that was passed
  callback();
}

// var arr = [1, 2, 3, 4, 5];

modifyArray(ar1, function() {
  console.log("array has been modified", ar1);
});

function createBase(baseNumber) {
  return function(n){
    return baseNumber + n
  }
}

let base2 = createBase(2);
let base3 = createBase(3);

console.log(base2(6), base3(6));


let ary1 = [1.2,3.6,8.9,7.2];

function rounder(n){
  return Math.ceil(n)
}

let rounded = ary1.map(Math.floor);

console.log(rounded);

function countSteps(N){
  if (N===1){ return 1;}
  if (N===2){ return 2;}

  return countSteps(N-1) + countSteps(N-2);
}
console.log(countSteps(2));


function swapper(arr, i1, i2){
  temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp
}

function bubbleSort(arr){

  let swapped = true;

  while(swapped){
    swapped = false;

    for (let i = 1; i < arr.length;i++) {
      if (arr[i - 1] > arr[i]) {
        swapper(arr, i-1, i);
        swapped = true
      }
    }
  }

  console.log(arr);
  return arr
}

bubbleSort(ar1);