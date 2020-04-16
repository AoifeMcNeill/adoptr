const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define collection and schema
let AdoptrSchema = new Schema({
    category: {
        type: String
    },
    breed: {
        type: String
    },
    colour: {
        type: String
    },
    coat: {
        type: String
    },
    size: {
        type: String
    },
    sex: {
        type: String
    },
    age: {
        type: String
    },
    cat_friendly: {
        type: Boolean
    },
    dog_friendly: {
        type: Boolean
    },
    child_friendly: {
        type: Boolean
    },
    adoptable: {
        type: Boolean
    }
})

module.exports = mongoose.model('List', AdoptrSchema)