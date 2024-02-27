class Graph {
  constructor() {
    this.list = {};
  }

  addVertex(vertex) {
    if (!this.list[vertex]) {
      this.list[vertex] = new Set();
    }
  }

  removeVertex(source) {
    for (let vertex of this.list[source]) {
      this.list[vertex].delete(source);
    }
    delete this.list[source];
  }

  createEdge(source, dest) {
    if (!this.list[source]) {
      this.addVertex(source);
    }
    if (!this.list[dest]) {
      this.addVertex(dest);
    }
    this.list[source].add(dest);
    this.list[dest].add(source);
  }

  dfs(start) {
    let visited = {};
    this.depthFs(start, visited);
  }

  depthFs(start, obj) {
    obj[start] = true;
    console.log(start);
    for (let vertex of this.list[start]) {
      if (!obj[vertex]) {
        this.depthFs(vertex, obj);
      }
    }
  }

  display() {
    for (let vertex in this.list) {
      console.log(vertex + " is and edges are " + [...this.list[vertex]]);
    }
  }

  // BFS
  bfs(root) {
    let visited = {};
    const queue = [root];
    visited[root] = true;
    while (queue.length) {
      const len = queue.length;
      for (let i = 0; i < len; i++) {
        const node = queue.shift();
        for (let vertex of this.list[node]) {
          if (!visited[vertex]) {
            visited[vertex] = true;
            queue.push(vertex);
          }
        }
      }
    }
  }

  // is Path available from source to destination
  findPath(source, dest) {
    let visited = {};
    const hasPath = (source, dest, visited) => {
      console.log(source);

      if (source === dest) {
        return true;
      } else {
        visited[source] = true;
        for (let neighbour of this.list[source]) {
          if (!visited[neighbour]) {
            if (hasPath(neighbour, dest, visited) === true) {
              return true;
            }
          }
        }
      }
      return false;
    };
    return hasPath(source, dest, visited);
  }
}

const graph = new Graph();
graph.addVertex("0");
graph.addVertex("1");
graph.addVertex("2");
graph.addVertex("3");
graph.addVertex("4");
graph.addVertex("5");
graph.addVertex("6");
graph.createEdge("0", "1");
graph.createEdge("1", "3");
graph.createEdge("3", "4");
graph.createEdge("3", "5");
graph.createEdge("5", "6");
graph.createEdge("5", "4");
graph.createEdge("4", "2");
graph.createEdge("2", "0");
// console.log(graph.display());
// console.log(graph.bfs("0"));
// console.log(graph.findPath("2", "0"));

// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");
// graph.addVertex("D");
// graph.addVertex("E");
// graph.addVertex("F");
// graph.createEdge("A", "B");
// graph.createEdge("A", "D");
// graph.createEdge("A", "E");
// graph.createEdge("B", "C");
// graph.createEdge("C", "F");
// graph.createEdge("C", "E");
// graph.createEdge("D", "E");
// graph.createEdge("F", "E");
// graph.createEdge("E", "D");
// console.log(graph.bfs("A"));
// graph.removeVertex("B");
