import express from 'express';
import __dirname from './dirname';
let app = express();

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.listen(80, function() {
	console.log('running');
});