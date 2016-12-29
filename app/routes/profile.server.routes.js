module.exports = function(app,passport){
    var profile = require('../controllers/profile.server.controller');
     app.route('/profile')
     .get(profile.isLoggedIn,profile.render);
}

