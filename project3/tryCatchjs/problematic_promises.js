// Vấn đề của promises là nó non-blocking sẽ cho chạy trông khi đợi tác vụ khác hoàn thành
// Async - Await sinh ra để giải quyết việc này bằng cách chạy kiểu blocking như thể là một synchronous
const promise1 = () => new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 5);
});

const promise2 = () => new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 6);
});

function handleManyThings() {
    const value1 = promise1();
    console.log("waiting on first promise", value1);

    const value2 = promise2();
    console.log("waiting on second promise", value2);

    setTimeout(console.log, 3000, value1, value2)
    return value1 + value2;
}

const result = handleManyThings();
console.log("The Function Result is: ", result);