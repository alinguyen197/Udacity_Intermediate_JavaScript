// 1. Create a function that when passed as a callback to the Higher Order function provided, makes the final return the number's square plus two

const addTwo = (callback) => {
  return callback() + 2
}

const numberSquarePlus = (callback) => {
  return Math.pow(callback(1,2),2)
}

const sum = (a,b) => {
  return a + b
}
console.log(numberSquarePlus(sum))


// 2. Create a Higher Order Function that could take this callback to return a greeting

const createFullName = (first_name, last_name, title) => {
  return `${title} ${first_name} ${last_name}`
}

const showName = (callback) => {
  console.log(callback('Nguyễn','Anh','Full Name : '))
}
showName(createFullName)



// you might notice that this function is less than ideal - that's great! We'll talk about why next