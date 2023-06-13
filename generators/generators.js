// function* squareGenerator(max){
//   let n = 0;

//   while(n < max){
//     n++;
//     yield n * n
//   }
// }

// // generator object
// const generator = squareGenerator(10);

// for (const i of generator){
//   console.log(i);
// }


// random Unique name generator

function* uniqueNameRetriever(namesArray) {
  if (namesArray.length == 0){
    return console.log("empty name array");    
  }

  const names = namesArray;

  while(namesArray.length !== 0){
    const randomIndex = Math.floor(Math.random() * namesArray.length);

    const name = namesArray[randomIndex];

    // remove the name from the array
    namesArray.splice(randomIndex, 1);

    yield name;
  }
}
const names = ['Koli', 'Winnie', 'Wik', 'Ra', 'Nancy']
for (const name of uniqueNameRetriever(names)){
  console.log(name);
}

console.log(names);