let today = new Date()
console.log(today)

// to make it more readable
console.log(today.toDateString())
console.log(today.toISOString())
console.log(today.toLocaleDateString())
console.log(today.toLocaleTimeString())
console.log(today.toLocaleString())

// to customize date

newdate = today.toLocaleString("default",{   
    weekday:"long",
    timeZone:"Asia/Kolkata"
})
console.log(newdate);
