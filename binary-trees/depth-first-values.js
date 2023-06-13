
// node class
class Node {
  constructor(value){
    this.val = value;
    this.left = null;
    this.right = null
  }
}

// iterative DFT - using stack
const iterativeDepthFirstVal = (root) => {
  if (root === null) return [];

  const stack = [ root ];
  const result = [];

  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.val);

    if(current.right) stack.push(current.right);
    if(current.left) stack.push(current.left);
  }

  return result
}

// recursive DFT
const recursiveDepthFirstVal = (root) => {
  if (root === null) return [];

  const leftValues = recursiveDepthFirstVal(root.left);
  const rightValues = recursiveDepthFirstVal(root.right);
  return [root.val, ...leftValues, ...rightValues]
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f

console.log(iterativeDepthFirstVal(a));
console.log(recursiveDepthFirstVal(a));
