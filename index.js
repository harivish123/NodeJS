const fs = require('fs')

console.log("Hello world")

const readTxt = fs.readFileSync(`C:/Users/Dell/Documents/NodeJS3/index.txt`, 'utf-8')
console.log(readTxt)

const writeTxt = `${readTxt}.\nCreated on ${Date.now()}`
fs.writeFileSync(`C:/Users/Dell/Documents/NodeJS3/index.txt`,writeTxt)
