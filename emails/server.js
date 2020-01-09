const app = require('./app');
const emailscontroller = require('./controllers/EmailsController');


app.set('port', process.env.PORT || 8083);

var amqp = require('amqplib/callback_api');

function listen() {

    amqp.connect('amqp://rabbitmq', function (error0, connection) {
        if (error0) {
            throw error0;
        }
        connection.createChannel(function (error1, channel) {
            if (error1) {
                throw error1;
            }
            var exchange = 'emails';

            channel.assertExchange(exchange, 'fanout', {
                durable: false
            });

            channel.assertQueue('', {
                exclusive: true
            }, function (error2, q) {
                if (error2) {
                    throw error2;
                }
                console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q.queue);
                channel.bindQueue(q.queue, exchange, '');
                channel.consume(q.queue, function (msg) {
                    if (msg.content) {
                        console.log("received [x] %s", msg.content.toString());
                        emailscontroller.send(msg.content)
                 }
                }, {
                    noAck: true
                });
            });
        });
    });
}
setTimeout(listen, 30000)

const server = app.listen(app.get('port'), () => {
    console.log(`email service is listening on
    ${server.address().port}`);
});