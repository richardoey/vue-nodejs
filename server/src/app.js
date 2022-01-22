const express = require('express')
const bodyParser = require("body-parser");

const port = process.env.PORT || 8088
const app = express()

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Route Middlewares
const apiRoute = require('../routers/index')

app.use('/api', apiRoute)

app.get('/personal', function(req, res, next){
    console.log("This is http://localhost:8088/personal");
    res.send({
        "path": "This is http://localhost:8088" + req.path
    })
    
})

app.post('/favourite', function(req, res, next){
    res.send({
        "path": "This is http://localhost:8088" + req.path,
        "name": req.body.name
    })
})

app.listen(port, function (err) {
    if (err) console.log("Error in server setup")
    console.log("Server listening on port", port);
})

