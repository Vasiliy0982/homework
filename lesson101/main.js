function greetings(Name) {
    return 'Hello ' + Name
}

console.log(greetings('Alex'))

// ==================================================================================

const array = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

function sorts(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 10) {
            console.log(numbers[i])
        }
    } return console.log(numbers[i])
}

console.log(sorts(array))

// ==================================================================================

function calc(firstNumber, secondNumber, operator) {
    let result
    if (operator === 'plus') {
        result = firstNumber + secondNumber
    } else if (operator === 'minus') {
        result = firstNumber - secondNumber
    } else if (operator === 'multiplication') {
        result = firstNumber * secondNumber
    } else if (operator === 'division') {
        result = firstNumber / secondNumber
    }
    return result
}

console.log(calc(1, 2, 'plus'))
