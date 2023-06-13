// This is an industrial-grade general-purpose greeter function:
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

const greeting = greet("Brendan", new Date());
console.log(greeting);

let arr = new Array(5).join(" ") + "calvino";
console.log(arr);

const alsoHuge = BigInt(9007199254740991);
console.log(typeof (!alsoHuge));

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  console.log(element);

}

const namee: string = 'calvino'

for (const key in namee) {
  if (Object.prototype.hasOwnProperty.call(namee, key)) {
    const element = namee[key];
  }
}
