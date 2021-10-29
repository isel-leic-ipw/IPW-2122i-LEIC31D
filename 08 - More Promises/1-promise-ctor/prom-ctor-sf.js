'use strict';

function sleep(ms, succeed = true) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (succeed) {
				resolve('ok')
			} else {
				reject('nok');
			}
		}, ms);
	});
}

function run1() { 
	console.log('Going to sleep...');
	sleep(4000, false)
		.then(() => { console.log('DONE'); })
		.catch(() => { console.log('FAIL'); })
		.then(() => {console.log('run1 end');} );
}

async function run2() { 
	try {
		console.log('Going to sleep...');
		await sleep(4000, false);
		console.log('DONE');
	} catch (err){
		console.log('FAIL');
	}
	console.log('run2 end');
}

run1();

console.log(':: end of code ::');
