function add(n) {
    let total = 0;
    for (let i = 0; i < n; i++){
        total += 1
    }
    return total
}

let t1 = performance.now()
add(100000000)
let t2 = performance.now()
console.log("${t1 - t2}/ 1000")
