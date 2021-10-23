'use strict';

const quote = require('./quote.js');

quote((err, qt) => {
	if (err) {
		console.log('FAILED');
		console.log(err);
	} else {
		console.log(qt.data);
	}
});
