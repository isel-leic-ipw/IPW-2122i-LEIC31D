'use strict';

const errors = require('./app-errors');

const users = {
	'jtrindade': { books: {} },
	'fpessoa':   { books: {} }
};

const tokens = {
	'4chwViN4QHCTyTnUud88ww': 'jtrindade',
	'cEzwXhDATtaaI5ZAO9PfYA': 'fpessoa' 
};

const hasBook =
	async (username, bookId) =>
		!!users[username].books[bookId];

async function saveBook(username, bookObj) {
	const bookId = bookObj.id;
	users[username].books[bookId] = bookObj;
	return bookId;
}

async function loadBook(username, bookId) {
	const bookObj = users[username].books[bookId];
	if (!bookObj) {
		const err = errors.NOT_FOUND({ id: bookId })
		throw err;
	}
	return bookObj;
}

async function deleteBook(username, bookId) {
	const bookObj = users[username].books[bookId];
	if (!bookObj) {
		throw errors.NOT_FOUND({ id: bookId });
	}
	delete users[username].books[bookId];
	return bookId;
}

async function listBooks(username) {
	return Object.values(users[username].books);
}

async function tokenToUsername(token) {
	return tokens[token];
}

module.exports = {
	hasBook,
	saveBook,
	loadBook,
	deleteBook,
	listBooks,
	tokenToUsername
};
