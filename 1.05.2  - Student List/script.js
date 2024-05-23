let students = []; //create a list of array to store student info.

function addStudent() {
  const studentName = prompt("Enter the student's name:");
  const studentGrade = parseInt(prompt("Enter the student's grade:"));
  const studentClass = prompt("Enter the student's class:");
  const student = {
    name: studentName,
    grade: studentGrade,
    class: studentClass,
  };

  students.push(student);
  alert("Student Added!");
}

function viewStudent() {
  let studentLists = "List of students: \n";
  for (const student of students) {
    studentLists += `${student.name}: ${student.grade}%\n`;
  }

  alert(studentLists);
}
