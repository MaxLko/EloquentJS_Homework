// this function creates array from array of arrays using .reduce & .concat
function convolution(arrayOfArrays) {
	return arrayOfArrays.reduce(function(a,b) {return a.concat(b)});
}
var arrays = [[1,2,3],[4,5],[6]];
console.log(convolution(arrays));
// JSON part
var ancestry = JSON.parse(ANCESTRY_FILE);
console.log(ancestry.length); // yes, it works
// average age difference btw mothers & their childrens
function average(array) {
	function plus(a, b) {return a + b;}
	return array.reduce(plus) / array.length
}
var byName = {}; // byName simplifies search for the person
ancestry.forEach(function(person) {
	byName[person.name] = person;
});
var difference = ancestry.filter(function(person) {
	return byName[person.mother] != null; // removing persons without mother
}).map(function(person) {
	return person.born - byName[person.mother].born;
});
console.log(average(difference));
// historically expected life duration -- average age for every century
function groupBy(array, groupFunction) {
	var groups = {};
	array.forEach(function(element) {
		var groupName = groupFunction(element);
		(groupName in groups) ? groups[groupName].push(element) : groups[groupName] = [element];
	});
	return groups;
}
var byCentury = groupBy(ancestry, function(person) {
	return Math.ceil(person.died / 100);
});
for (var century in byCentury) {
	var ages = byCentury[century].map(function(person) {
		return person.died - person.born;
	});
	console.log(century + ": " + average(ages).toFixed(1)*1);
}
// my every & some functions for array
function every(array, predicate) {
  let response = true; // initial value
  array.forEach(function(item) {
    if (!predicate(item)) {response = false; return};
  });
  return response;
}
function some(array, predicate) {
  let response = false; // initial value
  array.forEach(function(item) {
    if (predicate(item)) {response = true; return};
  });
  return response;
}
console.log(every([NaN, NaN, NaN], isNaN));
console.log(every([NaN, NaN, 4], isNaN));
console.log(some([NaN, 3, 4], isNaN));
console.log(some([2, 3, 4], isNaN));