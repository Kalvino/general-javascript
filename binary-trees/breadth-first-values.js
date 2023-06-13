// node class
class Node {
  constructor(value){
    this.val = value;
    this.left = null;
    this.right = null
  }
}
// iterative solution
const breadthFirstValuesSum = (root) => {
  if (root === null) return [];
  let sum = 0;
  const queue = [ root ];

  while (queue.length > 0) {
    const current = queue.shift();
    sum += current.val;

    if(current.left !== null) queue.push(current.left);
    if(current.right !== null) queue.push(current.right);
  }

  return sum;
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
const f = new Node(6);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f

console.log(breadthFirstValuesSum(a));