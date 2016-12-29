var config          = require('./config');
var express         = require('express');
var passport        = require('passport');
var flash           = require('connect-flash');
var compress        = require('compression');
var cookieParser    = require('cookie-parser');
var session         = require('express-session');
var bodyParser      = require('body-parser');
var morgan          = require('morgan');
var methodOverride  = require('method-override');
var expressLayouts  = require('express-ejs-layouts');

module.exports = function(){
    var app = express();

    require('./passport')(passport);

    if(process.env.NODE_ENV === 'development')
    {
        app.use(morgan('dev'));
    }  
    else if(process.env.NODE_ENV === 'production')
    {
        app.use(compress());

    }
    app.use(cookieParser());

    app.use(bodyParser.urlencoded({
       extended:true 
    }));
    app.use(morgan('dev'));

    app.use(bodyParser.json());
    app.use(methodOverride());

    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: 'keyboard'
    }));

  

    app.use(passport.initialize());
    app.use(passport.session()); // persistent login sessions
    app.use(flash());

    app.set('views', './app/views');
    app.set('view engine','ejs');
    app.use(expressLayouts);


    
    require('../app/routes/index.server.routes.js')(app,passport);
    require('../app/routes/register.server.routes.js')(app,passport);
    require('../app/routes/login.server.routes.js')(app,passport);
    require('../app/routes/profile.server.routes.js')(app,passport);
    app.use(express.static('./public'));
    return app;
}
