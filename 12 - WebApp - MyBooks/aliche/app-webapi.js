'use strict';

const express = require('express');

const errors = require('./app-errors');

module.exports = function (services) {
	
	async function searchInGlobalBooks(req, res) {
		try {
			const book = await services.searchBook(req.query.q);
			res.json(book);
		} catch (err) {
			res.status(500).json(err);
		}
	}
	
	const router = express.Router();
	router.use(express.json());

	router.get('/global/books', searchInGlobalBooks);
	//router.get(...);
	//router.post(...);
	//router.put(...);
	
	return router;
}
