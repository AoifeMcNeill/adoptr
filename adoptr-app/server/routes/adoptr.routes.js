const express = require('express');
const app = express();
const adoptrRoute = express.Router();

//List model
let List = require('../models/adoptr');

//Get all pets
adoptrRoute.route('/').get((req, res, next) => {
    List.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//Get one pet by id
adoptrRoute.route('/read/:id').get((req, res, next) => {
    List.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//Get pets by category
adoptrRoute.route('/category/:category').get((req, res, next) => {
    List.find({category: req.params.category}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//Get pets by breed
adoptrRoute.route('/breed/:breed').get((req, res, next) => {
    List.find({breed: req.params.breed}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//Get pets by colour
adoptrRoute.route('/colour/:colour').get((req, res, next) => {
    List.find({colour: req.params.colour}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//Get pets by coat
adoptrRoute.route('/coat/:coat').get((req, res, next) => {
    List.find({coat: req.params.coat}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//Get pets by size
adoptrRoute.route('/size/:size').get((req, res, next) => {
    List.find({size: req.params.size}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//Get pets by sex
adoptrRoute.route('/sex/:sex').get((req, res, next) => {
    List.find({sex: req.params.sex}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//Get pets by age
adoptrRoute.route('/age/:age').get((req, res, next) => {
    List.find({age: req.params.age}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//Get pets by cat_friendly
adoptrRoute.route('/cat_friendly/:cat_friendly').get((req, res, next) => {
    List.find({cat_friendly: req.params.cat_friendly}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//Get pets by dog_friendly
adoptrRoute.route('/dog_friendly/:dog_friendly').get((req, res, next) => {
    List.find({dog_friendly: req.params.dog_friendly}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//Get pets by child_friendly
adoptrRoute.route('/child_friendly/:child_friendly').get((req, res, next) => {
    List.find({child_friendly: req.params.child_friendly}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//Get pets by adoptable
adoptrRoute.route('/adoptable/:adoptable').get((req, res, next) => {
    List.find({adoptable: req.params.adoptable}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//Update List
adoptrRoute.route('/update/:id').put((req, res, next) => {
    List.findByIdAndUpdate(req.params.id, {
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