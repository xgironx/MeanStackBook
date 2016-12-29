module.exports = {
    render: function(req,res){
        res.render('profile.ejs', {
            user: req.user // get the user out of session and pass to template
        });
    },
    isLoggedIn: function (req, res, next) {

        // if user is authenticated in the session, carry on 
        if (req.isAuthenticated())
            return next();

        // if they aren't redirect them to the home page
        res.redirect('/');
    }  
};