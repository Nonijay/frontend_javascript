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

const tbody = document.createElement('tbody');
tbody.id = 'myTableBody';