// depth first traversal - recursive 
const treeSum = (root) => {
  if (root === null) return 0;
  return root.val + treeSum(root.left) + treeSum(root.right);
}

//BreadthFirst - iterative version

const iteraviveTreeSum = (root) => {
  if (root === null) return 0;
  let totalSum = 0;
  const queue = [ root ];

  while (queue.length > 0) {
    const current = queue.shift();
    totalSum += current.val;
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
}