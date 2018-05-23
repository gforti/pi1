var express = require('express');
var app = express();
var path = require('path');
var gpio = require('rpi-gpio');
const host_ip = require('./host-ip')
const PIN = 4;

gpio.setup(PIN, gpio.DIR_OUT);




app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

console.log(path.join(__dirname, 'public'));

app.get('/', function(req, res){
 	res.render('index',{status:"Press Button To change Status of Led !!"});
});

app.post('/led/on', function(req, res){
gpio.write(PIN, true, function(err) {
        if (err) next(err);
        console.log('Written True to pin');
	console.log(path.join(__dirname, 'public'));
	return res.render('index', {status: "Cool!!Led is On"});
    });

});


app.post('/led/off', function(req, res){
gpio.write(PIN, false, function(err) {
        if (err) next(err);
        console.log('Written False to pin');
	console.log(path.join(__dirname, 'public'));
	return res.render('index',{status: "Ohh!! Led is Off"});
    });

});


app.use(function(err, req, res, next) {
  console.log(err);
  res.render('error', {message: err});
});


app.listen(3000, function () {
  console.log(`Simple LED Control Server Started on: http://${host_ip}:3000!`)
})