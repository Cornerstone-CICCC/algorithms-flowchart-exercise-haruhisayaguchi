// I know it's a little bid advanced but I just sticked to my flowchart.

// START
let students = [
	{ mark: 90, name: 'Max' },
	{ mark: 10, name: 'John' },
	{ mark: 40, name: 'Paul' },
	{ mark: 67, name: 'Tom' }
];
const total = 100;

const grades = students.map((student) => {
	if (80 <= (student.mark / total * 100)) {
		return { ...student, grade: 'A' };
	} else if (60 <= (student.mark / total * 100)) {
		return { ...student, grade: 'B' };
	} else if (40 <= (student.mark / total * 100)) {
		return { ...student, grade: 'C' };
	} else {
		return { ...student, grade: 'No Grade' };
	}
})
console.log(grades);
// END