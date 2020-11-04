const express = require('express')
const Days = require('../models/days.js')
const days = express.Router()

//ROUTES
//index
days.get('/', (req, res)=> {
    Days.find({}, (err, foundDays)=> {
        if (err) {
            console.log(err)
        } else{
            res.render('days/index.ejs', {
                allDays: foundDays
            })
        }
    })
})