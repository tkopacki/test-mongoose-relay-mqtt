import * as axios from 'axios';

let gpioGetter = (ip, pin, onState) =>
    axios.post('http://' + ip + '/rpc/GPIO.Read', {
        "pin": pin
    })
    .then(response => {
        console.log(response);
        return response.data.value === onState;
    });

let relayOn = (ip, channel) =>
    axios.post('http://' + ip + '/rpc/Relay.on', {
        "name": channel
    });

let relayOff = (ip, channel) =>
    axios.post('http://' + ip + '/rpc/Relay.off', {
        "name": channel
    });

export {
    gpioGetter,
    relayOn,
    relayOff
}