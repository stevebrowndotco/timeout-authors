'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


  var DocSchema = new Schema({
    doc: {
        type: Object
      },
    created: Date,
    updated: [Date],
  }); 

  /**
   * Pre hook.
   */

  DocSchema.pre('save', function(next, done) {
    if (this.isNew)
      this.created = Date.now();

    this.updated.push(Date.now());

    next();
  });

  /**
   * Statics
   */
  DocSchema.statics = {
    load: function(id, cb) {
      this.findOne({
        _id: id
      })
       /* .populate('creator', 'username')*/
        .exec(cb);
    }
  };

  /**
   * Methods
   */

  DocSchema.statics.findByName = function(name, callback) {
    return this.find({
      name: name
    }, callback);
  }

  DocSchema.methods.expressiveQuery = function(creator, date, callback) {
    return this.find('creator', creator)
      .where('date')
      .gte(date)
      .run(callback);
  }

module.exports = DocSchema;


/**
 * Define model.
 */

mongoose.model('DocModel', DocSchema);