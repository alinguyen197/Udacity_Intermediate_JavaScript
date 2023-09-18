// Retrieve data from Mars exploration APIs 
const fetchData = async () => {
try {
    const response = await fetch('API_URL'); const data = await response.json(); return data;
    } catch (error) {
    console.log('Error fetching data:', error); return null;
    }
    };
    // Manipulate and filter the data using functional programming techniques 
    const transformData = (data) => {
    const transformedData = data
    .map((item) => ({ name: item.name, date: item.date,temperature: item.temperature,})).filter((item) => item.temperature > 0);
    // additional properties based on your project requirements
    
    
    return transformedData;
    
    };
    
    // High-order function: AppGenerator 
    const AppGenerator = (Component) => {
    
    return function (state) {
    
    return state.loading === true ? Loading() : Component(state);
    
    };
    
    };
    
    const App = AppGenerator((state) => {
    
    const curRover = state[state.currentRover]; 
    const RandomLastestImgs = !state.loading ? LastestImageGenerator(curRover.lastest_images) : null;
    
    return `
        ${Rover(curRover)} 
        <div class="divider"><p><strong>Lastest Images</strong></p></div>
        <div class="slideshow">${RandomLastestImgs(3)}</div>
        `;
    });
    
    // High-order function: LastestImageGenerator 
    const LastestImageGenerator = (lastest_images) => {
    
    const data = lastest_images.map((data) => { return LastestImage(data);});
    
    return function randomImages(numberOfImages) { 
        randImgs = [];
        const max = numberOfImages > data.length ? data.length : numberOfImages;
        for (let i = 0; i < max; i += 1) { 
            randImgs.push(data[Math.floor(Math.random() * data.length)]);
        }
    
        return randImgs.join(' ');
    };
    };


const LastestImage = (state) => { 

let { img_src, earth_date, camera_full_name } = state; 
return ` <div class="slide"> <img src="${img_src}" alt="image1" /> 
<div class="camera-properties">
    <ul> 
        <li><strong>Earth Date: </strong><span>${earth_date}</span></li> 
        <li><strong>Camera: </strong><span>${camera_full_name}</span></li> 
    </ul> 
 </div> 
 </div> `; }; // Render the data in the dashboard const render = async (root, state) => { root.innerHTML = App(state); };