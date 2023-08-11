function fizzBuzz(max) {
    let final = [];
    const startTime = performance.now();
    for (let i = 0; i <= max; i++ ) {
        if(i % 3 === 0 || i % 5 === 0 && !(i % 3  === 0 && i % 5 === 0))
        final.push(i);
    }
    const endTime = performance.now();
    return parseFloat(endTime - startTime).toFixed(2); // Time in milliseconds
}

function fizzBuzzSkipNums(max) {
    let arr = [];
    const startTime = performance.now();
    for (let i = 3; i < max; i += 3) {
        if (i%5!==0) arr.push(i);
    }
    for (let i = 5; i < max; i+=5) {
        if (i%3!==0) arr.push(i);
    }
    const endTime = performance.now();
    return parseFloat(endTime - startTime).toFixed(2); // Time in milliseconds
}

// Run 10 Test. Start with max of 10 Million, increase test size by 10M each itteration.
const testDataPoints = [];
for (let i = 10000000; i <= 100000000; i += 10000000) {
    const timeForFirstFunction = fizzBuzz(i);
    const timeForSecondFunction = fizzBuzzSkipNums(i);
    testDataPoints.push({
        inputSize: i,
        timeForFirstFunction,
        timeForSecondFunction
    });
}

console.table(testDataPoints);
