const Mongoose = require('mongoose');  
const Config = require('./config');

// mongoose.createConnection('mongodb://amiojabo:PROSENghosh28@ds147974.mlab.com:47974/amiojabo');
Mongoose.connect('mongodb://' + Config.mongo.username + ':' + Config.mongo.password + '@' + Config.mongo.url + '/' + Config.mongo.database);  
const db = Mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));  
db.once('open', function callback() {  
    console.log("Connection with database succeeded.");
});

module.exports.Mongoose = Mongoose;  
module.exports.db = db;