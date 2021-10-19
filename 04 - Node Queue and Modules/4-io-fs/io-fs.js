'use strict';

const data = [
	"IPL",
	"ISEL",
	"LEIC",
	"IPW",
	"LEIC31D"
];

const fs = require('fs');

const filename = process.argv[2] || './items.txt';

data.forEach(item => {
	console.log('>> writing:', item);
	fs.appendFile(filename, `${item}\n`, (err) => {
		if (err) {
			console.log(err);
		} else {
			console.log('>> written:', item);
		}
	});
});

console.log(":: !DONE ::");
