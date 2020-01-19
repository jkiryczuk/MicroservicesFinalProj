const app = require('./app');
var winston = require('winston');
require('winston-logstash');


app.set('port', process.env.PORT || 8082);

winston.add(winston.transports.Logstash,
    {
        port: process.env.LOGSTASH_PORT,
        host: process.env.LOGSTASH_URL,
        node_name: process.env.LOGSTASH_NODE_NAME,
    });
    

const server = app.listen(app.get('port'), () => {
    console.log(`User service is listening on
    ${server.address().port}`);
    console.log(JSON.stringify(process.env));
});

//module.exports = app;