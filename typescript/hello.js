// This is an industrial-grade general-purpose greeter function:
function greet(person, date) {
    console.log("Hello " + person + ", today is " + date.toDateString() + "!");
}
var greeting = greet("Brendan", new Date());
console.log(greeting);
