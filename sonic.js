/* 
 * http://thejackalofjavascript.com/rpi-an-ultrasonic-sensor-measure-distances/
 */


var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO

var trigger = new Gpio(13, 'out'); 
var echo = new Gpio(6, 'in'); 

echo.read(function (err, value) { //Watch for hardware interrupts on pushButton GPIO, specify callback function
  if (err) { //if an error
    console.error('There was an error', err); //output error message to console
  return;
  }
  console.log(value)
  
});

function unexportOnClose() { //function to run when exiting program 
  trigger.unexport(); // Unexport Button GPIO to free resources
  echo.unexport(); // Unexport Button GPIO to free resources
};

process.on('SIGINT', unexportOnClose); //function to run when user closes using ctrl+c