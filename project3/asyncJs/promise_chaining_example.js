// ---------------- PROMISE CHAINING WITH DATA & ERRORS 

new Promise((resolve, reject) => {
    console.log('A')
    resolve(['B', 'C', 'D']);
    // reject();
})
.then((data) => {
    // throw new Error('Error at B');
    console.log(data.shift());
    return data;
})
.then((data) => {
    // throw new Error('Error at C');
    console.log(data.shift());
    return data
})
.then((data) => {
    // throw new Error('Error at D');
    console.log(data.shift());
    return data
})
.catch((error) => {
    console.log(error)
 })