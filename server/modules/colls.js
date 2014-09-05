'use strict';
var mongoose = require('mongoose'),
    CollSchema=require("../models/collModel").CollSchema,
    CollModel = mongoose.model('CollModel',CollSchema),
    auth = require('../config/authConfig'),
    path = require('path'),

    config = require('../config/config'),
    mongodb = require('mongodb'),
    uri=config.db,

    _=require('underscore'),
    printJson=require("./utils").printJson;

module.exports = function(app, passport) {
  var colls={
    coll : function(req, res, next, id) {

          CollModel.load(id, function(err, coll) {
            if (err) return next(err);
            if (!coll) return next(new Error('Failed to load coll ' + id));
            req.coll = coll;
            next();
          });
 
     
     
    },
    create: function(req, res) {
      var coll = new CollModel(req.body);
      coll.creator = req.user;

      coll.save(function(err) {
        if (err) {
          res.json(500, err);
        } else {

          // TODO create collection the Id as name!

          res.json(coll);
        }
      });
    },

    update : function(req, res) {

      var coll = req.coll;
      coll.fields=req.body.fields

      coll.save(function(err) {
        if (err) {
          res.json(500, err);
        } else {
          res.json(coll);
        }
      });
    },
    showSelected : function(req, res) {
    
          res.json(req.coll);
        
      
    },

    showall : function(req, res) {
      
          /* printJson(req.user._id)*/
          CollModel.find().where('creator',req.user).sort('-created').populate('creator', 'username').exec(function(err, colls) {
         
            if (err) {
              res.json(500, err);
            } else {
              printJson(colls)
              res.json(colls);
            }
          });
       
    },
    destroy : function(req, res) {
      console.log("destroy: ");

      var coll = req.coll;
      console.log("coll: ");
      console.log(coll);
      console.log("coll._id: ");
      console.log(coll._id);

    
      coll.remove(function(err) {
        if (err) {
          res.json(500, err);
        } else {
          res.json(coll);
        }
      });
    



      mongoose.connection.collections[coll._id].drop( function(err) {
        if (err) {
            console.log("err: ");
            console.log(err);
            res.json(500, err);
          } else {
             console.log('collection dropped');
             return res.send(200);
          }
      });
      
    },
    destroyAll : function(req, res) {
      console.log("destroyAll: ");

      CollModel.findByCreator(req.user).exec(function(err, colls) {
        if (err) {
          console.log("err: ");
          console.log(err);
          res.json(500, err);
        } else {
          console.log("colls: ");
          console.log(colls);
          if (colls) {
            for (var i in colls){
              colls[i].remove();
              try{
                mongoose.connection.collections[colls[i]._id].drop( function(err) {
                  if (err) {
                      console.log("err: ");
                      console.log(err);
                     
                    } else {
                       console.log('collection dropped');
                     
                    }
                });
              }catch(err) {
              console.log("err: ");
              console.log(err);
              }

            }
            console.log('All collections delete');
            res.send(200);
          }else{
            res.send(200);
          }
         
        }//
      })
      
    },
    accessAllowedByRole : function (req, res, next) {
      var roles= req.user.roles;
      var allowed=true; 
      /* if (req.view.creator._id.toString() === req.user._id.toString()) {
        allowed=true;
      }*/
      if (roles.indexOf("administrator") > -1) {
        allowed=true;
      } 
      if(allowed){
        next()
      }else{
        return res.send(403);
      }
    },

    editAllowed : function (req, res, next) {
      var roles= req.user.roles;
      var allowed=false;
      if (req.coll.creator._id.toString() === req.user._id.toString()) {
        allowed=true;
      }
      if (roles.indexOf("administrator") > -1) {
         allowed=true;
      }
      if(allowed){
        next()
      }else{
        return res.send(403);
      }
    },

    deleteAllowed: function (req, res, next) {
      console.log("deleteAllowed: ");
      console.log("req.user: ");
      console.log(req.user);
      var roles= req.user.roles
      if (req.coll.creator._id.toString() === req.user._id.toString()) {
        next();
      }
      if (roles.indexOf("administrator") > -1) {
        console.log("role: administrator true" );
     
        next();
      }else{
        return res.send(403);
      }
    },
  };

  app.get('/api/colls', auth.ensureAuthenticated, colls.showall);
  /*app.post('/api/colls',auth.ensureAuthenticated, colls.create);*/
  app.post('/api/colls',auth.ensureAuthenticated, colls.create);
  app.get('/api/colls/:collId', colls.showSelected)
  app.del('/api/colls/:collId',auth.ensureAuthenticated,colls.deleteAllowed, colls.destroy)
  app.put('/api/colls/:collId', auth.ensureAuthenticated, colls.editAllowed, colls.update);
  app.del('/api/colls',auth.ensureAuthenticated, /*colls.deleteAllowed,*/ colls.destroyAll)//


 




  app.param('collId', colls.coll);




 /* app.get('/api/get-collections', function(req, res) {

    mongodb.MongoClient.connect(uri, function(err, db) {
      if (!err) {
        db.collection("collections",function(err, collection) {
          collection.find()
          .limit()
          .toArray(function(err, items) {
            if (err){
                res.send(err)
            }else{
              res.json(items); // return all todos in JSON format
            }
          })
         
         
        })
      }
    });
  });

  app.get('/api/fields', function(req, res) {
    var collection = req.query.collection;
    if (collection){
    
      mongodb.MongoClient.connect(uri, function(err, db) {
        db.collection(collection, function(err, collection) {
          if(!err){
            collection.find()
            .limit(100)
            .toArray(function(err, items) {
              var fields= _
                .chain(items)
                .map(function(value, key) {
                  return Object.keys(value);
                })
                .flatten()
                .reduce(function(counts, property) {
                  counts[property] = (counts[property] || 0) + 1;
                  return counts;
                }, {})
                .value();
              res.send(fields)
              printJson(fields)
            })
          }else{
          }
          
        })
      });
    }
  });

  app.get('/api/removecollection', function(req, res) {
    var c = req.query.collection;
    mongodb.MongoClient.connect(uri, function(err, db) {
      if (!err) {
        db.collection(c, function(err, collection) {
          collection.drop(function(err, reply) {
            db.collection("collections", function(err, collection) {
              collection.remove({name:c},function(err, numberOfRemovedDocs) {
                res.json(numberOfRemovedDocs)
              });
            });  
          }); 
        });
      };
    });
  });

  app.get('/api/add-collection', function(req, res) {
    printJson(req.query,"req.query")
    var newCollectionName = req.query.name;
    if (newCollectionName){
      mongodb.MongoClient.connect(uri, function(err, db) {
        if(!err){
          db.collectionNames(function(err, collections) {
            if(!err){
              var collectionsName=[];    
              _.each(collections, function(item) {
                collectionsName.push(item.name)
              });   
          
              var i= collectionsName.indexOf(newCollectionName);
              if (i>-1){
                  alert("collection "+newCollectionName+" exists already, Please enter another Name")
              }else{

                db.createCollection( newCollectionName, function(err, collectionCreated) {
                  db.collection("collections", function(err, collectionDB) {
                    var obj={ 
                      "name": newCollectionName,
                      "fields":[],
                      "docs":0
                    }
                    collectionDB.insert(obj,function(err, items) {
                      if(!err){
                        res.json(items);
                      }else{
                        printJson(err);
                      }
                    });
                  })
                  
                })
              }
            }else{
            }
          }) 
        }else{
          printJson(err)
        }
        
      });
    } 
  });

  app.get('/api/collectiondata', function(req, res) {

    var offset, count, sortby, ne, where, sort,collection,limit;
    printJson(req.query)
    collection = req.query.collection;
    if(req.query.limit){
        limit=req.query.limit
    }else{
      limit=1
    }
    mongodb.MongoClient.connect(uri, function(err, db) {
      db.collection(collection, function(err, collection) {
        if(!err){
          collection.find()
          .limit(limit)
          .toArray(function(err, items) { 
            printJson(items)
              res.json(items); // return all todos in JSON format
          })
        }else{
          res.send(err)
        };
      });
    });
  });

  app.get('/api/searchTypeAhead', function(req, res) {

    var offset, count, sortby, ne, where, sort,collection;
    value = req.query.value;
    collection="wines"
    // use mongoose to get all todos in the database
    mongodb.MongoClient.connect(uri, function(err, db) {
      db.collection(collection, function(err, collection) {
        collection.find({
          "name": {
            $regex: ".*" + value + "*.",
            $options: 'i'
          }
        })
        .limit(10)
        .toArray(function(err, items) {
        //print(dbDocsFound)
        if (err)
          res.send(err)

        res.json(items); // return all todos in JSON format
      });
      });
    });
  });

  //check a collection exist
  app.get('/api/checkcollectionexist', function(req, res) {
    var collection = req.query.collection;

    mongodb.MongoClient.connect(uri, function(err, db) {
      db.collectionNames(function(err, collections) {
        var i=collections.indexOf(collection);
        if(i >-1){
          db.collectionsInfo(collection).toArray(function(err, items) {
              res.json(items);
          })
        }else{
          db.createCollection(collection, function(err, r) {
            if(err){
              res.send(err);
              
            }else{
              db.collectionsInfo(collection).toArray(function(err, items) {
                res.json(items);
              })
            }
          })
        }
      })
    });
  });

  //insert field in collection Databases
  app.get('/api/set-collections', function(req, res) {
      
      mongodb.MongoClient.connect(uri, function(err, db) {
        db.collection("collections", function(err, collection) {
          collection.remove(function(err, numberOfRemovedDocs) {
            db.collectionNames(function(err, collections) {
              if(!err){
                var collectionsName=[];
                var removeItems=["system.users","system.indexes","objectlabs-system","objectlabs-system.admin.collections","collections"];
                _.each(collections, function(item) {
                  collectionsName.push(item.name)
                });         
                _.each(removeItems, function(item) {
                  var r ="dev."+item;
                  var i= collectionsName.indexOf(r);
                  if (i>-1){
                    collections.splice(i,1);
                    collectionsName.splice(i,1);
                  }
                });
                for (i in collections){
                  var str=collections[i].name.split(".")
                  str.shift()
                  c=str.join(".")
                  
                  db.collection(c, function(err, collection) {
                    var obj={ "name": c}

                    collection.find()
                    .limit()
                    .toArray(function(err, items) {
                     
                      var fields= _
                        .chain(items)
                        .map(function(value, key) {
                          return Object.keys(value);
                        })
                        .flatten()
                        .reduce(function(counts, property) {
                          counts[property] = (counts[property] || 0) + 1;
                          return counts;
                        }, {})
                        .value();
                       
                      obj.fields=fields
                      obj.docs=items.length
                  
                      db.collection("collections", function(err, collectionDB) {

                        collectionDB.insert(obj,function(err, items) {
                          if(!err){
                          }else{
                            printJson(err);
                          }
                        });
                      })
                    })
                  });
                }
              }else{
              }
            })
          });
        });
      });
  });*/

 
}
