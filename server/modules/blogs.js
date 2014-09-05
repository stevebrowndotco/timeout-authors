'use strict';

var mongoose = require('mongoose'),
  Blog = mongoose.model('BlogPost'),
  auth = require('../config/authConfig'),
  path = require('path'),//ap
  config = require('../config/config'),
  _=require('underscore'),
  printJson=require("./utils").printJson;



module.exports = function(app, passport) {

  var blogs={  
    /**
     * Find blog by id
     */
    blog : function(req, res, next, id) {
      Blog.load(id, function(err, blog) {
        if (err) return next(err);
        if (!blog) return next(new Error('Failed to load blog ' + id));
        req.blog = blog;
        next();
      });
    },

    /**
     * Create a blog
     */
    create : function(req, res) {
      var blog = new Blog(req.body);

      blog.creator = req.user;

      blog.save(function(err) {
        if (err) {
          res.json(500, err);
        } else {
          res.json(blog);
        }
      });
    },

    /**
     * Update a blog
     */
    update : function(req, res) {
      var blog = req.blog;
      blog.title = req.body.title;
      blog.content = req.body.content;
      blog.save(function(err) {
        if (err) {
          res.json(500, err);
        } else {
          res.json(blog);
        }
      });
    },

    /**
     * Delete a blog
     */
    destroy : function(req, res) {
      var blog = req.blog;

      blog.remove(function(err) {
        if (err) {
          res.json(500, err);
        } else {
          res.json(blog);
        }
      });
    },

    /**
     * Show a blog
     */
    show : function(req, res) {
      res.json(req.blog);
    },

    /**
     * List of Blogs
     */
    all : function(req, res) {

      Blog.find().sort('-created').populate('creator', 'username').exec(function(err, blogs) {
        if (err) {
          res.json(500, err);
        } else {
          res.json(blogs);
        }
      });
    },
    
    //ACCESS CONTROL
    accessAllowed : function (req, res, next) {
      printJson(req.user)
      var allowed=false; 
      if (req.blog.accessAllowed) {
        var accessTo= req.blog.accessAllowed
        if (accessTo.indexOf("public") > -1) {
          allowed=true;
        }
        if (accessTo.indexOf("restricted") > -1) {
          if (accessTo.restricted.indexOf(req.user.email) > -1) {
            allowed=true;          
          };
        }   
      }else{
        allowed=true;
      };
      if(allowed){
        next()
      }else{
        return res.send(403);
      }
    },
    editAllowed : function (req, res, next) {
      var roles= req.user.roles;
      var allowed=false;
      if (req.blog.creator._id.toString() === req.user._id.toString()) {
        console.log("creator= user: ");
        allowed=true;
      }
      if (roles.indexOf("administrator") > -1) {
         allowed=true;
          console.log("user: administrator");
      }
      if(allowed){
        next()
      }else{
        return res.send(403);
      }
    },
    createAllowed : function (req, res, next) {
      var roles= req.user.roles
      if (roles.indexOf("blogger") > -1) {
        next();
      };
      if (roles.indexOf("administrator") > -1) {
        next();
      }else{
        return res.send(403);
      }
    },
    deleteAllowed: function (req, res, next) {
      var roles= req.user.roles
      if (req.blog.creator._id.toString() === req.user._id.toString()) {
        next();
      }
      if (roles.indexOf("administrator") > -1) {
        next();
      }else{
        return res.send(403);
      }
    },

 
}

  app.get('/api/blogs',auth.ensureAuthenticated, blogs.all);
  app.get('/api/blogs/:blogId',auth.ensureAuthenticated, blogs.accessAllowed, blogs.show);
  app.post('/api/blogs', auth.ensureAuthenticated, blogs.createAllowed, blogs.create);
  app.put('/api/blogs/:blogId', auth.ensureAuthenticated, blogs.editAllowed, blogs.update);
  app.del('/api/blogs/:blogId', auth.ensureAuthenticated, blogs.deleteAllowed, blogs.destroy);


  //Setting up the blogId param
  app.param('blogId', blogs.blog);
}
