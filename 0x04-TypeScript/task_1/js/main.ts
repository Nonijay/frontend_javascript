interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    location: string;
    contract: boolean;
    yearsOfExperience: number;
}

const teacher3: Teacher = {
    firstName: 'Chinonso',
    lastName: 'Chukwu' ,
    fullTimeEmployee: true,
    yearsOfExperience: 3,
    location: 'Lagos',
    contract: true,
}

console.log(teacher3);

const directorS: object = {

    firstName: 'Chinonso',
    lastName: 'Chukwu',
    location: 'Lagos',
    fullTimeEmployee: true,
    yearsOfExperience: 5,
    contract: true,
    numberOfReports: 50,
}

console.log(directorS);

