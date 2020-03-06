const students = [
    {
        name: 'Boban',
        lastname: 'S',
        role: 'Lecturer'
    },
    {
        name: 'A',
        lastname: 'B',
        role: 'Student'  
    },
    {
        name: 'C',
        lastname: 'D',
        role: 'Student'
    }
]

function printData(students) {
    for(let i = 0; i < students.length; i++) {
        if (students[i].lastname == 'B') {
            throw new Error('Najdovme covek so prezime B')
        }

        console.log('Covekot se vika ' + students[i].name + ", i ima uloga na " + students[i].role)
    }
}

try {
    printData(students)
} catch (error) {
    console.log('Se sluci slednata greska: ' + error.message)
} finally {
    console.log('Tuka zavrsi programata')
}