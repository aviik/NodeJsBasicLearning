console.log("starting app")

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

let plat = os.platform();
fs.appendFileSync('message.txt', 'data to append in '+ plat + '!');

console.log("message file created successfully");
