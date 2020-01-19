const winston = require('winston');
require('winston-logstash');

exports.send = (req, res) => {
    setTimeout(function(address) {
        var json = JSON.parse(req);
        // console.log(`Email sent.`+ json.email);
        winston.log('info', 'send', { message: 'email sent' });
    },5000);    
};