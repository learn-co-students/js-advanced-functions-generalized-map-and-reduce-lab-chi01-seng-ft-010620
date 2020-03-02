// Add your functions here

const map = (array, callbackFunction) => {
  let newArray = []
  array.forEach(element => {
    newArray.push(callbackFunction(element))
  })
  return newArray;
}


// function reduce(array, callbackFunction, startingPoint){
//   let result = (!!startingPoint) ? startingPoint : array[0]
//   let i = (!!startingPoint) ? 0 : 1
//
//   array.forEach(element => {
//     result = callbackFunction(element, result)
//   })
//
//   return result -1;
// }

function reduce(src, cb, starting){
  let r = (!!starting) ? starting : src[0]
  let i = (!!starting) ? 0 : 1

  for (; i < src.length; i++) {
    r = cb(src[i], r)
  }

  return r;
}
