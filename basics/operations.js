let str1 = "Harsh"
let str2 = " Panwar"

let str = str1+str2

console.log(str)
// it is working just fine but.

// see this operation first
console.log("1"+2) //the output will be string(12).

// when a string is detected by js the whole input after that will be trated as string 
// see this example
console.log(1+2+3+"5"+2+1)

// confusion code
console.log(true+true) // output will be 2, why?

// strict check, It not only compare the values but also the datatype of the input
console.log("0"===0) //false, but
console.log("0"==0) //is true


