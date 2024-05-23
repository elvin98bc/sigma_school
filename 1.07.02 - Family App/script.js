class FamilyMember {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const familyMembers = [];

function submitFamilyMember() {
  const nameInput = document.getElementById("name");
  const ageInput = document.getElementById("age");
  const genderInput = document.getElementById("gender");

  const name = nameInput.value;
  const age = parseInt(ageInput.value);
  const gender = genderInput.value;

  const familyMember = new FamilyMember(name, age, gender);
  familyMembers.push(familyMember);

  reloadFamilyMembers();
}

function reloadFamilyMembers() {
  const familyList = document
    .getElementById("familyMembers")
    .getElementsByTagName("tbody")[0];
  familyList.innerHTML = "";

  for (let i = 0; i < familyMembers.length; i++) {
    const member = familyMembers[i];
    const row = document.createElement("tr");
    row.innerHTML = `
      <td id= "name_${i}">${member.name}</td> 
      <td id= "age_${i}">${member.age}</td>
      <td>${member.gender}</td>
      <td><button onclick="addAge(${i})">Add Age</button></td>
      <td><button onclick="changeName(${i})">Change Name</button></td>
    `;
    familyList.appendChild(row);
  }
}

function addAge(index) {
  const age = document.getElementById(`age_${index}`);
  const current_age = parseInt(age.textContent);
  const newAge = current_age + 1;
  age.textContent = newAge;
  familyMembers[`${index}`].age = newAge;
}

function changeName(index) {
  const name = document.getElementById(`name_${index}`);
  const newName = prompt("Enter new name:");
  name.textContent = newName;
  familyMembers[`${index}`].name = newName;
}
