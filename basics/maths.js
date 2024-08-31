const num = 10.532
console.log(num)

console.log(num.toString().length)
console.log(num.toFixed(2)); // gives output to the fixed number
console.log(num.toPrecision(3));

const bignum = 10000000
console.log(bignum.toLocaleString("en-IN")) // to change in Indian system

// Math is a prebuilt library in js 
console.log(Math.ceil(4.1))
console.log(Math.floor(4.9));
console.log(Math.min(10,3,2,5,6));
console.log(Math.max(10,3,2,5,6));
console.log(Math.random()*10 + 1);


