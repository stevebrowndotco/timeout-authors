'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ViewSchema = new Schema({
  name: {
    type: String,
    index: true,
    required: true
  },
  description: {
    type: String,
    default: '',
    trim: true
  },
  created: Date,
  updated: [Date],
  creator: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  collections:[{}],
  fieldsList:[{
    id:{
      type:String
    },
    name:{
      type: String
    },
    checked:{
      type: Boolean,
      default: false,
    },
    showAs:{
      type:String
    }, 
    coll:{
     type: Schema.ObjectId,
      ref: 'CollModel'
    }
  }],
  docsPerPage:{
    type: Number,
    default:10
  },
  celHeight:{
    type: Number,
    default:40
  },
  headerHeight:{
    type: Number,
    default:40
  }
},
 { collection : '_views' });   // collection name);

/**
 * Pre hook.
 */

ViewSchema.pre('save', function(next, done){
  if (this.isNew)
    this.created = Date.now();

  this.updated.push(Date.now());

  next();
});

/**
 * Statics
 */
ViewSchema.statics = {
  load: function(id, cb) {
    this.findOne({
      _id: id
    })
    .populate('creator', 'username').exec(cb);
  }
};

/**
 * Methods
 */

ViewSchema.statics.findByName = function (name, callback) {
  return this.find({ name: name }, callback);
}

ViewSchema.methods.expressiveQuery = function (creator, date, callback) {
  return this.find('creator', creator).where('date').gte(date).run(callback);
}

ViewSchema.statics.findByCreator = function(creator, callback) {
  return this.find({
    creator: creator
  }, callback);
}


/**
 * Define model.
 */

mongoose.model('ViewPost', ViewSchema);