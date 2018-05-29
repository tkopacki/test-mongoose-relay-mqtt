import {
    gpioGetter,
    relayOn,
    relayOff
} from './Helpers'

let testGPIO = (ip, pin, channel, onState) => 
    relayOn(ip, channel)
    .then(() => {
        console.log("Relay ON signal sent");
        gpioGetter(ip, pin, onState)
    })
    .then(response => {
        if (!response) {
            throw new Error("Pin wasn't enabled correctly\n");
        }
    })
    .then(() => {
        relayOff(ip, channel);
    })
    .then(() => {
        console.log("Relay OFF signal sent");
        gpioGetter(ip, pin, onState)
    })
    .then(response => {
        if (response) {
            throw new Error("Pin wasn't disabled correctly");
        }
    });

export {
    testGPIO
};