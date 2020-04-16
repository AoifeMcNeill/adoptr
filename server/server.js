let express = require('express'),
path = require('path'),
mongoose = require('mongoose'),
bodyParser = require('body-parser'),
cors = require('cors'),
dbConfig = require('./database/db');

mongoose.connect(dbConfig.db, {
    useNewUrlParser: true
}).then(() => {
        console.log('Database successfully connected')
    },
    error => {
        console.log('Database could not connect:' + error)
    }
)