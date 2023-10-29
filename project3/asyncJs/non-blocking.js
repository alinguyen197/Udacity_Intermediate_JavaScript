// Example of non-blocking code from the video

const nonBlocking = () => {
    // setTimeout is part of the JavaScript window/browswer API, the counter is actually being run outside of our main thread
    setTimeout(console.log, 3000, "Two");
  };
  
  console.log("One");
  
  nonBlocking();
  
  // Notice in the console that Three logs immediately after One
  // This is because setTimeout is not happening here! We're running that function on another process in the Browser API
  console.log("Three");


