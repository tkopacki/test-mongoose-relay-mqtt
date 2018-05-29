import * as axios from 'axios';

let gpioGetter = (ip, pin, onState) =>
    axios.post('http://' + ip + '/rpc/GPIO.Read', {
        "pin": pin
    })
    .then(response => {
        console.log("Response from GPIO.Read:", response.data);
        return response.data.value === onState;
    });

let relayOn = (ip, channel) =>
    axios.post('http://' + ip + '/rpc/Relay.on', {
        "name": channel
    })
    .then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                console.log("Sleep 3s after ON");
                resolve();
            }, 3000);
        });
    });

let relayOff = (ip, channel) =>
    axios.post('http://' + ip + '/rpc/Relay.off', {
        "name": channel
    }).then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                console.log("Sleep 3s after OFF");
                resolve();
            }, 3000);
        });
    });

export {
    gpioGetter,
    relayOn,
    relayOff
}