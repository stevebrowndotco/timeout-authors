'use strict';
var config   = require('./config.js');
/**
 *  Route middleware to ensure user is authenticated.
 */
exports.ensureAuthenticated = function (req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.send(401);
}

/**
 * Blog authorizations routing middleware
 */
//



// expose our config directly to our application using module.exports
exports.credentials = {

	'facebookAuth' : {
		'clientID' 		: '683796004976274', // your App ID
		'clientSecret' 	: '797e5b3bd5dabfe9e6a90376f0cce331', // your App Secret
		'callbackURL' 	: 'http://pacific-springs-7187.herokuapp.com/auth/facebook/callback'
	},

	'twitterAuth' : {
		'consumerKey' 		: 'your-consumer-key-here',
		'consumerSecret' 	: 'your-client-secret-here',
		'callbackURL' 		: 'http://pacific-springs-7187.herokuapp.com/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID' 		: 'your-secret-clientID-here',
		'clientSecret' 	: 'your-client-secret-here',
		'callbackURL' 	: 'http://pacific-springs-7187.herokuapp.com/auth/google/callback'
	}

};