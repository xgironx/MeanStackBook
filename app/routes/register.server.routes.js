var register = require('../../app/controllers/register.server.controller');
module.exports = function(app,passport) {
 app.route('/register')
 .post(function(req,res){
      passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/register', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
  })})
 .get(register.getPage);
};
