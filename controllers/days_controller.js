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
        weekValue: 1,
        dayValue: 1
    })
})

//create
router.post('/', (req,res)=> {
    Days.create(req.body, (err)=> {
        res.redirect('/days')
    })
})

//edit
router.get('/:id/edit', (req,res)=> {
    Days.findById(req.params.id, (err, foundDay)=> {
        res.render('days/edit.ejs', {
            action: `/days/${foundDay.id}/?_method=PUT`,
            nameValue: foundDay.name,
            sumValue: foundDay.summary,
            descValue: foundDay.description,
            lessonLink: foundDay.lessonNotes,
            recLink: foundDay.recording,
            weekValue: foundDay.week,
            dayValue: foundDay.day
        })
    })
})

//update

//show
router.get('/:id', (req,res)=> {
    Days.findById(req.params.id, (err, foundDay)=> {
        res.render('days/show.ejs', {
            day: foundDay
        })
    })
})

module.exports = router