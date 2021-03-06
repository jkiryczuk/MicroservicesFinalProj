const User = require('../models/user');
const _ = require('underscore');
const Request = require("request");
var amqp = require('amqplib/callback_api');
var winston = require('winston');
require('winston-logstash');



exports.getAll = (req, res) => {
    User.getAll().then(
        function (allUsers) {
            // console.log(allUsers);
            // winston.log('error', 'hello', { message: 'world' });
            winston.info('getAll', { message: "completed without errors" });
            res.json(allUsers);
        }
    );
};

exports.getById = (req, res) => {
    User.getById(req.params.id).then(
        function (user) {
            res.json(user);
        }
    );
};

// store works as follows:
// 1. try to add new user to the database
// 2. if the operation is correct, try to send email
exports.store = (req, res) => {
    const newUser = User.create({
        'email': req.body.email,
        'name': req.body.name,
        'surname': req.body.surname,
        'birthdate': new Date(req.body.birthdate),
        'gender': req.body.gender
    }).then(function (data) {
        amqp.connect('amqp://rabbit', function (error0, connection) {
            if (error0) {
                winston.log('error', 'store_function', { message: 'thrown error0' });
                throw error0;
            }
            connection.createChannel(function (error1, channel) {
                if (error1) {
                    winston.log('error', 'store_function', { message: 'thrown error1' });
                    throw error1;
                }
                var exchange = 'emails';
                var data = {
                    "email": req.body.email
                };
                var msg = JSON.stringify(data)
                channel.assertExchange(exchange, 'fanout', {
                    durable: false
                });
                channel.publish(exchange, '', Buffer.from(msg));
                winston.log('info', 'store_function', { message: 'succesfully sent message' });
                // console.log(" [x] Sent %s", msg);
            });
            setTimeout(function () {
                connection.close();
                winston.log('debug', 'store_function', { message: 'closed connection' });
            }, 5000);
        });
        res.json({
            'status': 'delivered',
            'user': req.body.email,
        });
    });
};


exports.updateById = (req, res) => {
    // Please note the API change!
    User.update(req.body.user).then(
        function (user) {
            res.json(user);
        }
    )
}