// function for comparing numbers
var a = 10.893;
var b = 0.67;
document.write(min(a,b));
function min(num1,num2) {
	if 		(num1 > num2) 	return num2;
	else if (num1 < num2) 	return num1;
	else if (num1 == num2) 	return "numbers are equal";
	else 					return "can`t compare"
}
//
document.write("<br>"); //new line
// parity function
document.write(isEven(-1));
function isEven(arg) {
	if (arg != ~~arg) return "arg must be integer"; //operator "~~" leaves only integer part of a number
	else {
		if (arg < 0) {
			arg = ~arg+1; //removes "-"
		}
	}
	return evenCheck(arg);
	function evenCheck(argum) {
		if (argum == 0) return true; //0 is even
		else if (argum == 1) return false; //1 is odd
		else return evenCheck(argum-2);
	}
}
//
document.write("<br>"); //new line
// function counts how many times char is in str. char is one symbol, str is string
document.write(countChar('Hello world','o'));
function countChar(str,char) {
	var count = 0;
	for (var i = 0; i < str.length; i++) {
		if (str.charAt(i) == char) count++
	}
	return count
}