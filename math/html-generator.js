
//          Copyright Martin Prätzlich & Janek Zeiff 2023 - 2023.
// Distributed under the Boost Software License, Version 1.0.
//    (See accompanying file LICENSE_1_0.txt or copy at
//          https://www.boost.org/LICENSE_1_0.txt)

module.exports = {
    generateHtml: (num1, num2, operation) => {
        return `
          <html>
            <body>
              <h1>Simple Calculator</h1>
              <form method="post">
                <label for="num1">Number 1:</label>
                <input type="number" step="any" id="num1" name="num1" value="${num1}">
                <br>
                <label for="num2">Number 2:</label>
                <input type="number" step="any" id="num2" name="num2" value="${num2}">
                <br>
                <label for="operation">Operation:</label>
                <select name="operation">
                  <option value="add"${operation === 'add' ? ' selected' : ''}>Add</option>
                  <option value="subtract"${operation === 'subtract' ? ' selected' : ''}>Subtract</option>
                  <option value="multiply"${operation === 'multiply' ? ' selected' : ''}>Multiply</option>
                  <option value="divide"${operation === 'divide' ? ' selected' : ''}>Divide</option>
                  <option value="sin"${operation === 'sin' ? ' selected' : ''}>Sine</option>
                  <option value="cos"${operation === 'cos' ? ' selected' : ''}>Cosine</option>
                  <option value="tan"${operation === 'tan' ? ' selected' : ''}>Tangent</option>
                </select>
                <br>
                <button type="submit">Calculate</button>
              </form>
            </body>
          </html>
        `
    }
}