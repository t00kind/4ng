import express from 'express'
import path from 'path'
import {dirname} from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);


const app = express()
const __dirname = dirname(__filename);

app.get('/', async(req, res) => {
	res.sendFile(__dirname +'/index.html');
});

app.listen(80, function() {
	console.log('running');
});