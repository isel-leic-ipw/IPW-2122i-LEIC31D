'use strict';

const proc = require('./proc.js');

test('proc [] with initial 0', () => { 
	// Arrange
	const arr = [];
	const propName = 'value';
	const initial = 0;
	
	// Act
	const res = proc(arr, propName, (ctx, itm) => {
		return ctx + 1;
	}, initial);
	
	// Assert
	expect(res).toBe(0);
});

test('proc [] with initial []', () => { 
	// Arrange
	const arr = [];
	const propName = 'value';
	const initial = [];
	
	// Act
	const res = proc(arr, propName, (ctx, itm) => {
		return ctx.concat(itm);
	}, initial);
	
	// Assert
	expect(res).toEqual([]);
});

test('proc [3 valid objs] with initial 0', () => { 
	// Arrange
	const arr = [{value:1},{x:9,value:12},{value:2,z:0}];
	const propName = 'value';
	const initial = 0;
	
	// Act
	const res = proc(arr, propName, (ctx, itm) => {
		return ctx + 1;
	}, initial);
	
	// Assert
	expect(res).toBe(3);
});

test('proc [3 valid objs] with initial []', () => { 
	// Arrange
	const arr = [{value:1},{x:9,value:12},{value:2,z:0}];
	const propName = 'value';
	const initial = [];
	
	// Act
	const res = proc(arr, propName, (ctx, itm) => {
		return ctx.concat(itm);
	}, initial);
	
	// Assert
	expect(res).toEqual(arr);
});

test('proc [2 valid objs in 5] with initial []', () => { 
	// Arrange
	const arr = [{value:1},{},{x:9,value:12},{values:[1,2,3],z:0}];
	const propName = 'value';
	const initial = [];
	
	const expectedRes = [{value:1},{x:9,value:12}];
	
	// Act
	const res = proc(arr, propName, (ctx, itm) => {
		return ctx.concat(itm);
	}, initial);
	
	// Assert
	expect(res).toEqual(expectedRes);
});


