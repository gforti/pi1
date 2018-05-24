/* 
 * http://thejackalofjavascript.com/rpi-an-ultrasonic-sensor-measure-distances/
 */


var usonic = require('mmm-usonic');

usonic.init(function (error) {
    if (error) {
        console.log(error)
    } else {
        console.log('started')
    }
});

const ECHO = 6
const TRIGGER = 23

var sensor = usonic.createSensor(ECHO, TRIGGER, 450);

var distance = sensor();

console.log(distance);