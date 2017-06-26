Array.prototype.group = function() {
    let as = this;
    let ass = [];
    let g = null;
    for(let i = 0; i < as.length; i++) {
        if(g === null || g[0] !== as[i]) {
            g = [];
            ass.push(g)
        }
        g.push(as[i])
    }
    return ass
};

Array.prototype.flatten = function() {
    let ass = this;
    let as = [];
    for(let i = 0; i < ass.length; i++) {
        as.push(ass[i][0]);
        as.push(ass[i][1]);
    }
    return as
};
// console.log(input.group())
// console.log(input.group().map(g => [g.length, g[0]]))
function ant(line) {
    let s= [1];
    for(let i = 0; i < line; i++) {
        s = s.group().map(g => [g.length, g[0]]).flatten();
    }
    return s;
}
console.log(ant(100));