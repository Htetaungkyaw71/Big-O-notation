function add(n){
  return n * (n + 1) / 2
}

let t1 = performance.now()
add(100000000)
let t2 = performance.now()
console.log("${t1 - t2/ 1000} seconds")
