'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema

var RoleSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  roleId:{
    type: Number,
    unique: true
  }
  
},
{ collection : '_roles' });

/**
 * Virtuals
 */


/**
 * Validations
 */

var validatePresenceOf = function (value) {
  return value && value.length;
};

RoleSchema.path('name').validate(function (name) {
  var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailRegex.test(email);
}, 'The specified email is invalid.');

UserSchema.path('email').validate(function(value, respond) {
  mongoose.models["User"].findOne({email: value}, function(err, user) {
    if(err) throw err;
    if(user) return respond(false);
    respond(true);
  });
}, 'The specified email address is already in use.');

UserSchema.path('username').validate(function(value, respond) {
  mongoose.models["User"].findOne({username: value}, function(err, user) {
    if(err) throw err;
    if(user) return respond(false);
    respond(true);
  });
}, 'The specified username is already in use.');

/**
 * Pre-save hook
 */

UserSchema.pre('save', function(next) {
  if (!this.isNew) {
    return next();
  }

/*  if (!validatePresenceOf(this.password)) {
    next(new Error('Invalid password'));
  }*/
  else {
    next();
  }
});

/**
 * Methods
 */

UserSchema.methods = {

  /**
   * Authenticate - check if the passwords are the same
   */

  authenticate: function(plainText) {//validPassword
    return this.encryptPassword(plainText) === this.hashedPassword;
  },

  /**
   * Make salt
   */

  makeSalt: function() {
    return crypto.randomBytes(16).toString('base64');
  },

  /**
   * Encrypt password
   */

  encryptPassword: function(password) {//generateHash
    if (!password || !this.salt) return '';
    var salt = new Buffer(this.salt, 'base64');
    return crypto.pbkdf2Sync(password, salt, 10000, 64).toString('base64');
  }
};

mongoose.model('User', UserSchema);
