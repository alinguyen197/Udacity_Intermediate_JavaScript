// Directions: Rewrite the imperative code below as Object-Oriented 

let status = 'active'
let warp = 2
let type = 'Dilithium Crystal'
let status_report = 'Captain, '

if(status === 'active' && warp <= 4) {
    status_report += 'the engines are active and we could be going faster.'
} else if (status === 'active' && warp > 4) {
    status_report += 'the engines are active and we are going ' + warp + '.'
} else if (status === 'down') {
    status_report += 'the engines are down.'
} else {
    status_report += 'the comms are down and we can`t reach engineering.'
}

// console.log(status_report)


// Object-Oriented  
class WrapTion {
    constructor (status, warp, type, status_report) {
        this.status = status
        this.warp = warp
        this.type = type
        this.status_report = status_report
    }

    progress () {
        if(this.status === 'active' && this.warp <= 4) {
            this.status_report += 'the engines are active and we could be going faster.'
        } else if (this.status === 'active' && this.warp > 4) {
            this.status_report += 'the engines are active and we are going ' + this.warp + '.'
        } else if (this.status === 'down') {
            this.status_report += 'the engines are down.'
        } else {
            this.status_report += 'the comms are down and we can`t reach engineering.'
        }
    }

    getInfor () {
        return this.status_report
    }
    
}

const a = new WrapTion('down' , 4 , 'Custom' , 'Khoa ne,')
a.progress()
console.log(a)