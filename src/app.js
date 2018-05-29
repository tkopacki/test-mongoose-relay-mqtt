import { testGPIO } from './BoardTester';

testGPIO('192.168.0.17', 5, "light1", 0)
.then(() => console.log("Light1 tested"))
.catch((error) => console.log(error));
