const app = require('./app');

app.set('port', process.env.PORT || 8084);

const server = app.listen(app.get('port'), () => {
    console.log(`Order service is listening on
    ${server.address().port}`);
});

//module.exports = app;