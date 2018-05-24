var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO

var sensor = new Gpio(17, 'out'); 


sensor.read(function (err, value, value2) { //Watch for hardware interrupts on pushButton GPIO, specify callback function
  if (err) { //if an error
    console.error('There was an error', err); //output error message to console
  return;
  }
  console.log(value)
  console.log(value2)
  
});

function unexportOnClose() { //function to run when exiting program 
  sensor.unexport(); // Unexport Button GPIO to free resources
};

process.on('SIGINT', unexportOnClose); 