function map(sourceArray, work) {
    let results = []
    sourceArray.forEach(element => {
        results.push(work(element))
    })
    return results
}

function reduce(sourceArray, work, startingPoint) {
    if (startingPoint) {
        return sourceArray.reduce(work, startingPoint)
    } else {
        return sourceArray.reduce(work)
    }
}