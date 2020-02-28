// Add your functions here
const map = (array, fun) => {
    return array.map(number => fun(number))
} 

// const reduce = (array, fun, starting = 0) => {
//     const start = starting
//     return array.reduce((num, start) => fun(num, start))
// }

function reduce(src, cb, starting){
    let r = (!!starting) ? starting : src[0]
    let i = (!!starting) ? 0 : 1
  
    for (; i < src.length; i++) {
      r = cb(src[i], r)
    }
  
    return r;
}