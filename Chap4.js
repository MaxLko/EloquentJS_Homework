// lets build an amazing triangle
var n = 10; // triangle size
var sym = "#"; // triangle will be constructed from this
var str = sym; // triangle`s line
for (var i = 0; i < n; i++) {
	document.write(str + "<br>");
	str = str + sym;
}
//
document.write("<br>"); //new line
// FizzBuzz for 3 & 5
for (var i = 1;i <= 100;i += 1) {
	if (i%3 == 0 && i%5 == 0) {
		document.write("FizzBuzz" + "<br>");
	}
	else if (i%3 == 0) {
		document.write("Fizz" + "<br>");
	}
	else if (i%5 == 0) {
		document.write("Buzz" + "<br>");
	}
	else document.write(i + "<br>");
}
//
document.write("<br>"); //new line
// Chess table
var n = 3; // table`s height
var m = 14; // table`s width
var sym0 = " "; var sym1 = "#"; // chess table will be constructed from this 2 symbols
var cell; // chess table cell
for (var i = 1; i <= n; i += 1) {
	for (var j = 1; j <= m; j += 1) {
		if ((i+j)%2 == 0) {
			cell = sym0;
		}
		else cell = sym1;
		document.write(cell);
	}
	document.write("<br>"); //new line
}