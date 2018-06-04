import * as mqtt from 'mqtt';
import * as fse from 'fs-extra';


let client = mqtt.connect('mqtt://aqmqtt.ddns.net:1883', {
    "username": "aquarium",
    "password": "dupek.12"
});

let scheduler = {
    "light1": {"on": "", "off": ""},
    "light2": {"on": "", "off": ""},
    "co2": {"on": "", "off": ""},
    "o2": {"on": "", "off": ""},
};

client.on('message', function (topic, message) {
    message = JSON.parse(message);
    message["ts"] = new Date().toString();
    fse.writeJson('switch.log', message, {"flag": "a"});
})

client.on('connect', function () {
    client.subscribe("parents/aquarium/callback");
})