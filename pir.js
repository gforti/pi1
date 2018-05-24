/*
 * Senors this code works
 * Tilt, PIR(Motion)
 */

var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO

var sensor = new Gpio(17, 'in', 'both'); 

var LED = new Gpio(4, 'out'); //use GPIO pin 4, and specify that it is output

sensor.watch(function (err, value) { //Watch for hardware interrupts on pushButton GPIO, specify callback function
  if (err) { //if an error
    console.error('There was an error', err); //output error message to console
  return;
  }
  console.log(value)
  
  LED.writeSync(value);
  LED.writeSync(0); // Turn LED off
  LED.unexport(); // Unexport GPIO to free resources
  
});

function unexportOnClose() { //function to run when exiting program 
  sensor.unexport(); // Unexport Button GPIO to free resources
};

process.on('SIGINT', unexportOnClose); //function to run when user closes using ctrl+c