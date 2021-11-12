'use strict';

const data_ext = require('./app-data-ext-books');
const data_int = require('./app-data-int-mem');

async function tryDataExtFind() {
	const book = await data_ext.findBook(process.argv[2]);

	console.log(':: SUCCESS ::');
	console.log(book);	
}

async function tryDataExtGet() {
	const book = await data_ext.getBookById(process.argv[2]);

	console.log(':: SUCCESS ::');
	console.log(book);	
}

async function tryDataExtInt() {
	
	async function findAndSaveBook(query) {
		const book = await data_ext.findBook(query);
		return data_int.saveBook(book);
	}
	
	for (const query of process.argv.slice(2)) {
		await findAndSaveBook(query);
	}
	
	/*
	await Promise.all(
		process.argv.slice(2).map(findAndSaveBook)
	);
	*/

	const books = await data_int.listBooks();

	console.log(':: BOOKS LIST ::');
	console.log(JSON.stringify(books, null, 2));
	
	for (const book of books) {
		await data_int.deleteBook(book.id);
		console.log(':: DELETED ::');
		console.log('ID:', book.id);	
	}

	const noBooks = await data_int.listBooks();

	console.log(':: FINAL BOOKS LIST ::');
	console.log(JSON.stringify(noBooks, null, 2));
}

async function main() {
	try {
		
		//await tryDataExtFind();
		//await tryDataExtGet();
		await tryDataExtInt();

	} catch (err) {
		console.log(':: FAILURE ::');
		console.log(err);
	}
}

main();
