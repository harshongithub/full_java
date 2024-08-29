// Primitive -> this are the data of which a copy is given to the user when called

    // 7 types: String, Boolean, Number, null, undefined, Symbol, BigInt.
    const score = 100
    const scoreValue = 100.3

    const id = Symbol("123") //always unique
    const another = Symbol("123") 
    console.log(id===another); //?

    
//  Refrence -> of which the direct refrence can be alloted

    // Array, Objects, Function
    const cars = ["maruti","tata"]
    object = {
        name:"harsh",
        age:22
    }
    fn = function name(params) {
        console.log("In the function")
    }
    console.log(typeof(fn))
    // datatype of null object and array is object
    // datatype of function is function