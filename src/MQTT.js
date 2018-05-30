import * as mqtt from 'mqtt';

export default class MQTTClient {
    constructor(url, user, password) {
        this.client = mqtt.connect(url, {"username": user, "password": password});
        this.client.on("message", (topic, message) =>{
            this.handlers.topic(message);
        });
        this.handlers = {};
    }

    subscribe(topic, handler) {
        this.client.subscribe(topic)
        this.handlers.topic = handler;
    }

    public(topic, message) {
        this.client.publish(topic, message);
    }

    close() {
        this.client.end();
    }
}