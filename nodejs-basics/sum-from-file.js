import ms from "ms";
import fs from 'fs'

function sumFromFile(data) {
    return new Promise((resolve, reject) => {
        fs.readFile(data, 'utf8', (err, contents) => {
            if (err) return console.log('Cannot read file')
            const nums = contents.split("\n").map(Number)
            let sum = nums.reduce((acc, curr) => acc + curr, 0)
            resolve(sum)
        })
        console.log('after calling readFile')
    })
}

sumFromFile('data/nums.txt')
    .then(sum => console.log('Sum:', sum))
    .catch(err => console.log('Cannot sum:', err))