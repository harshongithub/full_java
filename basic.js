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
