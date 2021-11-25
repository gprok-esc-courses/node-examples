var http = require('http')
const qs = require('querystring')

const { parse } = require('path/posix')

var server = http.createServer(function(req, res) {
    if(req.method == 'POST') {
        console.log("Post request received")

        req.on("data", function(d) {
            console.log(d.toString())
            form_items = qs.parse(d.toString())
            console.log(form_items.username)
        })
        req.on("end", function() {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write("<h1>Data received</h1>")
            res.end()
        })
    }
    else {
        if(req.url == '/') {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write("<h1>Home Page</h1>")
            res.end()
        }
        else if(req.url == '/about') {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write("<h1>About us</h1>")
            res.end()
        }
        else if(req.url == '/contact') {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write("<h1>Contact us</h1><form method='post' action='http://localhost:5001/signin'>" + 
            "<input type='text' name='username' /> " +
            "<input type='password' name='password' /> " + 
            "<input type='submit' /></form>")
            res.end()
        }
        else if(req.url == '/api/data') {
            let data = {'products': [{'product': 'keyboard', 'price:': 106.0}, 
            {'product': 'mouse', 'price:': 78.0}]}
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.write(JSON.stringify(data))
            res.end()
        }
        else {
            res.end('Page not found')
        }
    }
    
})

server.listen(5001)

console.log("Server started on port 5001")