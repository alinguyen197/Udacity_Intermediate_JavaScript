// 1. Take this disjointed sentence and turn it into a single string
const text = ['The ships', 'hung in the sky,', 'much the way', 'that bricks don`t']

// Your Code Here
const result1 = text.reduce((count,currentItem,idx,originArray) => {
    count += currentItem + ' '
    return count
},'')
console.log(result1)
// expected output: "The ships hung in the sky, much the way that bricks don't"

// ----------------------------------------------------------

// 2. Return the winning team
const scores = [
    {
        team: 'A',
        score: 20
    },
    {
        team: 'B',
        score: 17
    },
    {
        team: 'C',
        score: 23
    },
    {
        team: 'D',
        score: 13
    }
]

// Your Code Here
const result2 = scores.reduce((itemFirst,currentItem) => {
   if (itemFirst.score > currentItem.score) {
    return itemFirst
   }else {
    return currentItem
   }
})
console.log(result2.team)
// expected output: "C"

// ----------------------------------------------------------
//    REAL LIFE EXAMPLE
// Reduce can sometimes save us a lot of time -- if we remember to use it.
// Instead of writing a complicated map or filter method and then calling the
// name of the ship out of the retuned array, Return the name of the fastest
// star ship

const ships = [
    {
        name: 'Serenity',
        speed: '4.2G',
    },
    {
        name: 'Cylon Raider',
        speed: '7.5G',
    },
    {
        name: 'Swordfish II',
        speed: '50G',
    },
    {
        name: 'Tie Fighters',
        speed: '4100G',
    }
]


// Your Code Here
const result3 = ships.reduce((itemFirst,currentItem,idx,originArray)=>{
    if (parseInt(itemFirst.speed.slice(0,-1)) > parseInt(currentItem.speed.slice(0,-1))) {
        return itemFirst
    }else {
        return currentItem
    }
})
console.log(result3.name)
// Expected output: Tie Fighters