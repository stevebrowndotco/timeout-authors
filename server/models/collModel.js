'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


  var CollSchema = new Schema(
    {
      name: {
        type: String,
        index: true,
        required: true
      },
      fields: [{
        id: {
          type:Number
        },
        name: {
          type:String
        },
        type: {
          type:String
        },
        required: {
          type:Boolean
        }
      }],
      created: Date,
      updated: [Date],
      creator: {
        type: Schema.ObjectId,
        ref: 'User'
      },

      viewAllow: [{
        type: Schema.ObjectId,
        ref: 'User'
      }],
      editAllow: [{
        type: Schema.ObjectId,
        ref: 'User'
      }],
      deleteAllow: [{
        type: Schema.ObjectId,
        ref: 'User'
      }],
      published: {
        type: Boolean,
        default: true
      }
    },
    { collection : '_collections' }
  ); // collection name;

  /**
   * Pre hook.
   */

  CollSchema.pre('save', function(next, done) {
    if (this.isNew)
      this.created = Date.now();

    this.updated.push(Date.now());

    next();
  });

  /**
   * Statics
   */
  CollSchema.statics = {
    load: function(id, cb) {
      this.findOne({
        _id: id
      })
        .populate('creator', 'username')
        .exec(cb);
    }
  };

  /**
   * Methods
   */

  CollSchema.statics.findByName = function(name, callback) {
    return this.find({
      name: name
    }, callback);
  }

  CollSchema.statics.findByCreator = function(creator, callback) {
    console.log("creator: ");
    console.log(creator);
    return this.find({
      creator: creator
    }, callback);
  }

  CollSchema.methods.expressiveQuery = function(creator, date, callback) {
    return this.find('creator', creator)
      .where('date')
      .gte(date)
      .run(callback);
  }

module.exports = CollSchema;


/**
 * Define model.
 */

mongoose.model('CollModel', CollSchema);