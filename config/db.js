const mongoose  = require('mongoose');

//Map global promises
mongoose.Promise = global.Promise;

//Mongoose Connect
mongoose
    .connect('mongodb://pusherpoll:pusherpoll@ds163806.mlab.com:63806/onlineollingsysytem')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));