//load the things we need
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

//defien the schema for our user model
var userSchema = mongoose.Schema({
    email: {type: String, lowercase:true, trim: true}, 
    password: String, 
    name: {type: String, trim: true}, 
    emailConfirmationToken: String, 
    resetPasswordToken: String, 
    resetPasswordTokenExpires: Number,
    emailConfirmed: Boolean
});

//generate a hash so our db never stror the real password
//instead it gets converted to a hash table for security

userSchema.methods.generateHash = function (password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

//checking if password is valid
userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

//checking email confirmation

userSchema.methods.isEmailConfirmed = function (){
    return this.emailConfirmed;
};

//create the model and expose to our app
module.exports = mongoose.model('user', userSchema);


