function astar(start, goal, graph, h) {
    let o = [start], g = { [start]: 0 }, p = { [start]: null };
    while (o.length) {
        o.sort((a, b) => g[a] + h[a] - (g[b] + h[b]));
        let n = o.shift();
        if (n === goal) {
            let r = [];
            while (n) { r.unshift(n); n = p[n]; }
            return r;
        }
        for (let [x, cost] of graph[n] || []) {
            let ng = g[n] + cost;
            if (!(x in g) || ng < g[x]) {
                g[x] = ng;
                p[x] = n;
                if (!o.includes(x)) o.push(x);
            }
        }
    }
    return null;
}

let graph = {
    A: [["B", 1], ["C", 4]],
    B: [["D", 2]],
    C: [["D", 1]],
    D: [["E", 3]],
    E: []
};

let h = { A: 7, B: 6, C: 2, D: 1, E: 0 };

let path = astar("A", "E", graph, h);

console.log({ path });