'use strict';

const express = require('express');

const app = express();

app.get('/', (request, response) => {
	response.send('Hello, LEIC31D!');
});

app.get('/show', (request, response) => {
	console.log(request.method);
	console.log(request.path);
	console.log(request.query);
	
	response.write(`${request.method}\n`);
	response.write(`${request.path}\n`);
	response.write(`${JSON.stringify(request.query)}\n`);
	console.log(request.query);
	response.send();
});

app.get('/users/:username/info/:infoitem', (request, response) => {
	console.log(request.method);
	console.log(request.path);
	console.log(request.query);
	console.log(request.params);
	
	response.write(`${request.method}\n`);
	response.write(`${request.path}\n`);
	response.write(`${JSON.stringify(request.query)}\n`);
	response.write(`${JSON.stringify(request.params)}\n`);
	response.send();
});

app.listen(8888);
