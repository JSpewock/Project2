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
    //Check if a user is signed in
    if (req.session.currentUser) {
        //check if that user is the admin login
        if (req.session.currentUser.username === 'userAdmin0956') {
            Days.create(req.body, (err)=> {
                res.redirect('/days')
            })
        } else { //If it's not the admin, redirect
            res.redirect('/')
        }
    } else { //if there is no one signed in, redirect
        res.redirect('/')
    }
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
    //Check if a user is signed in
    if (req.session.currentUser) {
        //check if that user is the admin login
        if (req.session.currentUser.username === 'userAdmin0956') {
            Days.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err)=> {
                res.redirect('/days/' + req.params.id)
            })
        } else { //If it's not the admin, redirect
            res.redirect('/')
        }
    } else { //if there is no one signed in, redirect
        res.redirect('/')
    }
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