'use strict';
var path = require('path'),//ap
    auth = require('./config/authConfig'),
    config = require('./config/config');

var mongodb = require('mongodb');
var uri=config.db;
var _=require('underscore');
var printJson=require("./modules/utils").printJson;
module.exports = function(app, passport) {
  // User Routes
  var users = require('./modules/ApiMethodUsers');//ap
  app.post('/auth/users', users.create);//ap
  app.get('/auth/users/:userId', users.show);
  // Check if username is available
  // todo: probably should be a query on users
  app.get('/auth/check_username/:username', users.exists);
  app.put('/auth/users', users.update);

  // Session Routes
  // =====================================
  // LOGIN ===============================
  // =====================================
  var session = require('./modules/ApiMethodSession');
  app.get('/auth/session', auth.ensureAuthenticated, session.session);
  app.post('/auth/session', session.login);
  app.del('/auth/session', session.logout);
  
  //profile
  app.get('/api/profile',  users.show);
  
  // =====================================
  // FACEBOOK ROUTES =====================
  // =====================================
  // route for facebook authentication and login
  //app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));
  app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

  // handle the callback after facebook has authenticated the user
  app.get('/auth/facebook/callback',passport.authenticate('facebook',{ 
    successRedirect: '/profile',
    failureRedirect: '/login' 
  }));


  // Angular Routes


};



