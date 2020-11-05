const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../models/users.js')

router.get('/new', (req,res)=> {
    req.session.destroy()
    res.render('sessions/new.ejs', {
        currentUser: req.session.currentUser
    })
})

//log in/ add a new session
router.post('/', (req,res)=> {
    User.findOne({username: req.body.username}, (err, foundUser)=> {
        if (err) {
            console.log(err)
            res.send('sorry, there was a db error. Try again.')
        } else if (!foundUser) {
            res.send('<a href="/sessions/new">This user does not exist</a>')
        } else {
            if (bcrypt.compareSync(req.body.password, foundUser.password)) {
                req.session.currentUser = foundUser
                res.redirect('/')
            } else {
                res.send('<a href="/sessions/new">Password does not match </a>')
            }
        }
    })
})

//destroy session
router.delete('/', (req,res)=> {
    req.session.destroy(()=> {
        res.redirect('/')
    })
})

module.exports = router