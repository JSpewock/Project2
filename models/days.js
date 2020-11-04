const mongoose = require('mongoose')
const Schema = mongoose.Schema

const daySchema = Schema({
    name: {type: String, require: true},
    summary: String,
    description: String,
    lessonNotes: String,
    recording: String,
    week: {type: Number, require: true, $gte: 1, $lte: 12},
    day: {type: Number, require: true, $gte: 1, $lte: 5}

})

const Days = mongoose.model('Days', daySchema)
module.exports = Days