// get route
function getRoute(tickets) {
  let ticketsMap = new Map(tickets);
  console.log(ticketsMap);
  let destinations = [...ticketsMap.values()];

  console.log([...ticketsMap.keys()]);
  obj = {
    name: "calvin",
    "age":35
  }
  let clone = {...obj}

  console.log(clone instanceof Map);


  let itinerary = [...ticketsMap.entries()].find(
    arr => destinations.indexOf(arr[0]) === -1
  );

  ticketsMap.delete(itinerary[0]);

  for (let i = 0; i < ticketsMap.size; i++) {
    let lastDeparture = itinerary[i + 1];
    let nextDestination = ticketsMap.get(lastDeparture);
    itinerary.push(nextDestination);
  }
  return itinerary.join();
}

// run in your terminal with Node.js installed: e.g
// $ node zhoop.js

const tickets = [
  ['JPN', 'PHL'],
  ['BRA', 'UAE'],
  ['USA', 'BRA'],
  ['UAE', 'JPN']
];

console.time("tickts");
console.log(getRoute(tickets));
console.timeEnd("tickts");


let numberStore = []
let newNumber = Math.random();

numberStore = [...numberStore,newNumber]
numberStore = [...numberStore,newNumber]

numberStore = [...numberStore,newNumber]

console.log(numberStore);
console.log(Object.getPrototypeOf(newNumber));
let a = null;
console.log(typeof a);

let F = function(){
  this.a = 1;
  this.b = 2;
}

obj = Object.create(F.prototype); //new F();


F.prototype.a = 4;
F.prototype.c = 5;

console.log(obj.prototype);
console.log(F.prototype);

var o = {
  a: 2,
  m: function(){
    return this.a + 1;
  }
};

console.log(o.m());

var p = Object.create(o);
p.a = 8;

let obje = function(){
  this.a = 1;
  this.b = 2;
};

let withWith = function() {
  this.a = "blue";
};

// Array.prototype.methodWith = withWith();

let arr1 =  Array(1,2,3);

withWith.prototype.a = 5;
withWith.prototype.g = () => { 4 };

let mW = new withWith();


console.log(Array.prototype);


function Vehicle(vehicleType){
  // constructor function
  this.vehicleType = vehicleType;
}

Vehicle.prototype.blowHorn = function(){
  console.log("Honk honk");
}

// consttructor Function
// let Bus = function(make){} OR
function Bus(make){
  this.make = make
};

Bus.prototype = Object.create(Vehicle.prototype);
Bus.prototype.numberOfWheels = 6;
Bus.prototype.accelerator = function(){console.log("Bus accelerating");};
Bus.prototype.brake = function(){console.log("Bus breaking");};

function Car(make) {
  this.make = make;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.numberOfWheels = 4;
Car.prototype.accelerator = function(){console.log("Car accelerating");};
Car.prototype.brake = function(){console.log("Car breaking");};

let car = new Car("Toyota");
console.log(car.accelerator());

class Myclass {

  // property inside instance 
  lastName = "Odira"

  constructor(name,age){
    this.name = name;
    this.age = age;
  }

  // __proto__
  tellName(){
    console.log(this.name);
  }

  // property inside instance - arrow functions
  tellAge = ()=>{
    console.log(this.age);
  }

  // static method, instances of MyClass will not have this method
  /* 
    in pure javascript it's achieved like so:
    function Myclass() {}Myclass.welcome = function() {  console.log("Hello World");}
  */
  static Welcome(){
    console.log("Welcome static/class method");
  }
}


