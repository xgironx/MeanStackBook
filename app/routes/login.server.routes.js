var login = require('../../app/controllers/login.server.controller');

module.exports = function(app,passport) {
 app.route('/login')
 .get(login.getPage);

};