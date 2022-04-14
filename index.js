// Declare fs module to interact with File System.
// Info bout fs moduel https://nodejs.org/api/fs.html
const fs = require('fs')

// Read date in the file test
fs.readFile('./test.xml', 'utf8' , (err, data) => {
  // Check for error
  if (err) {
    console.error(err)
    return
  }
  // Here just some timestamp... but not complete yet
  var d = new Date(1649904524 * 1000).toLocaleDateString("en-US")
var s = new Date(1649904524* 1000).toLocaleTimeString("en-US")

console.log(d,s)
  // If all okay, print local file test.txt with regex removing tags
  console.log(data.replace(/<[^>]*>?/gm, ''))
})
