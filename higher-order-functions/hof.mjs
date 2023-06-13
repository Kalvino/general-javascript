// .reduce() function is flexible and can be used to suit a unique situation
import fs from 'fs';

const output = fs.readFileSync('purchases.txt', 'utf8')
  .trim()
  .split('\n')
  .map(line => line.split(' '))
  .reduce((pV, cV)=>{
    pV[cV[0]] = pV[cV[0]] || [];
    pV[cV[0]].push({
      name: cV[1],
      price: cV[2],
      quantity: cV[3]
    })

    return pV
  },{})

console.log('output', JSON.stringify(output, null, 2));

//--------------------------------------------------------

const arr = [1,2,3,4,5,6,6];

const sum = arr.reduce((pV,cV)=> pV + cV );
const sum2 = arr.reduce((x,y)=> x + y,0 );

console.log(sum);
console.log(sum2);

// .find() get the first value to return true
// -------------------------------------------------
const isOdd = (number) => number % 2 !== 0;

// find first odd number
const firstOdd = arr.find(isOdd);
console.log(firstOdd);

// .filter() lists the values that return true for the callBack
// -----------------------------------------------------------------

const oddNumbers = arr.filter(isOdd)
console.log(oddNumbers);

// .map() modifies individual array items as per the callback
// ------------------------------------------------------------
const doubler = arr.map(x => x * 2);
console.log(doubler);