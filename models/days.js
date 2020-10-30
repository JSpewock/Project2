const mongoose = require('mongoose')
const Schema = mongoose.Schema

const daySchema = Schema({
    day: {type: String, require: true},
    summary: String,
    description: String,
    lessonNotes: String,
    recording: String
})

const Days = mongoose.model('Days', daySchema)
module.exports = Days