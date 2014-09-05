'use strict';


module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    express: {
      options: {
        spawn: false,
        port: process.env.PORT || 9000
      },
      dev: {
        options: {
          script: './server.js'
        },

      }
      
    },
    open: {
      all: {
        // Gets the port from the connect configuration
        path: 'http://localhost:9000',
        
      }
     
    },
    watch: {
      js: {
       files: ['./app/**/*.js','./server/**/*.js'],
        tasks: ['express:dev'],
        options: {
          livereload: true,
           spawn: false
        }
      },
      html: {
        files: ['./app/views/**/*.html'],
        tasks: ['express:dev'],
        options: {
          livereload: true,
          spawn: false
        }
      },
      styles: {
        files: ['./app/styles/**/*.css'],
        options: {
          livereload: true
        }
      },
     
      express: {
        files: [
          './server.js',
        

        ],
        tasks: ['express:dev'],
        options: {
          livereload: true,
          spawn: false //Without this option specified express won't be reloaded
        }
      }
    },


  });



  grunt.registerTask('default', ['express:dev','open','watch']);





};
