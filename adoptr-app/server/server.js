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

//Setting up port with express js
const adoptrRoute = require('./routes/adoptr.routes')
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


app.use(cors());
app.use(express.static(path.join(__dirname, 'dist/adoptr-app')));
app.use('/', express.static(path.join(__dirname, 'dist/adoptr-app')));
app.use('/api', adoptrRoute)

//Create port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Connected to port' + port)
})

//Find 404 and hand over to error handler
app.use((req, res, next) => {
    next(createError(404));
});

//error handler
app.use(function (err, req, res, next) {
    console.error(err.message); //Log error message in our server's console
    if (!err.statusCode) err.statusCode = 500; //If err has no specified error code, set error code to 'Internal Server Error (500)'
    res.status(err.statusCode).send(err.message); //All HTTP requests must have a response, sends back error status code and message
});