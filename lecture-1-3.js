// discussion on scope

let a = 5

function multiplyNumber() {
    var b = 10

    return a * 5;
}

// console.log(multiplyNumber(10))
console.log(multiplyNumber())
console.log(b)