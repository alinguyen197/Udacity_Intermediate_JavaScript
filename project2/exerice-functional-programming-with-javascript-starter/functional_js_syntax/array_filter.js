// 1. Find all the words with more than 7 characters
const words = ['tardis', 'grok', 'frak', 'blaster', 'klingon', 'shepherd']

const resultWords = words.filter((item) => item === 'shepherd')
console.log(resultWords)
// expected output: Array ['shepherd']

// ----------------------------------------------------------
// 2. Find all even values
const words2 = [12, 13, 14, 15, 16, 17]

const resultWords2 = words2.filter((item) => item % 2 === 0)
console.log(resultWords2)
// expected output: Array [12, 14, 16]

// ----------------------------------------------------------
// REAL LIFE EXAMPLES

// We often use filter to quickly pull all the items that share a status or other characteristic. For instance, create a list of all the active bounty hunters from the array below:

const hunters = [
    {
        name: 'Greedo',
        universe: 'Star Wars',
        status: 'active',
    },
    {
        name: 'Boba Fett',
        universe: 'Star Wars',
        status: 'inactive',
    },
    {
        name: 'Asajj Ventress',
        universe: 'Star Wars',
        status: 'unknown',
    },
    {
        name: 'Zam Wesell',
        universe: 'Star Wars',
        status: 'inactive',
    },
    {
        name: 'Jango Fett',
        universe: 'Star Wars',
        status: 'active',
    },
]

const resultHunters = hunters.filter((item) => item.status === 'active')
console.log(resultHunters)
// expected output: Array [
//     {
//         name: 'Greedo',
//         universe: 'Star Wars',
//         status: 'active',
//     },
//     {
//         name: 'Jango Fett',
//         universe: 'Star Wars',
//         status: 'active',
//     },
// ]