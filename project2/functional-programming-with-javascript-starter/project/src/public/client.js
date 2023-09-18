// const Immutable = require('immutable');
// import Immutable from 'immutable';

let store = {
    user: { name: "Student" },
    apod: '',
    rovers: ['Curiosity', 'Opportunity', 'Spirit'],
    dataRovers :'',
    tab:'rover1-tab'
}

// add our markup to the page
const root = document.getElementById('root')

const updateStore = (store, newState) => {
    store = Object.assign(store, newState)
    render(root, store)
}

const render = (root, state) => {
    root.innerHTML = App(state)
    handleClickTabMenu()
}


// create content
const App = (state) => {
    let { rovers, apod , dataRovers } = state
    return `
        <header></header>
        <main>
            ${Greeting(store.user.name)}
            <section>
            <h3>Put things on the page!</h3>
            <p>Here is an example section.</p>
            <p>
            One of the most popular websites at NASA is the Astronomy Picture of the Day. In fact, this website is one of
            the most popular websites across all federal agencies. It has the popular appeal of a Justin Bieber video.
            This endpoint structures the APOD imagery and associated metadata so that it can be repurposed for other
            applications. In addition, if the concept_tags parameter is set to True, then keywords derived from the image
            explanation are returned. These keywords could be used as auto-generated hashtags for twitter or instagram feeds;
            but generally help with discoverability of relevant imagery.
            </p>
            ${ImageOfTheDay(apod)}
            </section>
            ${roversComponent(state)}
        </main>
        <footer></footer>
    `
}

// listening for load event because page should load before any JS is called
window.addEventListener('load', () => {
    render(root, store)
    getRovers('curiosity')
})

// ------------------------------------------------------  COMPONENTS

// Pure function that renders conditional information -- THIS IS JUST AN EXAMPLE, you can delete it.
const Greeting = (name) => {
    if (name) {
        return `
            <h1>Welcome, ${name}!</h1>
        `
    }

    return `
        <h1>Hello!</h1>
    `
}

// Example of a pure function that renders infomation requested from the backend
const ImageOfTheDay = (apod) => {

    // If image does not already exist, or it is not from today -- request it again
    const today = new Date()
    const photodate = new Date(apod.date)
    console.log(photodate.getDate(), today.getDate());

    console.log(photodate.getDate() === today.getDate());
    if (!apod || apod.date === today.getDate()) {
        getImageOfTheDay(store)
    }

    // check if the photo of the day is actually type video!
    if (apod.media_type === "video") {
        return (`
            <p>See today's featured video <a href="${apod.url}">here</a></p>
            <p>${apod.title}</p>
            <p>${apod.explanation}</p>
        `)
    } else {
        return (`
            <img src="${apod.image?.url}" height="350px" width="100%" />
            <p>${apod.image?.explanation}</p>
        `)
    }
}

const roversComponent = (state) => {
    const { dataRovers } = state
    return `
        <section>
            <h1>Mars Rover Photos</h1>
            <div class="rover-tabs">
                ${renderTab(tabName)}
            </div>
            <div class="rover-content">
                <div class="rover-content-item" id="rover1-content">
                    <div class="item-inner">
                        ${renderRoverItem(dataRovers?.image?.photos)(3)}
                    </div>
                </div>
                <div class="rover-content-item" id="rover2-content">
                    <div class="item-inner">
                        ${renderRoverItem(dataRovers?.image?.photos)(3)}
                    </div>
                </div>
                <div class="rover-content-item" id="rover3-content">
                    <div class="item-inner">
                        ${renderRoverItem(dataRovers?.image?.photos)(3)} 
                    </div>
                </div>
            </div>
        </section>
    `
}

const renderRoverItem  = (roverPhotos) => {
    const data = roverPhotos ? roverPhotos?.map(x => { return roverItem(x)}) : []
    return function randImgs (numberOfImages) {
        const randomImages = []
        const max = numberOfImages > data.length ? data.length : numberOfImages;
        for(let i = 0 ; i < max ; i++) {
            randomImages.push(data[Math.floor(Math.random() * data.length)]);
        }
        return randomImages
    }
}


const roverItem = (x) => {
    return `
        <div class="card">
            <div class="card-carousel-img">
                <img src="${x.img_src}" alt=""/>
            </div>
            <div class="card-body">
                <p class="card-text">Launch Date: ${x.rover.launch_date}</p>
                <p class="card-text">Landing Date: ${x.rover.landing_date}</p>
                <p class="card-text">Status: ${x.rover.status}</p>
                <p class="card-text">Date the most recent photos were taken: ${x.rover.max_date}</p>
            </div>
        </div>
        `
}

const tabName = (tab,id) => {
    return `<div class="tab" id="rover${id}-tab" data="${tab.toLowerCase()}">${tab}</div>`
  }
  
const renderTab = (callback) => {
    return store.rovers.map((x,idx) => {
        return callback(x,idx+1)
    })
    
}

// ------------------------------------------------------  API CALLS

// Example API call
const getImageOfTheDay = (state) => {
    let { apod } = state

    fetch(`http://localhost:3000/apod`)
        .then(res => res.json())
        .then(apod => updateStore(store, { apod }))

    // return data
}

const getRovers = (roverName) => {
    fetch(`http://localhost:3000/rovers?id=${roverName}`)
        .then(res => res.json())
        .then(dataRovers => { updateStore(store, { dataRovers })})
}

function handleClickTabMenu() {

    document.getElementById(store.tab).classList.add('active')
    const id = document.getElementById(store.tab).getAttribute('id').replace('-tab', '-content');
    document.getElementById(id).classList.add('active');

    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.rover-content > div');
    tabs.forEach((tab) => {
        tab.addEventListener('click', (e) => {
            // Remove active class from all tabs and contents
            tabs.forEach((tab) => tab.classList.remove('active'));
            contents.forEach((content) => (content.style.display = 'none'));
            
            // Add active class to the clicked tab and display its content
            tab.classList.add('active');
            const contentId = tab.getAttribute('id').replace('-tab', '-content');
            document.getElementById(contentId).style.display = 'block';
            store.tab = tab.getAttribute('id')

            
            getRovers(e.target.getAttribute("data"))
        });
    });
}
