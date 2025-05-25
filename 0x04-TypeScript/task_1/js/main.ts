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

