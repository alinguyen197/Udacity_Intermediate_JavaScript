//  These are the fetch examples from  the video:

// Note that we have to use a Node package called node-fetch to use fetch on the backend
const fetch = require('node-fetch');

// GET

fetch('http://localhost:3000')
.then(response => response.json())
.then(json => console.log(json))
.catch(error => console.log(error));


// POST/PUT/PATCH/DELETE WITH OPTIONS

fetch('http://localhost:3000', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({text: "Norman"})
})
.then(response => {
    return response.json()
})
.then(json => console.log(json))
.catch(error => console.log(error));






// -------------------------------------------
// Create a GET request to http://localhost:3000

fetch('http://localhost:3000')
.then(response => response.json())
.then(response => console.log(response))
.catch(error => console.log(error))


// Create a POST request to http://localhost:3000
const postData = { name: "Alyssa" }
fetch('http://localhost:3000', {
    method: 'POST', 
    mode: 'cors', 
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
})
.then(response => response.json())
.then(response => console.log(response))
.catch(error => console.log(error))


// Create a PUT request to http://localhost:3000
const putData = { name: "Alyssa" }
fetch('http://localhost:3000', {
    method: 'PUT',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(putData)
})
.then(response => response.json())
.then(response => console.log(response))
.catch(error => console.log(error))


// Create a DELETE request to http://localhost:3000

const deleteData = { name: "Alyssa" }
fetch('http://localhost:3000', {
    method: 'DELETE',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(deleteData)
})
.then(response => response.json())
.then(response => console.log(response))
.catch(error => console.log(error))