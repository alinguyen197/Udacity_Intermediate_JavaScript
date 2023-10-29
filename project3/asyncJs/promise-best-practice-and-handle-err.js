// const categories = [];
// const currentItem = {};

// const data = {
//     id: "KDF8D903N",
//     intVal: 855,
//     message: "This is a message",
//     sourceId: 123
// }

// new Promise((resolve, reject) => {
//     resolve(data)
// })
// .then(data => {
//     if (data.soucreId && data.soucreId !== null) {
//         return data;
//     }
//     // when the if statement returns something, there is no need for an else statement
//     throw new Error('No source was defined');
// })
// .then(data => {
//     const { intVal, id } = data
//     if (intVal > 0 && intVal !== null) {
//         const category = data.intVal.toString().split()[0];

//         currentItem.id = id;
//         category.toString();
//         if (!categories.find(category => category.value === id)) {
//             categories.push({ value: category, count: 0 })
//         } else {
//             const index = categories.findIndex(category => category.value === id)
//             categories[index].count++
//         }
//         currentItem.category = category.toString();
//         console.log("Category assigned!")
//     } else {
//         throw new Error('No integer value was provided');
//     }
// })
// .catch((error) => {
//     console.log(error)
// })




// ----------------
new Promise((resolve, reject) => {
    resolve("message");
  })
  .then(() => {
      throw new Error("Something went wrong");
  })
  .catch(error => {
       "this is another message";
  })
  .then(data => {
      throw Error("Now throw another error");
  })
  .catch(error => console.log(error.message));



  new Promise((resolve, reject) => {
    resolve("This is a message");
})
.then(data => {
  // do some more logic
  return data.split(" ")
})
.then(data => data[0])
.then(data => console.log(data))
.catch(err => console.error(err));


