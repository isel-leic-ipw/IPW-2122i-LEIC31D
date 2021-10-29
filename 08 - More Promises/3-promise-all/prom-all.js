'use strict';

const fetch = require('node-fetch');

function getResponseSize(url) {
	return fetch(url)
		.then(res => {
			const contentLength = Number(res.headers.get('Content-Length'));
			return contentLength || res.text().then(txt => txt.length);
		})
}

// poor, non-functional style :-(
// sequential :-(
async function getResponseSizes1(...urls) {
	const sss = new Array(urls.length);
	for (let i = 0; i < urls.length; ++i) {
		sss[i] = await getResponseSize(urls[i]);
	}
	return sss;
}

// poor, non-functional style :-(
// parallel :-)
function getResponseSizes2(...urls) {
	const sss = new Array(urls.length);
	for (let i = 0; i < urls.length; ++i) {
		sss[i] = getResponseSize(urls[i]);
	}
	return Promise.all(sss);
}

console.time('sizes');
getResponseSizes2(
	'http://loripsum.net/api/1/short/plaintext',
	'https://www.google.com',
	'https://www.isel.pt',
	'https://www.microsoft.com',
	'https://www.publico.pt',
	'https://www.dn.pt',
	'https://www.sapo.pt',
)
.then(console.log)
.then(() => { console.timeEnd('sizes'); });
