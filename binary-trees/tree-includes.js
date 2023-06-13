class Node {
  constructor(value){
    this.val = value;
    this.left = null;
    this.right = null
  }
}

// BFS - iterative  - stack
const iterativeTreeincludes = (root, target) => {
  if (root === null) return false;

  const queue = [ root ]

  while (queue.length > 0) {
    const current = queue.shift();

    if (current.val === target) return true;

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return false
}

// DFS - recursive

const recursiveTreeIncludes = (root, target) => {
  if (root === null) return false;
  if (root.val === target) return true;

  return recursiveTreeIncludes(root.left, target) || recursiveTreeIncludes(root.right, target);
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
c.right = f;

console.log(iterativeTreeincludes(a,'f'));
console.log(recursiveTreeIncludes(a,'f'));
