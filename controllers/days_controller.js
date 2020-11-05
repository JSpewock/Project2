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
                currentUser: req.session.currentUser,
                allDays: foundDays
            })
        }
    })
})

//new
router.get('/new', (req,res)=> {
    res.render('days/new.ejs', {
        currentUser: req.session.currentUser,
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
            currentUser: req.session.currentUser,
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
router.put('/:id', (req,res)=> {
    Days.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err)=> {
        res.redirect('/days/' + req.params.id)
    })
})

//show
router.get('/:id', (req,res)=> {
    Days.findById(req.params.id, (err, foundDay)=> {
        res.render('days/show.ejs', {
            currentUser: req.session.currentUser,
            day: foundDay
        })
    })
})

//delete
router.delete('/:id', (req,res)=> {
    Days.findByIdAndRemove(req.params.id, (err)=>{
        res.redirect('/days')
    })
})



module.exports = router