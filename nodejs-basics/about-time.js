import ms from "ms";
import fs from 'fs'


function demoAsync() {
    fs.readFile('data/nums.txt', 'utf8', (err, contents) => {
        if (err) return console.log('Cannot read file')
        console.log(ms(contents, { long: true }))
        var nums = contents.split("\n")
        nums.forEach(num => {
            num = +num
            console.log(ms(num, { long: true }));
        })
    })
    console.log('after calling readFile')
}
demoAsync()