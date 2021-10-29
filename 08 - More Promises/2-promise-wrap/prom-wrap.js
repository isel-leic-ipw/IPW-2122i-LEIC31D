'use strict';

const fs = require('fs');

fs.appendFileWithPromises = function (path, data) {
	return new Promise((resolve, reject) => {
		this.appendFile(path, data, err => {
			if (!err) {
				resolve();
			} else {
				reject(err);
			}
		});
	});
}

fs.appendFileWithPromises(
	'./output.txt',
	`${new Date()}\n`
)
.then(() => { console.log('[1]', '[ok]'); })
.catch(err => { console.log('[1]', '[nok]', err); });

fs.appendFileWithPromises(
	'./?*?.txt',
	`${new Date()}\n`
)
.then(() => { console.log('[2]', '[ok]'); })
.catch(err => { console.log('[2]', '[nok]', err); });






