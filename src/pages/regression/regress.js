const regressions = require('regression')
const { regression } = require('multiregress')
const data = [
    [10, 5],
    [15, 9],
    [20, 15],
    [30, 18],
    [40, 22],
    [50, 30],
    [60, 35],
    [70, 38],
    [80, 43],
]
const linear = regressions.linear(data)
const poly = regressions.polynomial(data, { order: 2 })
const multi = regression([
    [1, 0, 1, 4],
    [0, 1, 3, -5],
    [2, 4, 1, -6],
    [3, 2, 2, 0],
    [4, 1, 5, -1],
    [2, 3, 3, -7],
    [1, 6, 4, -20],
])
console.log('Linear : ', linear, '\n')
console.log('Linear : ', linear.predict(65), '\n')
console.log('Polynomial : ', poly, '\n')
console.log('Multiple : ', multi, '\n')
