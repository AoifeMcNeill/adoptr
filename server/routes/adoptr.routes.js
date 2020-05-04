const express = require('express');
const app = express();
const adoptrRoute = express.Router();

//List model
let pets_table = require('../models/adoptr');

//Get all pets
adoptrRoute.route('/').get((req, res) => {
    pets_table.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//Get pets based on query match
adoptrRoute.route('/find').get((req, res) => {

    let limit = {}

    if(req.query.name){
        limit.name = req.query.name
    }

    if(req.query.category){
        limit.category = req.query.category
    }
    
    if(req.query.breed){
        limit.breed = req.query.breed
    }

    if(req.query.colour){
        limit.colour = req.query.colour
    }

    if(req.query.coat){
        limit.coat = req.query.coat
    }

    if(req.query.size){
        limit.size = req.query.size
    }

    if(req.query.sex){
        limit.sex = req.query.sex
    }

    if(req.query.age){
        limit.age = req.query.age
    }

    if(req.query.cat_friendly){
        limit.cat_friendly = req.query.cat_friendly
    }

    if(req.query.dog_friendly){
        limit.dog_friendly = req.query.dog_friendly
    }

    if(req.query.child_friendly){
        limit.child_friendly = req.query.child_friendly
    }

    if(req.query.adoptable){
        limit.adoptable = req.query.adoptable
    }

    pets_table.find(limit, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//Get one pet by id
adoptrRoute.route('/read/:id').get((req, res) => {
    pets_table.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//Gets pet by name
adoptrRoute.route('/name/:name').get((req, res) => {
    pets_table.find({name: req.params.name}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//Get pets by category
adoptrRoute.route('/category/:category').get((req, res) => {
    pets_table.find({category: req.params.category}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//Get pets by breed
adoptrRoute.route('/breed/:breed').get((req, res) => {
    pets_table.find({breed: req.params.breed}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//Get pets by colour
adoptrRoute.route('/colour/:colour').get((req, res) => {
    pets_table.find({colour: req.params.colour}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//Get pets by coat
adoptrRoute.route('/coat/:coat').get((req, res) => {
    pets_table.find({coat: req.params.coat}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//Get pets by size
adoptrRoute.route('/size/:size').get((req, res) => {
    pets_table.find({size: req.params.size}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//Get pets by sex
adoptrRoute.route('/sex/:sex').get((req, res) => {
    pets_table.find({sex: req.params.sex}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//Get pets by age
adoptrRoute.route('/age/:age').get((req, res) => {
    pets_table.find({age: req.params.age}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//Get pets by cat_friendly
adoptrRoute.route('/cat_friendly/:cat_friendly').get((req, res) => {
    pets_table.find({cat_friendly: req.params.cat_friendly}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//Get pets by dog_friendly
adoptrRoute.route('/dog_friendly/:dog_friendly').get((req, res) => {
    pets_table.find({dog_friendly: req.params.dog_friendly}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//Get pets by child_friendly
adoptrRoute.route('/child_friendly/:child_friendly').get((req, res) => {
    pets_table.find({child_friendly: req.params.child_friendly}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//Get pets by adoptable
adoptrRoute.route('/adoptable/:adoptable').get((req, res) => {
    pets_table.find({adoptable: req.params.adoptable}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//Update List
adoptrRoute.route('/update/:id').put((req, res) => {
    pets_table.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('Data updated successfully')
        }
    })
})

module.exports = adoptrRoute;