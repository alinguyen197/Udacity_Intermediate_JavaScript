const characters = [
  {
    name: 'Marvin the Paranoid Android',
    role: 'First Mate',
    universe: 'Hitchhikers Guide to the Galaxy',
    weapon: 'severe depression',
    power_level: 1000
  },
  {
    name: 'Jabba the Hut',
    role: 'villain',
    universe: 'Star Wars',
    weapon: 'henchmen',
    power_level: 200
  },
  {
    name: 'Zoë Alleyne Washburne',
    role: 'First Mate',
    universe: 'Firefly',
    weapon: 'Winchester Model 1892 rifle',
    power_level: 160
  },
  {
    name: 'Peter Venkman',
    role: 'Ghostbuster',
    universe: 'Ghostbusters',
    weapon: 'proton pack',
    power_level: 120
  },
  {
    name: 'Kathryn Janeway',
    role: 'Captain',
    universe: 'Star Trek',
    weapon: 'Wit',
    power_level: 140
  },
  {
    name: 'Dr. Daniel Jackson',
    role: 'Archeologist',
    universe: 'Stargate',
    weapon: 'Zat gun',
    power_level: 120
  },
  {
    name: 'Q',
    role: 'God/Eternal',
    universe: 'Star Trek',
    weapon: 'Whatever he wants',
    power_level: 1000
  },
  {
    name: 'Boba Fett',
    role: 'Bounty Hunter',
    universe: 'Star Wars',
    weapon: 'EE-3 carbine rifle',
    power_level: 400
  },
  {
    name: 'Yoda',
    role: 'Jedi Master',
    universe: 'Star Wars',
    weapon: 'The Force',
    power_level: 900
  },
  {
    name: 'Mal Reynolds',
    role: 'Captain',
    universe: 'Firefly',
    weapon: 'pistol',
    power_level: 160
  },
  {
    name: 'Spock',
    role: 'First Mate',
    universe: 'Star Trek',
    weapon: 'Logic',
    power_level: 170
  },
  {
    name: 'R2-D2',
    role: 'Ship`s Robot',
    universe: 'Star Wars',
    weapon: 'Data Probe',
    power_level: 250
  },
  {
    name: 'Lore',
    role: 'Villain',
    universe: 'Star Trek',
    weapon: 'Intellect',
    power_level: 800
  },
]

// ----------------------------------------------------------

// COMBINED PRACTICE 1

// ----------------------------------------------------------

// Create an array containing only the names of Captains from all universes.
const captainsArray = characters.reduce((count, item, index, originalArr) => {
  if (item.role === 'Captain') {
    count.push(item.name)
  }
  return count
}, [])
// console.log(captainsArray)
// Your Code here

// expected output: ['Mal Reynolds', 'Kathryn Janeway']

// ----------------------------------------------------------

// COMBINED PRACTICE 2

// ----------------------------------------------------------

// Group all characters by universe in a multidimensional array

// Your Code here

function groupValueByUniverse() {
  const listUniver = {}
  characters.forEach(element => {
    listUniver[element.universe] = listUniver[element.universe] === undefined ? [] : listUniver[element.universe]
    listUniver[element.universe].push(element)
  });
  return Object.values(listUniver)
}
console.log(groupValueByUniverse()) 
// expected output:
const groupedCharacters = characters
    .reduce((acc, curr, i, arr) => {
        acc[curr.universe] = acc[curr.universe] === undefined ? [] : acc[curr.universe]
        acc[curr.universe].push(curr)

        if (i + 1 == arr.length) {
            return Object.values(acc)
        }

        console.log("khoa",acc)
        return acc
 }, {})
// [ 
//  [ 
//    { name: 'Marvin the Paranoid Android',
//       role: 'First Mate',
//       universe: 'Hitchhikers Guide to the Galaxy',
//       weapon: 'severe depression',
//       power_level: 1000 
//     } 
//   ],
//   [ { name: 'Jabba the Hut',
//       role: 'villain',
//       universe: 'Star Wars',
//       weapon: 'henchmen',
//       power_level: 200 },
//     { name: 'Boba Fett',
//       role: 'Bounty Hunter',
//       universe: 'Star Wars',
//       weapon: 'EE-3 carbine rifle',
//       power_level: 400 },
//     { name: 'Yoda',
//       role: 'Jedi Master',
//       universe: 'Star Wars',
//       weapon: 'The Force',
//       power_level: 900 },
//     { name: 'R2-D2',
//       role: 'Ship`s Robot',
//       universe: 'Star Wars',
//       weapon: 'Data Probe',
//       power_level: 250 } ],
//   [ { name: 'Zoë Alleyne Washburne',
//       role: 'First Mate',
//       universe: 'Firefly',
//       weapon: 'Winchester Model 1892 rifle',
//       power_level: 160 },
//     { name: 'Mal Reynolds',
//       role: 'Captain',
//       universe: 'Firefly',
//       weapon: 'pistol',
//       power_level: 160 } ],
//   [ { name: 'Peter Venkman',
//       role: 'Ghostbuster',
//       universe: 'Ghostbusters',
//       weapon: 'proton pack',
//       power_level: 120 } ],
//   [ { name: 'Kathryn Janeway',
//       role: 'Captain',
//       universe: 'Star Trek',
//       weapon: 'Wit',
//       power_level: 140 },
//     { name: 'Q',
//       role: 'God/Eternal',
//       universe: 'Star Trek',
//       weapon: 'Whatever he wants',
//       power_level: 1000 },
//     { name: 'Spock',
//       role: 'First Mate',
//       universe: 'Star Trek',
//       weapon: 'Logic',
//       power_level: 170 },
//     { name: 'Lore',
//       role: 'Villain',
//       universe: 'Star Trek',
//       weapon: 'Intellect',
//       power_level: 800 } ],
//   [ { name: 'Dr. Daniel Jackson',
//       role: 'Archeologist',
//       universe: 'Stargate',
//       weapon: 'Zat gun',
//       power_level: 120 } ] ]

// ----------------------------------------------------------

// COMBINED PRACTICE 3

// ----------------------------------------------------------

// Create an array containing characters' names who are the only character listed in their universe.

// Your Code here
const result3 = groupValueByUniverse().filter((item) => item.length === 1).flat().map((value) => value.name)
// console.log(result3)
// expected output: [ Marvin the Paranoid Android, Peter Venkman, Dr. Daniel Jackson ]
const groupByUniverse = (acc, curr, i, arr) => {
  acc[curr.universe] = acc[curr.universe] === undefined ? [] : acc[curr.universe]
  acc[curr.universe].push(curr)

  if (i + 1 == arr.length) {
      return Object.entries(acc)
          .filter(([_, characters]) => characters.length === 1)
          .map(([_, characters]) => characters[0])
  }

  return acc
}

const soloCharacters = characters
  .reduce(groupByUniverse, {})
  .map(character => character.name)
  .join(', ')

console.log('soloCharacters:', soloCharacters)
// ----------------------------------------------------------

// COMBINED PRACTICE 4

// ----------------------------------------------------------

// What is the average power level across all characters?

// Your code here
const AVG = characters.map(x => x.power_level).reduce((count,currentItem,idx)=> (count += currentItem ) / idx )
console.log(AVG)
// expected output: 68.71319452795147

const object1 = {
  a: 'somestring',
  b: 42,
};

// console.log(Object.entries(object1))