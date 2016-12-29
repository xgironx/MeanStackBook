var User = require('mongoose').model('User');

module.exports = {
  getPage: function(req,res){
      res.render('./pages/login',{ message: req.flash('loginMessage') });
  }
    
};