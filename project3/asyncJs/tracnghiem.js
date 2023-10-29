new Promise((resolve, reject) => {
    resolve("New message");
  })
  .then(data => {
    const dataArr = data.split("");
    throw new Error("Uh-oh!");
    return dataArr.reverse();
  })
  .then(data => data.join(""))
  .then(data => console.log(data))
  .catch(error => {
    console.log("Encountered a problem!");
    return error
  })
  .then(error => {
    console.log(error.message);
  }); 