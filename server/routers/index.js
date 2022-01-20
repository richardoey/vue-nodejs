const router = require('express').Router()

router.get('/favourite', function(req, res){
    res.send({
        "path": "This is http://localhost:8088/api" + req.path
    })
})


module.exports = router