// objasnuvanje za moduli

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

const products = [
    {
        id: 1,
        price: 100
    },
    {
        id: 2,
        price: 200
    }
]

// module.exports = {
//     students,
//     products
// }

module.exports.students = students
module.exports.products = products