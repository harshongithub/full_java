// to print
console.log("Hi")

// to store data in memory we use variable and constant to identify the data with a name
// to declear the constant
const accountId=1

// to delear variable
let mail = "harsh123@gmail.com"
var password = "12345"
city = "Indore"

// to give multiple output at same time in a table formate
console.table([mail,password,city])

/* do not use var beacuse it gives issue in scope{} "for suppose if i have declared a variable named password 
and by mistake i write another variable with same name inside a scope, so it will change the value of my main
password variable which should not be happening according to global variable concept."
*/

// always use const and let

/* 
data types in js:
    number -> 2^53
    bigint 
    "string"
    bool -> true/false
    null -> garbage value will be stored
    undefined
    symbol -> unique
    object
*/

console.log(typeof "hi")
console.log(typeof "null")
console.log(typeof "undedfined")

// type conversion
let age = "20" //string
console.log(Number(age)) //converted to number
console.log(Boolean(age)) // will give true bacause age>=1 "bad practice"

// "20" -> 20
// "20abs" -> NAN
// true -> NAN
// null -> 0