module.exports = function(app,passport){
    var index = require('../controllers/index.server.controller');
    app.get('/',index.render);
}