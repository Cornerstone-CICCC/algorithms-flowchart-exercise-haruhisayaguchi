// START
const a = 3;
const b = 4;
const c = 5;
let output = false;

if (a < b + c && b < c + a && c < a + b) {
	output = true;
}
console.log(output);
// END