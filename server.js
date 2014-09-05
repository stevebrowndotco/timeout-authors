// server.js

// set up ======================================================================
// get all the tools we need
var express  = require('express');
var http 	 = require('http');

var _=require('underscore');
var mongoose = require('mongoose');
var passport = require('passport');
var path     = require('path');

var mongoStore = require('connect-mongo')(express);
var config   = require('./server/config/config.js');

var db = require('./server/config/mongoConfig').db;//ep ok
var printJson=require("./server/modules/utils").printJson;

var api = require('./server/modules/apiAws'),
    aws = require('./server/modules/aws');

// Initialize AWS
var AWS = require('aws-sdk');
AWS.config.loadFromPath('./server/config/aws.json');


var app      = express();


// configuration ===============================================================
//
// Bootstrap models
require('./server/models/blogpost')
require('./server/models/user')
require('./server/models/viewModel')
require('./server/models/collModel')
require('./server/models/docModel')

var pass=require('./server/config/passport')(passport); // pass passport for configuration





//


// Express settings


app.configure(function() {
	if (config.port==9000) {
		app.use(require('connect-livereload')());
	};
	
	

	

	app.use(express.favicon(path.join(__dirname, 'app', 'favicon.ico')));//ap
	app.use(express.static( 'app'));//ap
	app.set('views', __dirname + '/app/views');//ap
});

// set up our express application
app.use(express.cookieParser()); // read cookies (needed for auth)
app.use(express.bodyParser()); // get information from html forms
app.use(express.methodOverride());//ap then you can use app.delete and app.put in Express instead of using app.post all the time


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.logger('dev')); // log every request to the console

// express/mongo session storage
app.use(express.session({
  secret: 'fbsaja5567s1268EQh2eq2RH43ASqJewwD65JgkdFG',
  store: new mongoStore({
    url: config.db,
    collection: '_sessions',
    auto_reconnect: true
  })
}));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

require('./server/routes.js')(app,passport);
require('./server/modules/views.js')(app,passport)
require('./server/modules/blogs.js')(app,passport)
require('./server/modules/colls.js')(app,passport)
require('./server/modules/docs.js')(app,passport)





// Server API AWS Routes
app.get('/api/config', api.getClientConfig);
app.get('/api/s3Policy', aws.getS3Policy);


app.get('/api/images',function(req, res) {
	var gallery=[
	{
		"image": "https://uxentrik.s3.amazonaws.com/s3UploadExample%2F6388%24reflectEnergyBtn.png",
		"thumb": "https://uxentrik.s3.amazonaws.com/s3UploadExample%2F6388%24reflectEnergyBtn.png",
		"folder": "color"
	},
	{
		"image": "https://uxentrik.s3.amazonaws.com/s3UploadExample%2F6388%24reflectEnergyBtn.png",
		"thumb": "https://uxentrik.s3.amazonaws.com/s3UploadExample%2F6388%24reflectEnergyBtn.png",
		"folder": "grayscale"
	}
]
res.json(gallery);

});


app.get('/partials/*', function(req, res) {
    var requestedView = path.join('./', req.url);
    res.render(requestedView);
  });
//



//this should be the last route
app.get('/*', function(req, res) {
	if(req.user) {
	  res.cookie('user', JSON.stringify(req.user.user_info));
	}
	res.render('index.html');
});





// launch ======================================================================
app.listen(config.port , function () {
	console.log('Express server listening on port ' +config.port);
//
});



