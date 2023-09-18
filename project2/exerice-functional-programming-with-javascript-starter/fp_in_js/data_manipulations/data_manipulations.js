var nearEarthObjects = require('./nasa_near_earth_object_API.json');
// The object in the nasa_near_earth_object_API.json is a copy of real API response from the NASA Near-Earth Object API. 
// Find the following from the API:

// Total Count ---------------------------------------------
// 1. How many near-earth objects did NASA register for the date of the search? Return the asteroid count.
console.log(nearEarthObjects.element_count)
// Averages ------------------------------------------------
// 2. What was the average absolute magnitude of all the near earth objects in this data set? Return the average absolute_magnitude_h.

// Hint - you can achieve this multiple ways, but the reduce method can be a little-known but cool way to find averages. To do it though, you'll need to use the initial_value argument
// For some extra challenge try using reduce with the initial setting argument. To learn more about it, take a look at this page: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

const result1 = Object.values( nearEarthObjects.near_earth_objects).flat().reduce((count,item,idx,arr) => {
    // vị trí cuối cùng
    if (idx + 1 === arr.length) {
        return count / arr.length
    }
    return count += item.absolute_magnitude_h
},0)
console.log(result1)

// Hazardous -----------------------------------------------
// 3. A list of all objects (their id, name, max size in miles, and closest approach in miles) that are labeled potentially hazardous
const hazardous = api_sample_data['near_earth_objects']['2019-12-02'].filter(asteroid => asteroid['is_potentially_hazardous_asteroid'] === true)
console.log(hazardous[0])
const hazardousFmt = hazardous.map(asteroid => {
	const closeApproach = asteroid['close_approach_data']
	return {
   	id: asteroid['id'],
   	name: asteroid['name'],
   	maxSize: asteroid['estimated_diameter']['miles']['estimated_diameter_max'],
   	closestApproach: closeApproach[0]['miss_distance']['miles']
	}
})


// Too Close for Comfort -----------------------------------
// 4. A list of all objects (their id, name, max size in miles, and closest approach in miles) that have a miss_distance of less than 900,000 miles
const tooClose = api_sample_data['near_earth_objects']['2019-12-02'].filter(asteroid => {
	const closeApproach = asteroid['close_approach_data']
	return closeApproach[0].miss_distance.miles < 900000
})
const tooCloseResults = tooClose.map(asteroid => {
    const closeApproach = asteroid['close_approach_data']
return {
   	id: asteroid['id'],
   	name: asteroid['name'],
   	maxSize: asteroid['estimated_diameter']['miles']['estimated_diameter_max'],
   	closestApproach: closeApproach[0]['miss_distance']['miles']
	}
})

// Alert ---------------------------------------------------
// 5. Of all the near-earth objects for this date, find the time that the asteroid with the nearest miss will be closest to earth. 

const closest = apiSampleData.nearEarthObjects['2019-12-02'].reduce((closest, curr) => {
    const currDist = parseFloat(curr.closeApproachData[0].missDistance.miles)
    const closestDist = parseFloat(closest.closeApproachData[0].missDstance.miles)
    if (currDist > closestDist) {
      return closest
    } else {
      return curr
    }
  })
  console.log(closest.closeApproachData[0].missDistance.miles)