
// factories
const alligator = (wino, name) => {
  const self = {
    wino,
    name
  };

  return self
}

console.log(alligator("Vino", "Owino"));

// behaviours - functions receiving the object (returned object)

const canSayHi = self => ({
  sayHi: () => console.log(`Hello ${self.name}`)
})