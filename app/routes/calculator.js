module.exports = function (app, isLoggedIn) {
    var Calculator = require('../models/calculator');

    app.post('/calculator', isLoggedIn, function (req, res) {
        var newCalculator = new Calculator();
        
        newCalculator.result = req.body.result;
        newCalculator.date = new Date();
        newCalculator.user = req.user._id;
        
        newCalculator.save();
    });
};