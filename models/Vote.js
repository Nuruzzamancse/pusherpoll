const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VoteSchema = mongoose.Schema({
    os:{
        type: String,
        required: true
    },
    points: {
        type: String,
        required:true
    }
});

//Create collection and Schema
const Vote = mongoose.model('Vote', VoteSchema);

module.exports = Vote;