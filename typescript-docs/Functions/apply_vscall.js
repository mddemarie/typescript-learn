function sum(a, b) {
    //console.log(`arguments are ${JSON.stringify(arguments)}`);
    //console.log(`in sum with a: ${JSON.stringify(a)} and b: ${JSON.stringify(b)}!`);
    return a + b;
}

function thisSum(a, b) {
    //console.log(`arguments are ${JSON.stringify(arguments)}`);
    //console.log(`in sum with a: ${JSON.stringify(a)} and b: ${JSON.stringify(b)}!`);
    return this.a + b;
}

console.log(sum.call(null, 1, 2));


console.log(sum.apply(null, [1, 2]));


console.log(thisSum.call({a: 5}, 1, 2));