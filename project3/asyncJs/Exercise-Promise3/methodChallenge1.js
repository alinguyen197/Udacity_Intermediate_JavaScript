function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function randomReturn(resolve, reject){
    return Math.random()*10 > 5 ? resolve : reject;
}

const p1 = new Promise((resolve, reject) => {
    setTimeout(randomReturn(resolve, reject), randomNum(500, 4000), "p1");
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(randomReturn(resolve, reject), randomNum(500, 4000), "p2");
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(randomReturn(resolve, reject), randomNum(500, 4000), "p3");
});

const p4 = new Promise((resolve, reject) => {
    setTimeout(randomReturn(resolve, reject), randomNum(500, 4000), "p4");
});

// Above are a bunch of Promises that will either resolve or reject randomly, and fulfill 
// in a random amount of time between half a second and 4 seconds.

// Challenge 1
// Implement the method to get a list of results of all the promises and console log how many failed and how many rejected
Promise.allSettled([p1, p2, p3, p4])
.then(results => {
    console.log(results);
    const failed = results.filter(result => result.status === "fulfilled");
    console.log(`Failed: ${failed.length} ::: Fulfilled: ${results.length - failed.length}`);
})
.catch(error => console.log(error));

// Challenge 2
// Implement the method to get a list of results from all the Promises unless one fails. Log the list of successful results or the error message if one fails.
Promise.all([p1, p2, p3, p4])
.then(results => {
    console.log(results);
})
.catch(error => console.log(error));

// Challenge 3
// Implement the method to figure out which Promise fulfilled first, print the message it fulfills with.
Promise.race([p1, p2, p3, p4])
.then(result => {
    console.log(result);
})
.catch(error => console.log("Error!", error));