const express = require('express')

const app = express() 

app.use((req, res, next) => {
    console.log(req.url)
    next()
})

app.get('/', (req, res) => {
    res.send("<h1>Hello World!</h1>")
})

app.get('/test', (req, res) => {
    res.send("<h1>This is a test</h1>")
})


app.listen(5002, () => console.log('Express started on port 5002'))