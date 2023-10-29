// Example of blocking code from the video

// This function takes a long time!
const longFunction = (ms) => {
    var start = Date.now(),
        now = start;
    while (now - start < ms) {
      now = Date.now();
    }
};

console.log("One");

longFunction(3000);

console.log("Two");

// Notice how each of the lines above happen in order. Each one "blocks" this thread until it is completed
