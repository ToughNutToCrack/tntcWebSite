var fs = require('fs');
const path = require('path')

const filename = path.resolve(__dirname, 'metadata.json')

console.log("Incrementing build number...")

fs.readFile(filename, function(err, content) {

    if (err) throw err
    var metadata = JSON.parse(content)
    metadata.build = metadata.build + 1

    fs.writeFile(filename, JSON.stringify(metadata), function(err) {
        if (err) throw err
        console.log("Current build number: " + metadata.build)
    })
})