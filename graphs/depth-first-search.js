// DFS uses stack (Array with pop and push)

// iterative way
const iterativeDepthFirstPrint = (graph, source) => {
  // Array implementation of stack
  let stack = [ source ];

  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);
    for (let neighbor of graph[current]){
      stack.push(neighbor)
    }
  }
}

// recursive way

const recursiveDepthFirstPrint = (graph, source) => {
  console.log(source);

  for (let neighbor of graph[source]){
    recursiveDepthFirstPrint(graph, neighbor);
  }
} 

const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: []
};

iterativeDepthFirstPrint(graph, 'a')
recursiveDepthFirstPrint(graph, 'a')
