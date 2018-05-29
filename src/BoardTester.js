import {
    gpioGetter,
    relayOn,
    relayOff
} from './Helpers'

let testGPIO = (ip, pin, channel, onState) =>
    relayOn(ip, channel)
    .then(response => {
        return gpioGetter(ip, pin, onState)
    })
    .then(response => {
        if (response) {
            return relayOff(ip, channel);
        } else {
            throw new Error("Pin wasn't enabled correctly\n");
        }
    })
    .then(response => {
        return gpioGetter(ip, pin, onState)
    })
    .then(response => {
        if (response) {
            throw new Error("Pin wasn't disabled correctly");
        }
    });

export {
    testGPIO
};