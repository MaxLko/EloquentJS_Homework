// Objects
// Rabits
/*
var rabbit = {};
rabbit.speak = (line) => console.log("Rabbit speak '" + line + "'");
rabbit.speak("I`m alive")

function speak(line) {
	console.log("A " + this.type + " rabbit speak '" + line + "'" );
}
var whiteRabbit = {type: "white", speak: speak};
var fatRabbit = {type: "fat", speak: speak};
whiteRabbit.speak("I'm white");
fatRabbit.speak("I'm fat");
speak.apply(fatRabbit, ["Om-nom-nom!"]); // .apply needs array as a second argument
speak.call({type: "old"}, "Oh my God!"); // this context is object with property type: "old"
// Prototypes
var empty = {};
console.log(empty.toString);
console.log(empty.toString());
console.log(Object.getPrototypeOf({}) == Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype));
console.log(Object.getPrototypeOf(isNaN) == Function.prototype);
console.log(Object.getPrototypeOf([]) == Array.prototype);
// Rabbit prototype
var protoRabbit = {
	speak: function(line) {
		console.log("A " + this.type + " rabbit speak '" + line + "'" );
	}
};
var killerRabit = Object.create(protoRabbit);
killerRabit.type = "killing";
killerRabit.speak("K.O.!");
// Rabbit constructor
function Rabbit(type) {
	this.type = type;
}
var killerRabbit = new Rabbit("killing");
var blackRabbit = new Rabbit("black");
console.log(blackRabbit.type);
Rabbit.prototype.speak = function(line) {
	console.log("A " + this.type + " rabbit speak '" + line + "'" );
}
blackRabbit.speak("All in black");
Rabbit.prototype.teeth = "short";
console.log(killerRabbit.teeth);
killerRabbit.teeth = "long & sharp";
console.log(killerRabbit.teeth);
console.log(blackRabbit.teeth);
console.log(Rabbit.prototype.teeth);
*/
/*
// Polymorphism. Sheet formating
function rowHeights(rows) {
	return rows.map(function(row) {
		return row.reduce(function(max, cell) {
			return Math.max(max, cell.minHeight());
		}, 0);
	});
}
function colWidths(rows) {
	return rows[0].map(function(_, i) {
		return rows.reduce(function(max, row) {
			return Math.max(max, row[i].minWidth());
		}, 0);
	});
}
function drawTable(rows) {
	var heights = rowHeights(rows);
	var widths = colWidths(rows);
	function drawline(blocks, lineNo) {
		return blocks.map(function(block) {
			return block[lineNo];
		}).join(" ");
	}
	function drawRow(row, rowNum) {
		var blocks = row.map(function(cell, colNum) {
			return cell.draw(widths[colNum], heights[rowNum]);
		});
		return blocks[0].map(function(_, lineNo) {
			return drawline(blocks, lineNo);
		}).join("\n");
	}
	return rows.map(drawRow).join("\n");
}
function repeat(string, times) {
	var result = "";
	for (var i = 0; i < times; i++) result += string;
	return result;
}
function TextCell(text) {
	this.text = text.split("\n");
}
TextCell.prototype.minWidth = function() {
	return this.text.reduce(function(width,line) {
		return Math.max(width, line.length)
	}, 0);
};
TextCell.prototype.minHeight = function() {
	return this.text.length;
};
TextCell.prototype.draw = function (width, height) {
	var result = [];
	for (var i = 0; i < height; i++) {
		var line = this.text[i] || "";
		result.push(line + repeat(" ", width - line.length));
	}
	return result;
};
var rows = [];
for (var i = 0; i < 5; i++) {
	var row = [];
	for (var j = 0; j < 5; j++) {
		if ((j+1) % 2 == 0)
			row.push(new TextCell("##"));
		else
			row.push(new TextCell("  "));
	}
	rows.push(row);
}
console.log(drawTable(rows));
var MOUNTAINS = [
  {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
  {name: "Everest", height: 8848, country: "Nepal"},
  {name: "Mount Fuji", height: 3776, country: "Japan"},
  {name: "Mont Blanc", height: 4808, country: "Italy/France"},
  {name: "Vaalserberg", height: 323, country: "Netherlands"},
  {name: "Denali", height: 6168, country: "United States"},
  {name: "Popocatepetl", height: 5465, country: "Mexico"}
];
console.log(drawTable(MOUNTAINS));
*/
// Getters & Setters
var pile = {
	elements: ["first el", "second el", "third el"],
	get height() {
		return this.elements.length;
	},
	set height(value) {
		console.log("Ignore the set heigth attempt", value);
	}
};
console.log(pile.height);
pile.height = 100;
Object.defineProperty(TextCell.prototype, "heightProp", {
	get: function() { return this.text.length;}
});
var cell = new TextCell("yes\nbut");
console.log(cell.heightProp);
cell.heightProp = 100;
console.log(cell.heightProp);