weaponsWithNoises = [
  {name: 'Phaser', noise: 'bssszzsssss', universe: 'Star Trek'},
	{name: 'Blaster', noise: 'Pew Pew', universe: 'Star Wars'},
	{name: 'Sonic Screwdriver', noise: 'Pew Pew', universe: 'Dr. Who'},
	{name: 'Lightsaber', noise: 'Pew Pew', universe: 'Star Wars'},
	{name: 'Noisy Cricket', noise: 'Pew Pew', universe: 'Men in Black'}
]

function weaponsFromUniverse(universe) {
	// ...Your code here!
	const newUniver = weaponsWithNoises.filter(x => x.universe === universe)
	return (name) => {
		const item = newUniver.find((y) => y.name === name)
		if (item) {
			console.log(`used ${name}: ${item.noise}`) 
		} else {
			console.log(`${name} is not a part of the ${universe} universe'`)
		}	
	}
}

const khoa = weaponsFromUniverse('Men in Black')
khoa('Phaser')

// console.log(weaponsFromUniverse('Star Wars'))
// USAGE
// const useStarWarsWeapon = weaponsFromUniverse('Star Wars')

// useStarWarsWeapon('Blaster') // console logs 'used Blaster: Pew Pew'
// useStarWarsWeapon('Noisy Cricket') // console logs 'Noisy Cricket is not a part of the Star Wars universe'