/**
* Main application file
*/

'use strict';
const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorHandler = require('errorhandler');

const roomRoute = require('./routes')(app);
const router = require('./api/auths')

//Connect to database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:admin@cluster0-shard-00-00-hyur7.mongodb.net:27017,cluster0-shard-00-01-hyur7.mongodb.net:27017,cluster0-shard-00-02-hyur7.mongodb.net:27017/mern-chat?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority'
, {
  useNewUrlParser: true
}).then(() => {
  console.log('Database sucessfully connected!')
},
  error => {
    console.log('Could not connect to database : ' + error)
  }
)

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use('/api', router)
app.use('/rooms', roomRoute)
app.use(express.static(path.join(__dirname, '/dist/admin_crud_mern')));
app.use('/', express.static(path.join(__dirname, '/dist/admin_crud_mern')));
app.use('/api/v1/rooms', require('./api/rooms'));
app.use('/api/v1/events', require('./api/events'));
app.use('/api/v1/chats', require('./api/chats'));



// PORT
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// 404 Error
app.use((req, res, next) => {
    next(createError(404));
  });

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
// Expose app
exports = module.exports = app;