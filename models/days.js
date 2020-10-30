const mongoose = require('mongoose')
const Schema = mongoose.Schema

const daySchema = Schema({
    day: {type: String, require: true},
    summary: String,
    description: String,
    morningRec: String,
    afternoonRec: String,
})

const Day = mongoose.model('Day', daySchema)
module.exports = Day