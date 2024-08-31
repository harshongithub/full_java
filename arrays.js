// js arrays are resizable

// array declaration
const arr1 = [1,2,3,4]
const arr2 = ["h",1,2,3,"w"]

const arr3 = new Array(5,6,7,8,9)
// console.log(arr1[0]);

// array methods
// console.log(arr1.length);
arr1.push(5)
arr1.push(6)
arr1.pop()


arr1.unshift(100) // adds element in starting
arr1.unshift(1000)

arr1.shift()// pops out element from starting

console.log(arr1.includes(9))
console.log(arr1.indexOf(100))

// const newarr = arr1.join("-") // converts array to string

// console.log(newarr)
// console.log(arr1)

refrence = arr1
console.log(`ref = ${refrence}, orignal = ${arr1}`)

// refrence.pop()
// console.log(`ref = ${refrence}, orignal = ${arr1}`)

// slice and splice

// slice
const myArray = arr1.slice(0,3)
console.log(arr1);
console.log(myArray);
// slice doesnot change the orgnal array plus the range (last element) is not included 

// splice
const splArray = arr1.splice(0,3)
console.log(arr1);
console.log(splArray);
// splice manipulated the orignal array 

// do not use push to merge two arrays, why?
// arr1.push(arr2)
// console.log("merged", arr1);

//  concatinate
concatinated = arr1.concat(arr2)
console.log(concatinated);
//  do not use this either

// use spread
const superNewArr = [...arr1, ...arr2]
console.log(superNewArr);

// Array.from to convert anything into array
str = "This is string"
console.log(Array.from(str));
