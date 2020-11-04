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

//new
router.get('/new', (req,res)=> {
    res.render('days/new.ejs', {
        action: '/days',
        nameValue: '',
        sumValue: '',
        descValue: '',
        lessonLink: '',
        recLink: '',
        weekValue: 0,
        dayValue: 0
    })
})

//show
router.get('/:id', (req,res)=> {
    Days.findById(req.params.id, (err, foundDay)=> {
        res.render('days/show.ejs', {
            day: foundDay
        })
    })
})

module.exports = router