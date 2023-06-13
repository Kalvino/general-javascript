/**
 * @param {number[]} nums
 * @return { number }
 */
const arr = [3,4,5,1,2]
// binary search - sort first
//  arr.sort()
 
// iter1
//  left = 0
//  right = 4
//  mid = 2
//  arr[mid] > arr[right] // true
//  left = mid + 1 //change left to 3

// iter2
//  left = 3
//  right = 4
//  mid = 3
//  arr[mid] > arr[right] // true
//  left = mid + 1 // change left to 4

// iter3
//  left = 4
//  right = 4
//  mid = 4
// terminates here wrong answer


// const findMin = (nums) => {
//   let left = 0;
//   let right = nums.length - 1;

//   // const sortedNums = nums.sort();

//   while(left < right) { 
//     let mid = Math.floor((left + right) / 2);

//     if(sortedNums[mid] > sortedNums[right]){
//       left = mid + 1;
//     } else {
//       right = mid;
//     }

//   }
//   return sortedNums[left];
// }

const findMin = (numArray) => {
  let min = numArray[0];

  for(let i = 0; i < numArray.length; i++) {
    if(numArray[i] < min) {
      min = numArray[i]
    }
  }

  return min
}

// console.log(arr.sort((a,b) => a-b));
findMin(arr);
// console.log(Math.min.apply(Math,arr))
// console.log(Math.min.call(Math,...arr))
// console.log(Math.min.call(...arr))
// console.log(Math.min(...arr))

// todo binary recursive find
