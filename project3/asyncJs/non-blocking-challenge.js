  // Task 1 - write a program that acheives the following sequence

// log "A"
// wait 2s
// log "B"
// wait 3s
// log "C"
// log "D" immediately 


const logB = () => {
    console.log("B")
}

const logC = () => {
    console.log("C")
    console.log("D")
}

console.log("A")
setTimeout(logB, 2000);
setTimeout(logC, 3000);