// -----------------------------------------------------------------
// Exercise 1
// Directions: Write a pure function that prints "good afternoon" if
//       its afternoon and "good morning" any other time of the day.
// Hint - this will help with time of day: new Date().getHours()
// -----------------------------------------------------------------
function pureFunc() {
    const hour = new Date().getHours()
    if (hour < 12) {
        return 'Good Morning !'
    }else if (hour > 12 && hour < 18) {
        return 'Good Afternoon !'
    }else {
        return 'Good Evening'
    }
}
const a = pureFunc()
console.log(a)


// -----------------------------------------------------------------
// Exercise 2
// Directions: Write a pure function that takes in a number and  
//       returns an array of items counting down from that number to 
//       zero.
// -----------------------------------------------------------------

function countDownArray (number) {
    const array = []
    for (let i = number ; i >= 0 ; i--){
        array.push(i)
    }
    console.log(array)
}

countDownArray(5)
