'use strict';
var mongoose = require('mongoose'),
Collection,
DocModel,

    auth = require('../config/authConfig'),
    path = require('path'),

    config = require('../config/config'),
    mongodb = require('mongodb'),
    uri=config.db,

    _=require('underscore'),
    printJson=require("./utils").printJson;

module.exports = function(app, passport) {
  var docs={
    doc : function(req, res, next, id) {
     


     
      next();
      /*DocModel.load(id, function(err, doc) {
        if (err) return next(err);
        if (!doc) return next(new Error('Failed to load doc ' + id));
        req.doc = doc;
        console.log("doc load: ");
        next();
      });*/

     
     
    },

    create: function(req, res) {
      var  newDoc=req.body 

      console.log("newDoc: ");
      console.log(newDoc);  

      Collection= newDoc.coll;

      DocModel = mongoose.model('DocModel', Collection);
      var doc = new DocModel();


      doc.doc=newDoc.doc
      doc.creator = req.user;

      doc.save(function(err) {
        if (err) {
          res.json(500, err);
        } else {
          console.log("doc: ");
          console.log(doc);
          res.json(doc);
        }
      });
    },


    showSelected : function(req, res) {
     


    },

    showall : function(req, res) {
      console.log("showall: ");
      var Collection=req.query.coll
      var l=req.query.limit;
      var s=req.query.skip;
      var c=req.query.count;
      console.log("c: ");
      console.log(c);
      DocModel = mongoose.model('DocModel', Collection);
      if(c){
        console.log("req.query.count: ");
        console.log(req.query.count);
        DocModel.find().exec(function(err, docs) {
          
          if (err) {
            res.json(500, err);
          } else {
            var docsCount=docs.length
            var temp={"docsCount":docsCount};
            res.json(temp);
          }
        });
      }else{
       
        DocModel.find().limit(l).skip(s).exec(function(err, docs) {
     
          if (err) {
            res.json(500, err);
          } else {
            var temp={"docs":docs};
            res.json(temp);
          }
        });
      }


     
     
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
  };

  app.get('/api/docs', docs.showall);
  app.post('/api/docs', docs.create);
  app.get('/api/docs/:docId',docs.showSelected)
  app.param('docId',docs.doc);




 /* app.get('/api/get-collections', function(req, res) {

    mongodb.MongoClient.connect(uri, function(err, db) {
      if (!err) {
        console.log("Connected to 'dev' database");
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
            console.log("err: "+err);
          }
          
        })
      });
    }
  });

  app.get('/api/removecollection', function(req, res) {
    var c = req.query.collection;
    mongodb.MongoClient.connect(uri, function(err, db) {
      if (!err) {
        console.log("Connected to 'dev' database");
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
      console.log("newCollectionName: "+newCollectionName);
      mongodb.MongoClient.connect(uri, function(err, db) {
        if(!err){
          db.collectionNames(function(err, collections) {
            if(!err){
              var collectionsName=[];    
              _.each(collections, function(item) {
                collectionsName.push(item.name)
              });   
          
              var i= collectionsName.indexOf(newCollectionName);
              console.log("i: "+i);
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
                        console.log("items inserted: "+items);
                      }else{
                        printJson(err);
                      }
                    });
                  })
                  
                })
              }
            }else{
              console.log("err: "+err);
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
    console.log("collection: "+collection);
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
    console.log("collection: "+collection);

    mongodb.MongoClient.connect(uri, function(err, db) {
      db.collectionNames(function(err, collections) {
        var i=collections.indexOf(collection);
        console.log("i: "+i);
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
            console.log("numberOfRemovedDocs: "+numberOfRemovedDocs);
            db.collectionNames(function(err, collections) {
              if(!err){
                var collectionsName=[];
                var removeItems=["system.users","system.indexes","objectlabs-system","objectlabs-system.admin.collections","collections"];
                _.each(collections, function(item) {
                  collectionsName.push(item.name)
                });         
                _.each(removeItems, function(item) {
                  var r ="dev."+item;
                  console.log("r: "+r);
                  var i= collectionsName.indexOf(r);
                  console.log("i: "+i);
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
                            console.log("items inserted: "+items);
                          }else{
                            printJson(err);
                          }
                        });
                      })
                    })
                  });
                }
              }else{
                console.log("err: "+err);
              }
            })
          });
        });
      });
  });*/

 
}
