
//          Copyright Martin Prätzlich & Janek Zeiff 2023 - 2023.
// Distributed under the Boost Software License, Version 1.0.
//    (See accompanying file LICENSE_1_0.txt or copy at
//          https://www.boost.org/LICENSE_1_0.txt)

const {
    calculate
} = require('./calculator')
const express = require('express')
const generateHtml = require('./html-generator')

const app = express()

app.use(express.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    const num1 = req.query.num1 || ''
    const num2 = req.query.num2 || ''
    const operation = req.query.operation || 'add'

    const responseMessage = generateHtml(num1, num2, operation)

    res.setHeader('Content-Type', 'text/html')
    res.send(responseMessage)
})

app.post('/', (req, res) => {
    const num1 = parseFloat(req.body.num1)
    const num2 = parseFloat(req.body.num2)
    const operation = req.body.operation

    try {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Invalid operation. Please insert numbers for num1 and num2.')
        }

        const result = calculate(num1, num2, operation)

        const responseMessage = generateHtml(num1, num2, operation)

        res.setHeader('Content-Type', 'text/html')
        res.send(`${responseMessage}<p>The result is ${result.toFixed(2)}.</p>`)
    } catch (error) {
        res
            .status(400)
            .json({
                error: error.message
            })
    }
})

app.listen(7071, () => {
    console.log('Server is running on port 7071')
})