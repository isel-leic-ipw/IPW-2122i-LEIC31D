'use strict';

function buildErrorList() {
	const errors = {};
	
	function addError(code, name, message) {
		errors[name] = info => {
			return { code, name, message, info };
		};
	}
	
	addError(1000, 'FAIL', "An error occurred");
	addError(1001, 'EXT_SVC_FAIL', "External service failure");
	addError(1002, 'NOT_FOUND', "The item does not exist");
	
	return errors;
}

const errorList = buildErrorList();

module.exports = errorList;
