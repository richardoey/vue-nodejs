const express = require('express')

const port = process.env.PORT || 8088
const app = express()
const appTwo = express()

// Route Middlewares
const apiRoute = require('../routers/index')

app.use('/api', apiRoute)

app.get('/personal', function(req, res, next){
    console.log("This is http://localhost:8088/personal");
    res.send({
        "path": "This is http://localhost:8088" + req.path
    })
    
})

app.get('/favourite', function(req, res, next){
    console.log("This is http://localhost:8088/favourite");
    res.send({
        "path": "This is http://localhost:8088" + req.path
    })
})

app.listen(port, function (err) {
    if (err) console.log("Error in server setup")
    console.log("Server listening on port", port);
})

