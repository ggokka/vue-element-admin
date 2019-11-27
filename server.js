const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app = express()
console.log(`step#1`)
//here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '/dist')))
console.log(`step#2`)
// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
	res.sendFile(path.join(__dirname, '/dist/index.html'))
})
console.log(`step#3`)
const port = process.env.PORT || 8080
console.log(`step#4`)
app.listen(port)
console.log(`step#5`)
console.log(`app is listening on port: ${port}`)
console.log(`step#6`)