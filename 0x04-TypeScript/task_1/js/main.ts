interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    location: string;
    contract: boolean;
    yearsOfExperience: number;
    numberOfReports: number;
}

const teacherOne: Teacher = {
    firstName: 'Chinonso',
    lastName: 'Chukwu' ,
    fullTimeEmployee: true,
    yearsOfExperience: 3,
    location: 'Lagos',
    contract: true,
    numberOfReports: 20,
};

const teacherTwo: Teacher = {

    firstName: 'Chinonso',
    lastName: 'Chukwu',
    location: 'Lagos',
    fullTimeEmployee: true,
    yearsOfExperience: 5,
    contract: true,
    numberOfReports: 50,
};

console.log(teacherOne);
printTeacher("Chinonso","Chukwu");
function printTeacher(firstName: string, lastName: string) {
    return `${firstName[0]}.${lastName}`;
}
// Create Contsructor that accepts firstName(string), lastName(string), method workOnHome, method displayName
class StudentClass {
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        workOnHome: () => {
            console.log(" is diligently working on their home improvements");
        }
        displayName: () => {
            console.log(`My name is ${this.firstName} ${this.lastName}`);
        }
    }
//The constructor of the class should be described through an Interface
//The class should be described through an Interface
    firstName: string;
    lastName: string;
    workOnHome: () => {
    console.log("Working on homework");
    }
    displayName: () => {
        console.log(`My name is ${this.firstName} ${this.lastName}`);
    }
}
