//Given an array of student objects, use reduce() and filter() to find averages, top performers, etc.
/*Find each student's avg grade, find all students passing (avg grade >= 60), 
    sort students avg grade from highest to lowest
*/

//Prob need to display all student's grades first though in the DOM using a table

//1) Display student data to the DOM
//  1A) Connect the name field to a tr, td and display
//  1B) Connect each student's entire grades to a tr, td and display
//2) Calculate the average grade for each student
//  2A) Create the logic for determining the avg grade
//  2B) Display the solution to the DOM
//3) Find each student who is passing (>= 60)
//  3A) Determine the label for who isn't passing
//  3B) Write the logic to determine who's avg grade is less than 60
//  3C) Implement the label for those who aren't passing
//4) Sort students by avg grade from highest to lowest
//  4A) Write the logic to sort the students by avg grade
//  4B) Display the sorted list to the DOM

const table = document.getElementById("table");

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

//Connect the data to the DOM
students.forEach((student) => {
	//Calc the avg grade for each student
	const avgGrade = student.grades.reduce((acc, currentVal) => acc + currentVal) / student.grades.length;

	student["averageGrade"] = avgGrade;
});

students.sort((a, b) => b.averageGrade - a.averageGrade);

students.forEach((student) => {
	//Identify each student who is passing (>= 60)
	const isPassing = student.averageGrade >= 60 ? "Yes!" : "No &#128542;";
	table.innerHTML += `<tr>
        <td>${student.name}</td>
		<td>${student.grades.join(", ")}</td>
		<td>${student.averageGrade}</td>
		<td>${isPassing}</td>
    </tr>`;
});
