import {
    testGPIO
} from './BoardTester';
import MQTTClient from './MQTTClient';

/*testGPIO('192.168.0.17', 5, "light1", 0)
    .then(() => console.log("Light1 tested"))
    .catch((error) => console.log("Test failed !"));*/

let mqtt = new MQTTClient("mqtt://aqmqtt.ddns.net:1883", "aquarium", "dupek.12");
mqtt.subscribe("parents/aquarium/relays/switch1", (message) => {console.log(message)});
