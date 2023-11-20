import express from 'express'
import path from 'path'

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
    
let app = express();

app.get('',function(req,res){
   res.sendFile(path.join(__dirname + '/index.html')); 
});

app.get('/js/main.js',function(req,res){
    res.sendFile(path.join(__dirname + '/js/main.js')); 
});



app.listen(80, function() {
	console.log('TIME TO CHNG');
});