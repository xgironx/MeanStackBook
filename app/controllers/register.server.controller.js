var User = require('mongoose').model('User');

module.exports = {

  getPage: function(req,res){
      res.render('./pages/register',{ message: req.flash('signupMessage') });
  }
    
};