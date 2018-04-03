//load the thisng we need

var mongoose = require ('mongoose');

//to define the sqchema for our user model in our db table
var calculatorSchema = mongoose.Schema({
    result: Number,
    date: String,
    user: String,
});

//to create the model and expose in to our app
module.export = mongoose.model('Calculator', calculatorSchema); 