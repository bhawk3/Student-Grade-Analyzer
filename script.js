//Given an array of student objects, use reduce() and filter() to find averages, top performers, etc.
/*Find each student's avg grade, find all students passing (avg grade >= 60), 
    sort students avg grade from highest to lowest
*/

//Prob need to display all student's grades first though in the DOM using a table
const students = [
	{ id: 1, name: "Alice Johnson", grades: [88, 92, 79, 93] },
	{ id: 2, name: "Ben Carter", grades: [95, 90, 97, 94] },
	{ id: 3, name: "Chloe Martinez", grades: [72, 85, 78, 80] },
	{ id: 4, name: "David Kim", grades: [60, 67, 70, 65] },
	{ id: 5, name: "Ella Brown", grades: [98, 99, 100, 97] },
	{ id: 6, name: "Finn Lopez", grades: [83, 76, 89, 84] },
	{ id: 7, name: "Grace Lee", grades: [91, 87, 95, 90] },
	{ id: 8, name: "Hugo Davis", grades: [50, 58, 62, 55] },
	{ id: 9, name: "Ivy Nguyen", grades: [78, 82, 88, 85] },
	{ id: 10, name: "Jack Wilson", grades: [93, 89, 84, 91] },
];
