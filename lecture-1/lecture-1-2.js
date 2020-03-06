x = 6
y = 10

// default parameter values
function calculateResult(x = 10, y = 4) {
    return (y**2 - y + 3) / (x**2 - x + 343) - (y**3 - y + 55) / (x**3 - x**2 + 32)
}

let functionVariable = function calculateResult(x = 10, y = 4) {
    return (y**2 - y + 3) / (x**2 - x + 343) - (y**3 - y + 55) / (x**3 - x**2 + 32)
}

// arrow function
let arrowFunctionVariable = (x = 10, y = 4) => {
    return (y**2 - y + 3) / (x**2 - x + 343) - (y**3 - y + 55) / (x**3 - x**2 + 32)
}

let result = calculateResult(x, y)

x = 9
y = 11
result = calculateResult()

x = 9
y = 11
result = calculateResult()
x = 9
y = 11
result = calculateResult(x, y)

x = 9
y = 11
result = calculateResult(x, y)
x = 9
y = 11
result = calculateResult(x, y)
x = 9
y = 11
result = calculateResult(x, y)
x = 9
y = 11
result = calculateResult(x, y)
x = 9
y = 11
result = calculateResult(x, y)

