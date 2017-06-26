function ant(n) {
    let s = iter([1])
    for (let i = 0; i < n; i++) {
        // console.log(`---> 2 ant i: ${i} / s: ${JSON.stringify(s)}`)
        console.log('--------------------------------- 1')
        s = next(s)
        console.log('--------------------------------- 2')
    }
    return s
}

function next(ns) {
    // console.log(`---> 3 next ns: ${JSON.stringify(ns)}`)
    return concat(map(g => iter([g.length, g[0]]), group(ns)))
}

function map(f, it) {
    return {
        next() {
            let {value, done} = it.next()
            // console.log(`---> 6 map value: ${JSON.stringify(value)} / done ${done}`)
            if (done) {
                return { done: true }
            } else {
                return { done: false, value: f(value)}
            }
        }
    }
}

function concat(it) {
    let inner = null
    return {
        next() {
            while (true) {
                if (inner === null) {
                    console.log('1');
                    // let {val, done} = it.next()
                    let obj = it.next()
                    let value = obj.value;
                    let done = obj.done;
                    // console.log(`---> 7 concat value: ${JSON.stringify(value)} / done: ${done}`)
                    if (done) {
                        return {done: true}
                    } else {
                        inner = value
                    }
                }
                console.log('2');
                let {value, done} = inner.next()
                // console.log(`---> 8 concat value: ${JSON.stringify(value)} / done: ${done}`)
                if (done) {
                    inner = null
                } else {
                    return { done: false, value }
                }
            }
        }
    }
}

function group(it) {
    let g = null
    return {
        next() {
            while (true) {
                let {value, done} = it.next()
                // console.log(`---> 4 group value: ${value} / done: ${done}`)
                // console.log(`---> 5 group g: ${ JSON.stringify(g)}`)
                if (done && g === null) {
                    return { done: true}
                } else if (done) {
                    let result = g
                    g = null
                    return { done: false, value: result}
                } else if ( g === null) {
                    g = [value]
                } else if (g[0] === value) {
                    g.push(value)
                } else {
                    let result = g
                    g = [value]
                    return { done: false, value: result}
                }
            }
        }
    }
}

function iter(obj) {
    // console.log(`----> 1 iter obj(${JSON.stringify(obj)})`)
    return obj[Symbol.iterator]()
}

function uniter(it) {
    return {
        [Symbol.iterator]: function() {
            return it
        }
    }
}

for (let a of uniter(ant(3))) {
    process.stdout.write(`==== ${a}\n`)
}
