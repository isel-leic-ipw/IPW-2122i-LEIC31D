'use strict';

const fsc = require('fs');
const fsp = require('fs/promises');

const filename = process.argv[2] || './output.txt';

const now = `${new Date()}\n`;

fsc.appendFile(filename, now, err => {
	if (err) {
		console.log('####')
		console.log('fs w/ callback error');
		console.log(err);
		console.log('----');
	} else {
		console.log('####')
		console.log('fs w/ callback success');		
		console.log('----');
	}		
});

const appendPromise = fsp.appendFile(filename, now);
console.log(appendPromise);

appendPromise
	.then(() => {
		console.log('####')
		console.log(appendPromise);
		console.log('fs w/ promises success');		
		console.log('----');
	})
	.catch(err => {
		console.log('####')
		console.log(appendPromise);
		console.log('fs w/ promises error');
		console.log(err);
		console.log('----');
	});
	








