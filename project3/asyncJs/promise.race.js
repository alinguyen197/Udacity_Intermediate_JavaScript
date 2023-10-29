

const book1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, "Enders Game");
});

const book2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, "Sorry, not available 11111!");
});

const book3 = new Promise((resolve, reject) => {
    setTimeout(reject, 2000, "Harry Potter and The Prisoner of Azkaban");
});

const book4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, "Sorry, not available 2222!");
});

Promise.race([book1, book2, book3, book4])
.then(result => {
    console.log(result);
})
.catch(error => console.log("Error!", error));