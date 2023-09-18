// Create Dino Constructor
function Dino(species, weight, height, diet, where, when, fact) {
  this.species = species
  this.weight = weight
  this.height = height
  this.diet = diet
  this.where = where
  this.when = when
  this.fact = fact
}

// Create Dino Objects
const objectDino1 = createNewDino("Triceratops", 13000, 114, "herbavor", "North America", "Late Cretaceous", "First discovered in 1889 by Othniel Charles Marsh")
const objectDino2 = createNewDino("Tyrannosaurus Rex", 11905, 144, "carnivor", "North America", "Late Cretaceous", "The largest known skull measures in at 5 feet long.")
const objectDino3 = createNewDino("Anklyosaurus", 10500, 55, "herbavor", "North America", "Late Cretaceous", "Anklyosaurus survived for approximately 135 million years.")
const objectDino4 = createNewDino("Brachiosaurus", 70000, "372", "herbavor", "North America", "Late Jurasic", "An asteroid was named 9954 Brachiosaurus in 1991.")
const objectDino5 = createNewDino("Stegosaurus", 11600, 79, "herbavor", "North America, Europe, Asia", "Late Jurasic to Early Cretaceous", "The Stegosaurus had between 17 and 22 seperate places and flat spines.")
const objectDino6 = createNewDino("Elasmosaurus", 16000, 59, "carnivor", "North America", "Late Cretaceous", "Elasmosaurus was a marine reptile first discovered in Kansas.")
const objectDino7 = createNewDino("Pteranodon", 44, 20, "carnivor", "North America", "Late Cretaceous", "Actually a flying reptile, the Pteranodon is not a dinosaur.")
const objectDino8 = createNewDino("Pigeon", 0.5, 9, "herbavor", "World Wide", "Holocene", "All birds are living dinosaurs.")

function createNewDino(species, weight, height, diet, where, when, fact) {
  return new Dino(species, weight, height, diet, where, when, fact)
}

const dinoModule = (function dinoModule() {
  const dinos = []
  function add(dino) {
    dinos.push(dino)
  }
  function get() {
    return dinos
  }
  return {
    add: add,
    get: get
  }
})()

dinoModule.add(objectDino1)
dinoModule.add(objectDino2)
dinoModule.add(objectDino3)
dinoModule.add(objectDino4)
dinoModule.add(objectDino5)
dinoModule.add(objectDino6)
dinoModule.add(objectDino7)
dinoModule.add(objectDino8)

// Create Human Object
function Human(name, height, weight, diet, fact) {
  return { name, height, weight, diet, fact }
}

// Use IIFE to get human data from form
const humanElement = (function () {
  const name = document.getElementById('name')
  const height = document.getElementById('height')
  const weight = document.getElementById('weight')
  const diet = document.getElementById('diet')
  return { name, height, weight, diet }
})()

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.
Dino.prototype.compareHeight = function (human) {
  this.message = this.message ? this.message : ""
  switch (true) {
    case parseInt(human.height) === parseInt(this.height):
      this.message += `The human as tall as ${this.species},`
      break;
    case parseInt(human.height) >= parseInt(this.height):
      this.message += `The human is higher than ${this.species},`
      break;
    case parseInt(human.height) <= parseInt(this.height):
      this.message += `The human is lower than ${this.species},`
      break;
    default:
      break;
  }
}

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.
Dino.prototype.compareWeight = function (human) {
  this.message = this.message ? this.message : ""
  switch (true) {
    case parseInt(human.weight) === parseInt(this.weight):
      this.message += `The human as heavy as ${this.species},`
      break;
    case parseInt(human.weight) >= parseInt(this.weight):
      this.message += `The human is heavier than ${this.species},`
      break;
    case parseInt(human.weight) <= parseInt(this.weight):
      this.message += `The human is lighter than ${this.species},`
      break;
    default:
      break;
  }
}

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.
Dino.prototype.compareDiet = function (human) {
  this.message = this.message ? this.message : ""
  switch (true) {
    case human.diet.toLowerCase() !== this.diet.toLowerCase():
      this.message += "Food sources are different from the human,"
      break;
    case human.diet.toLowerCase() === this.diet.toLowerCase():
      this.message += "Food source similar to the human,"
      break;
    default:
      break;
  }
}

// Generate Tiles for each Dino in Array
function render(dinosArray) {
  dinosArray.forEach(function (dino) {
    // Add tiles to DOM
    const gridElement = document.createElement('div')
    gridElement.classList.add("grid-item")
    gridElement.innerHTML = `
              <h3>${dino.species ? dino.species : dino.name}</h3>
              <img src="./images/${dino.species ? dino.species.toLowerCase() : 'human'}.png" alt="">
              <p>${dino.fact}</p>
          `
    document.getElementById("grid").appendChild(gridElement)
  })
}

// Remove form from screen
function closeForm() {
  document.getElementById('dino-compare').remove()
}

// On button click, prepare and display infographic
document.getElementById('btn').onclick = function () {
  const { name, height, weight, diet } = humanElement
  if (validationForm(humanElement)) {
    return
  }
  const objectHuman = Human(name.value, height.value, weight.value, diet.value, "")
  const dinosaur = dinoModule.get()
  dinosaur.forEach(function (dino) {
    if (dino.species !== "Pigeon") {
      dino.compareHeight(objectHuman)
      dino.compareWeight(objectHuman)
      dino.compareDiet(objectHuman)
    }
  })
  const sortDinosaur = sortArrayRandom(dinosaur)
  sortDinosaur.splice(4, 0, objectHuman)
  render(sortDinosaur)
  closeForm()
}

function validationForm(object) {
  for (const key in object) {
    const value = object[key].value
    if (value === '') {
      alert(`Please do not leave the ${key.toUpperCase()} field empty`)
      return true
    }
  }
}

function sortArrayRandom(data) {
  for (let idx = 0; idx < data.length; idx++) {
    const idxRandom = Math.floor(Math.random() * data.length)
    const elementTemp = data[idx];
    data[idx] = data[idxRandom]
    data[idxRandom] = elementTemp
  }
  return data
}

