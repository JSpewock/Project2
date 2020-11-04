const express = require('express')
const Days = require('../models/days.js')
const router = express.Router()

//ROUTES
//index
router.get('/', (req, res)=> {
    Days.find({}, (err, foundDays)=> {
        if (err) {
            console.log('error=',err)
        } else{
            res.render('days/index.ejs', {
                allDays: foundDays
            })
        }
    })
})

module.exports = router