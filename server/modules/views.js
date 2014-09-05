'use strict';
var 

    mongoose = require('mongoose'),
    ViewModel = mongoose.model('ViewPost'),
    auth = require('../config/authConfig'),
    path = require('path'),
    config = require('../config/config'),
    mongodb = require('mongodb'),
    uri=config.db,

    _=require('underscore'),
    printJson=require("./utils").printJson;

module.exports = function(app, passport) {
  var admin=false;
  var views={
    
    view : function(req, res, next, id) {
console.log("view:",id);
      ViewModel.load(id, function(err, view) {

        if (err) {

          return next(err)};
        if (!view) return next(new Error('Failed to load view ' + id));
        req.view = view;
        next();
      }); 
    },

    create: function(req, res) {
      var view = new ViewModel(req.body);

      view.creator = req.user;

      view.save(function(err) {
        if (err) {
          res.json(500, err);
        } else {
          res.json(view);
        }
      });
    },

    destroy : function(req, res) {
      console.log("destroy: called");
      var view = req.view;
      view.remove(function(err) {
        if (err) {
          console.log("err: ");
          console.log(err);
          res.json(500, err);
        } else {
          return res.send(200);
        }
      });
    },

    destroyAll : function(req, res) {
      console.log("destroyAll: ");

      ViewModel.findByCreator(req.user).exec(function(err, views) {
        if (err) {
          console.log("err: ");
          console.log(err);
          res.json(500, err);
        } else {
          console.log("colls: ");
          console.log(views);
          for (var i in views){
            views[i].remove();
          }
           console.log('All views delete');
           return res.send(200);
        }
      })
    },

    showSelected : function(req, res) {
      console.log("req.view:",req.view);
      res.json(req.view);
    },

    showall : function(req, res) {
      console.log("admin: ");
      console.log(admin);
      if (admin) {
        ViewModel.find().sort('-created').populate('creator', 'username').exec(function(err, views) {
          if (err) {
            res.json(500, err);
          } else {
            res.json(views);
          }
        });
       }else{
        ViewModel.find().where('creator',req.user).sort('-created').populate('creator', 'username').exec(function(err, views) {
          if (err) {
            res.json(500, err);
          } else {
            res.json(views);
          }
        });
       };
      
    },
    update : function(req, res) {
      var view = req.view;
      console.log("req.body: ");
      console.log(req.body);
      view.docsPerPage=req.body.docsPerPage;
      view.collections=req.body.collections;
      view.celHeight=req.body.celHeight;
      view.headerHeight=req.body.headerHeight
    
      console.log("req.body.fieldsList: ");
      console.log(req.body.fieldsList);
      view.fieldsList=req.body.fieldsList;
      view.save(function(err) {
        if (err) {
          res.json(500, err);
        } else {
          console.log("updated: ");
          console.log("view: ");
          console.log(view);
          res.json(view);
        }
      });
    },

    accessAllowed : function (req, res, next) {
      var roles= req.user.roles;
      var allowed=true; 
      if (roles.indexOf("viewEditor") > -1) {
        allowed=true;
        admin=false;
      } 
      if (roles.indexOf("administrator") > -1) {
        allowed=true;
        admin=true;
      } 
      if(allowed){
        next()
      }else{
        return res.send(403);
      }
    },
    createAllowed:function(req, res, next) {
      var roles= req.user.roles
      if (roles.indexOf("viewEditor") > -1) {
        next();
      }
      if (roles.indexOf("administrator") > -1) {
        next();
      }else{
        return res.send(403);
      }
    },
    deleteAllowed: function (req, res, next) {
      var roles= req.user.roles
      if (req.view.creator._id.toString() === req.user._id.toString()) {
        next();
      }
      if (roles.indexOf("administrator") > -1) {
        next();
      }else{
        return res.send(403);
      }
    },
  };
  


  app.get('/api/views', auth.ensureAuthenticated, views.accessAllowed, views.showall);
  app.post('/api/views', auth.ensureAuthenticated, views.createAllowed, views.create);
  app.get('/api/views/:viewId',views.showSelected);// auth.ensureAuthenticated, views.accessAllowed
  app.put('/api/views/:viewId',auth.ensureAuthenticated,views.update);//views.editAllowed,
  app.del('/api/views/:viewId',auth.ensureAuthenticated, views.deleteAllowed, views.destroy)
  app.del('/api/views',auth.ensureAuthenticated, views.destroyAll)



  app.param('viewId', views.view);


  
}
