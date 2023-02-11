require('dotenv').config('./config/.env');

var express = require('express');
var amqp = require('amqp');

var app = express();

var jackrabbit = require('jackrabbit');


var url = process.env.AMPQ_URL || 'amqp://guest:guest@localhost';
var topic = process.env.TOPIC || '#'

console.log("opening rabbit mq connection");

var rabbit  = jackrabbit(url);
var exchange = rabbit.default();
var msgQueue ;

app.use(require('./routes'))

app.set('port',process.env.PORT || 5006)



function sendMsg(data, ack){
    console.log('message received is : ' + JSON.stringify(data.msg));
    ack();
}

app.listen(app.get('port'),function (){
    console.log('server is listening on port '+ app.get('port'))
})



