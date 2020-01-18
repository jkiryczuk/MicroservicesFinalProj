const app = require('./app');
const winston = require('winston');
require('winston-logstash');

app.set('port', process.env.PORT || 8081);

const server = app.listen(app.get('port'), () => {
    console.log(`Product service is listening on
    ${server.address().port}`);
});

//module.exports = app;
winston.add(winston.transports.Logstash,
    {
        port: process.env.LOGSTASH_PORT,
        host: process.env.LOGSTASH_URL,
    });