let obj = require('./lecture-2-4')
let students = require('./students')
let data = require('./database')

obj.printStudentNaDrugataStrana()

console.log(obj.name)

for(let i = 0; i < students.length; i++) {
    console.log(students[i].name + " " + students[i].role)
}
students = data.students

for(let i = 0; i < students.length; i++) {
    console.log(students[i].name + " " + students[i].role)
}

