// Problem 1: FIND DFS AND BFS
const depthFirstPrint = (graph, source) => {
  const stack = [source];
  while (stack.length) {
    const node = stack.pop();
    console.log(node);
    for (let neighbour of graph[node]) {
      stack.push(neighbour);
    }
  }
};

const breadthFirstPrint = (graph, source) => {
  const stack = [source];
  while (stack.length) {
    const node = stack.shift();
    console.log(node);
    for (let neighbour of graph[node]) {
      stack.push(neighbour);
    }
  }
};

const graph1 = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

// console.log(depthFirstPrint(graph1, "a"));
// console.log(breadthFirstPrint(graph1, "a"));

// Problem 2: BUILD GRAPH USING EDGES
const buildGraph = (edges) => {
  let graph = {};
  for (let edge of edges) {
    const [a, b] = edge;
    if (!graph[a]) {
      graph[a] = new Set();
    }
    if (!graph[b]) {
      graph[b] = new Set();
    }
    graph[a].add(b);
    graph[b].add(a);
  }
  return graph;
};
const edges = [
  [0, 1],
  [1, 2],
  [2, 0],
];
// console.log(buildGraph(edges));

// Problem 3: COUNT NUMBER OF CONNECTED GRAPHS
const connectedComponentGraph = (graph) => {
  const dfs = (node, visited, graph) => {
    if (visited.has(node)) return false;
    visited.add(node);
    for (let neighbour of graph[node]) {
      dfs(neighbour, visited, graph);
    }
    return true;
  };

  const visited = new Set();
  let count = 0;
  for (let node in graph) {
    if (dfs(node, visited, graph) == true) {
      count++;
    }
  }
  return count;
};

// console.log(
//   connectedComponentGraph({
//     1: ["2"],
//     2: ["1", "3"],
//     3: ["2", "4"],
//     4: ["3"],
//     5: ["6"],
//     6: ["5"],
//     7: [],
//   })
// );

// Problem 4: LARGEST COMPONENT PROBLEM (LONGEST PATH)
const largestComponent = (graph) => {
  const visited = new Set();
  let max = 0;

  const dfs = (s, g, v) => {
    if (v.has(s)) return 0;
    v.add(s);
    let size = 1;
    for (let node of graph[s]) {
      size += dfs(node, g, v);
    }
    return size;
  };
  for (let vertex in graph) {
    const size = dfs(vertex, graph, visited);
    max = Math.max(size, max);
  }
  return max;
};

// console.log(
//   largestComponent({
//     0: ["8", "5", '1'],
//     1: ['1'],
//     5: ["0", "8"],
//     8: ["0", "5"],
//     2: ["3", "4"],
//     3: ["2", "4"],
//     4: ["3", "2"],
//   })
// );

// Problem 5: SHORTEST PATH BETWEEN 2 NODES;
const shortestPath = (edges, src, dest) => {
  let graph = {};
  for (let edge of edges) {
    const [a, b] = edge;
    if (!graph[a]) graph[a] = new Set();
    if (!graph[b]) graph[b] = new Set();
    graph[a].add(b);
    graph[b].add(a);
  }
  const visited = new Set(src);
  let queue = [[src, 0]];
  while (queue.length) {
    const [node, distance] = queue.shift();
    if (node === dest) return distance;
    for (let neighbour of graph[node]) {
      if (visited.has(neighbour)) {
        visited.add(neighbour);
        queue.push([neighbour, distance + 1]);
      }
    }
  }
  return -1;
};

// console.log(
//   shortestPath(
//     [
//       ["w", "x"],
//       ["x", "y"],
//       ["z", "y"],
//       ["z", "v"],
//       ["w", "v"],
//     ],
//     "v",
//     "p"
//   )
// );

// Problem 6: FIND NUMBER OF LANDS IN A GRID THAT COMBINATION OF LAND AND WATER
const islandCount = (graph) => {
  const visited = new Set();
  let count = 0;

  const exploreNodes = (graph, r, c, visited) => {
    const rowInbound = r >= 0 && r < graph.length;
    const colInbound = c >= 0 && c < graph[0].length;
    if (!rowInbound || !colInbound) return false;
    const node = r + "." + c;
    if (graph[r][c] === "W") return false;
    if (visited.has(node)) return false;
    visited.add(node);
    exploreNodes(graph, r - 1, c, visited);
    exploreNodes(graph, r + 1, c, visited);
    exploreNodes(graph, r, c - 1, visited);
    exploreNodes(graph, r, c + 1, visited);
    return true;
  };

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (exploreNodes(graph, r, c, visited)) {
        count++;
      }
    }
  }
  return count;
};

const grid = [
  ["W", "L", "L", "L"],
  ["W", "W", "L", "W"],
  ["L", "L", "W", "W"],
  ["W", "L", "L", "L"],
];
// console.log(islandCount(grid));

//Problem 7: Cycle detection in directed or undirected Graph
const checkCycle = (graph) => {
  const visited = new Array(Object.keys(graph)).fill(0);
  const dfs = (vertex, parent, visited, graph) => {
    visited[vertex] = 1;
    for (let node of graph[vertex]) {
      if (!visited[node]) {
        if (dfs(node, vertex, visited, graph) === true) return true;
      } else if (parent != node) {
        return true;
      }
    }
    return false;
  };
  const vertex = Object.keys(graph);
  for (let i = 0; i < vertex.length; i++) {
    if (!visited[i]) {
      if (dfs(i, -1, visited, graph) === true) return true;
    }
  }
  return false;
};

console.log(
  checkCycle({
    0: ["1"],
    1: ["0", "2", "4"],
    2: ["3"],
    4: ["1"],
    3: ["2"],
  })
);
