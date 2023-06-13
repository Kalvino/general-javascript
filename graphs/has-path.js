// solvable using both DFS and BFS

/**
 *  n = # nodes
 *  n^2 OR e = # edges
 *  Space Complexity = O(n) 
 *  Time Complexity = O(e) OR O(n^2)
 */

// DFS - Recursive way 
const dfsHasPath = (graph, src, dst) => {
  if (src === dst) return true;

  for (const neighbor of graph[src]) {
    if (dfsHasPath(graph, neighbor, dst) === true) {
      return true;
    }
  }

  return false
}

// BFS - Iterative only with a queue
const bfsHasPath = (graph, src,dst) => {
  const queue = [ src ];

  while (queue.length > 0) {
    const current = queue.shift();

    if (current === dst) return true;

    for (const neighbor of graph[current]) {
      queue.push(neighbor)
    }
  }

  return false;
}


const graph = {
  a: ['c', 'b'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: []
};

console.log(dfsHasPath(graph, 'a', 'f'));
console.log(bfsHasPath(graph, 'a', 'f'));

