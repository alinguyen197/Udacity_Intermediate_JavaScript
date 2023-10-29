// Here is an example with Promises where we need to wait for both responses before performing an action

const promise1 = () => new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 19);
});

const promise2 = () => new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 23);
});

// Challenge 1

// Try using JUST Promise syntax to sum the results of both Promises and console log the message below
// "The answer to life, the universe, and everything is: 42"
promise1().then(num1 => {
    promise2().then(num2 => {
        console.log(`The answer to life, the universe, and everything is: ${num1 + num2}`);
    })
    .catch(error => {
        console.log(error)
    });
})
.catch(error => {
    console.log(error)
});

// REMINDER: If you want to use Promise.allSettled in your answer, you will need to run the following command in your terminal window first:
// source  update_node.sh

Promise.allSettled([promise1(),promise2()])
.then(resp => {
    let kq = 0
    resp.forEach(x => {
        kq += x.value
    })
    console.log(`The answer to life, the universe, and everything is: ${kq}`)
})

// your code here

// ---------------------------------------------------------------------------

// Challenge 2
// Now try the same example, but instead of implementing it with Promises, use Async/await
// Console log: "The answer to life, the universe, and everything is: 42"

const theQuestion = async () => {
    const num1 = await promise1();
    const num2 = await promise2();
    console.log(`The answer to life, the universe, and everything is: ${num1 + num2}`)
};

theQuestion();


// your async/await code here
