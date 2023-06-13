// BFS
const minValue = (root) => {
  let min = Infinity;
  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();
    if (current.val < min) min = current.val;

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return min  
}

// DFS - iterative version
const minValue = (root) => {
  let min = Infinity;
  const stack = [root];

  while (stack.length > 0) {
    const current = stack.pop();
    if (current.val < min) min = current.val;

    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }

  return min  
}


// DFS - recursive
const minValue = (root) =>{
  if(root === null) return Infinity;
  const leftMin = minValue(root.left);
  const rightMin = minValue(root.right);

  return Math.min(root.val, leftMin, rightMin)
}