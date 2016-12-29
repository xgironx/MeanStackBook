var config = require('./config');
var mongoose = require('mongoose');
var connectionString = "mongodb://localhost:27017/ShareIdea"

module.exports = function(){
    mongoose.Promise = global.Promise;
    var db = mongoose.connect(connectionString);

    require('../app/models/user.server.model');

    return db;
};