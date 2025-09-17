// START
const a = 20;
const b = 10;
const c = 30;
let output = null;

if (a > b) {
	if (a > c) {
		output = a;
	} else {
		output = c;
	}
} else {
	if (b > c) {
		output = b;
	} else {
		output = c;
	}
}
console.log(output);
// END