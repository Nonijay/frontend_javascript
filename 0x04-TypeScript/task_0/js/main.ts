interface student { 
        firstName: string;
        lastName: string;
        age: number;
        location: string;
    }

//create a variable named firstStudent with the type student
//create a variable named secondStudent with the type student
const firstStudent: student = {
    firstName: "Jeff",
    lastName: "Chukwu",
    age: 28,
    location: "Lagos",
} ;
const secondStudent: student = {
    firstName: "Chiedozie",
    lastName: "Chukwu",
    age: 30,
    location: "Lagos",
};

//Create two students, and create an array named studentsList containing the two variables

const studentsList: student[] =[firstStudent, secondStudent];
//using vanilla JS render a table for each elemnts in the array, append a new row to the table.

const table = document.createElement('table');
table.id = 'studentTable';
const headerRow =document.createElement('tr');


//create table header (thead) and give it an id
const thead = document.createElement('thead');
thead.id = 'myTableHead';

//create a table row for the header element using the array studentList
const headerItem = document.createElement('th');
headerItem.textContent = " First Name"
const headerLocation = document.createElement('th');
headerLocation.textContent = "Location";
// const headers = Object.keys(studentsList[0]);

headerRow.appendChild(headerItem)
headerRow.appendChild(headerLocation)
table.appendChild(table)

//create table body (tbody)
const tbody = document.createElement('tbody');
tbody.id = 'myTableBody';


studentsList.forEach((student) => {
    const row = document.createElement('tr');
    const firstDataCell = document.createElement('td');
    firstDataCell.textContent = student.firstName;

    const locationDataCell = document.createElement('td');
    locationDataCell.textContent = student.location;

    row.appendChild(firstDataCell);
    row.appendChild(locationDataCell);

    table.appendChild(row);
});