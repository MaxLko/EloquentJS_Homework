// range creating function
function range(strStart, strEnd, delta) {
	if (!delta) {
		if (strStart <= strEnd) delta = 1; else delta = -1;
	}
	var str = [];
	str[0] = strStart;
	for (i = 0; isInBetween(strStart,strEnd,str[i]+delta); i++) {
		str[i+1] = str[i]+delta;
	}
	return str;
}
function isInBetween(start, end, element) {
	if (start<end && (element<start || element>end)) return false;
	if (start>end && (element>start || element<end)) return false;
	else return true;
}
// range sum function
function sum(range) {
	var rangeSum = 0;
	for (i = 0; i < range.length; i++) {
		rangeSum += range[i];
	}
	return rangeSum;
}
console.log(range(5,2,-1));
console.log(sum(range(1,10)));
// function returns reversed array
function reverseArray(array) {
	var reversedArray = [];
	for (i = 0, k = array.length-1; k >= 0; i++, k--) {
		reversedArray[i] = array[k];
	}
	return reversedArray;
}
// function reverse input array as standart .reverse method
function reverseArrayInPlace(array) {
	for (i = 0; i < Math.floor(array.length / 2); i++) {
		var origin = array[i];
		array[i] = array[array.length-1-i];
		array[array.length-1-i] = origin;
	}
	return array;
}
console.log(reverseArray(["A","B","C"]));
var arrayValue = [1,2,3,4,5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// list object test
var globalList = {
	value: 1,
	rest: {
		value: 2,
		rest: {
			value: 3,
			rest: null
		}
	}
};
console.log(globalList);
// this function creates list from array
function arrayToList(array) {
	var list = null;
	for (i = array.length - 1; i >= 0; i--) {
		list = {value: array[i], rest: list};
	}
	return list;
}
console.log(arrayToList([10,20]));
// this function creates array from list
function listToArray(list) {
	var i = 0; var array = [];
	arrayPut(list);
	function arrayPut(list) {
		array[i] = list.value; i++;
		if (list.rest != null) {
			arrayPut(list.rest);
		}
	}
	return array;
}
console.log(listToArray(arrayToList([10,20,30])));
// this function returns (list) with (value) as the first element
function prepend(value, list) {
	return newlist = {value: value, rest: list};
}
console.log(prepend(10, prepend(20, null)));
// this recurent function returns element at the (place) of (list)
function nth(list, place) {
	if (place != 0) return nth(list.rest, place - 1);
	else return list.value;
}
console.log(nth(arrayToList([10, 20, 30]), 1));
// this function should work sd ===
function deepEqual(object1, object2) {
	if (object1 === object2) return true;
	if (typeOf (object1) != "object" || typeOf (object2) != "object" ||
		object1 == null || object2 == null) return false;
	var propertiesInObject1 = 0; var propertiesInObject2 = 0;
	for (var property in object1) propertiesInObject1++;
	for (var property in object2) { propertiesInObject2++;
		if (!(property in object1) || !deepEqual(object1[property], object2[property])) return false;
	}
	return propertiesInObject1 == propertiesInObject2;
}
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));