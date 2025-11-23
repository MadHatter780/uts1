function tri(x, a, b, c) {
    if (x <= a || x >= c) return 0;
    if (x === b) return 1;
    if (x > a && x < b) return (x - a) / (b - a);
    return (c - x) / (c - b);
}

function fuzzy(food, service) {
    let foodBad = tri(food, 0, 0, 5);
    let foodGood = tri(food, 5, 10, 10);
    let servPoor = tri(service, 0, 0, 5);
    let servExc = tri(service, 5, 10, 10);
    let low = Math.max(servPoor, foodBad);
    let high = Math.min(servExc, foodGood);
    let num = 0, den = 0;
    for (let t = 0; t <= 20; t += 0.1) {
        let lowDeg = tri(t, 0, 0, 10);
        let highDeg = tri(t, 10, 20, 20);
        let agg = Math.max(Math.min(low, lowDeg), Math.min(high, highDeg));
        num += agg * t;
        den += agg;
    }
    return num / den;
}

let result = fuzzy(7, 3);

console.log({ tip: result });