const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
var cors = require('cors');

var corsOptions = {
	origin: 'http://localhost:3001',
	optionsSuccessStatus: 204
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/source'));

const routes = require('./routes/routes.js')(app, fs);

//app.set('views',__dirname + '/single-module-web-app');



const server = app.listen(3001, () => {
    console.log('listening on port %s...', server.address().port);
});
