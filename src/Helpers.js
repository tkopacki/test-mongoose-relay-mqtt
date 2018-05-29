import * as axios from 'axios';

let gpioGetter = (ip, pin, onState) =>
    axios.post('http://' + ip + '/rpc/GPIO.Read', {
        "pin": pin
    })
    .then(response => {
        return response.data.value === onState;
    });

let relayOn = (ip, channel) =>
    axios.post('http://' + ip + '/rpc/Relay.on', {
        "name": channel
    })
    .then(response => {
        return response.data.result === "ON"
    });

let relayOff = (ip, channel) =>
    axios.post('http://' + ip + '/rpc/Relay.off', {
        "name": channel
    })
    .then(response => {
        return response.data.result === "OFF"
    });

export {
    gpioGetter,
    relayOn,
    relayOff
}