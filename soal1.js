function bfs(start, goal, graph) {
    let q = [start], v = new Set([start]), p = { [start]: null };
    while (q.length) {
        let n = q.shift();
        if (n === goal) {
            let r = [];
            while (n) { r.unshift(n); n = p[n]; }
            return r;
        }
        for (let x of graph[n] || []) {
            if (!v.has(x)) {
                v.add(x);
                p[x] = n;
                q.push(x);
            }
        }
    }
    return null;
}

function dfs(start, goal, graph) {
    let s = [start], v = new Set(), p = { [start]: null };
    while (s.length) {
        let n = s.pop();
        if (n === goal) {
            let r = [];
            while (n) { r.unshift(n); n = p[n]; }
            return r;
        }
        if (!v.has(n)) {
            v.add(n);
            for (let x of graph[n] || []) {
                if (!v.has(x)) {
                    p[x] = n;
                    s.push(x);
                }
            }
        }
    }
    return null;
}

let graph = {
    A: ["B", "C"],
    B: ["D"],
    C: ["E"],
    D: ["F"],
    E: ["F"],
    F: []
};

let bfsPath = bfs("A", "F", graph);
let dfsPath = dfs("A", "F", graph);

console.log({ bfsPath, dfsPath });