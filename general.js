let dateFields = [1970, 0, 1];  // 1 Jan 1970
let d = new Date(...dateFields);
console.log([...tickets])


let obj1 = { foo: 'bar', x: 42 };
let obj2 = { foo: 'baz', y: 13 };

let clonedObj = { ...obj1, ...obj2 };
console.log(clonedObj)

const language = {
  set current(name) {
    this.log = name;
  },
  log: []
};

language.current('EN');
// language.current = 'FA';

console.log(language);