const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../models/users.js')

//new user
router.get('/new', (req,res)=> {
    res.render('users/new.ejs', {
        currentUser: req.session.currentUser
    })
})
router.post('/', (req,res)=> {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    User.create(req.body, (err, createdUser) =>{
        console.log('new user created', createdUser)
        req.session.currentUser = createdUser
        res.redirect('/')
    })
})

module.exports = router