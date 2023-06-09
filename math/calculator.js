
//          Copyright Martin Prätzlich & Janek Zeiff 2023 - 2023.
// Distributed under the Boost Software License, Version 1.0.
//    (See accompanying file LICENSE_1_0.txt or copy at
//          https://www.boost.org/LICENSE_1_0.txt)

module.exports = {
    calculate: (num1, num2, operation) => {
        switch (operation) {
            case 'add':
                return module.exports.add(num1, num2)
            case 'subtract':
                return module.exports.subtract(num1, num2)
            case 'multiply':
                return module.exports.multiply(num1, num2)
            case 'divide':
                return module.exports.divide(num1, num2)
            case 'sin':
                return module.exports.sin(num1 || num2)
            case 'cos':
                return module.exports.cos(num1 || num2)
            case 'tan':
                return module.exports.tan(num1 || num2)
            default:
                throw new Error('Invalid operation. Please use add, subtract, multiply, divide, sin, cos, or tan.')
        }
    },
    add: (num1, num2) => {
        return num1 + num2
    },
    subtract: (num1, num2) => {
        return num1 - num2
    },
    multiply: (num1, num2) => {
        return num1 * num2
    },
    divide: (num1, num2) => {
        if (num2 === 0) {
            throw new Error('Cannot divide by zero.')
        }
        return num1 / num2
    },
    sin: (num) => {
        return Math.sin(num)
    },
    cos: (num) => {
        return Math.cos(num)
    },
    tan: (num) => {
        return Math.tan(num)
    }
}