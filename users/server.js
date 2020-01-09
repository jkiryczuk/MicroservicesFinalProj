const app = require('./app');

app.set('port', process.env.PORT || 8082);

const server = app.listen(app.get('port'), () => {
    console.log(`User service is listening on
    ${server.address().port}`);
    console.log(JSON.stringify(process.env));
});

//module.exports = app;