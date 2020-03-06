ourConsole = {
    log: (text) => {
        console.log(text)
    }
}

// console.log('Ova e cool')

// ourConsole.log('Ova kade se pecati2334')

// console.log(__filename)
// console.log(__dirname)

// function printMyName(name) {
//     console.log(name)
// }

// printMyName('Boban')

data = {
    name: 'Boban',
    lastname: 'Sugareski'
}

function printData(data, func) {
    console.log(data.name)
    func()
}

let myFunc = () => { console.log(data.lastname) }
printData(data, myFunc)

// CLOSURES
function outerFunction(outerVariable) {
    return function(innerVariable) {
        console.log(outerVariable)
        console.log(innerVariable)
    }
}

const newFunction = outerFunction('outerVariable')
newFunction('innerVariable')

// PROMISES
// doSomething()
//     .then(function(result) { 
//         console.log('Rezultatot e dobar')
//     })
//     .catch(function(error) {
//         console.log('Se sluci greska')
//     })
