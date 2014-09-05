'use strict';

angular.module('myApp')
  .factory('Auth', function Auth($location, $rootScope, Session, User, $cookieStore,du) {
    $rootScope.currentUser = $cookieStore.get('user') || null;
    $cookieStore.remove('user');

    return {
      isAdmin: function(callback) {
        var cb = callback || angular.noop;
        if ($rootScope.currentUser) {
          var admin=false;
          admin=_.contains($rootScope.currentUser.roles, "administrator") ;
          return admin
         };

      },
      loginFacebook:function(provider, user, callback) {
        var cb = callback || angular.noop;

        Session.save({
          provider: provider,
          email: user.email,
          password: user.password,
          rememberMe: user.rememberMe
        }, function(user) {
          console.log("session save success");
          $rootScope.currentUser = user;
          return cb();
        }, function(err) {
          console.log("err.data: "+err.data);
          return cb(err.data);
        });
      },

      loginLocalAuth: function(provider, user, callback) {
        var cb = callback || angular.noop;

        Session.save({
          provider: provider,
          email: user.email,
          password: user.password,
          rememberMe: user.rememberMe,
          roles:user.roles
        }, function(user) {
          console.log("session save success");
          $rootScope.currentUser = user;

          return cb();
        }, function(err) {
          console.log("err.data: "+err.data);
          return cb(err.data);
        });
      },

      logout: function(callback) {
        var cb = callback || angular.noop;
        Session.delete(function(res) {
            $rootScope.currentUser = null;
            return cb();
          },
          function(err) {
            return cb(err.data);
          });
      },

      createUser: function(userinfo, callback) {
        var cb = callback || angular.noop;
        User.save(userinfo,
          function(user) {
            $rootScope.currentUser = user;
            return cb();
          },
          function(err) {
            return cb(err.data);
          });
      },

      currentUser: function() {
        Session.get(function(user) {
          $rootScope.currentUser = user;
        });
      },

      changePassword: function(email, oldPassword, newPassword, callback) {
        var cb = callback || angular.noop;
        User.update({
          email: email,
          oldPassword: oldPassword,
          newPassword: newPassword
        }, function(user) {
            console.log('password changed');
            return cb();
        }, function(err) {
            return cb(err.data);
        });
      },

      removeUser: function(email, password, callback) {
        var cb = callback || angular.noop;
        User.delete({
          email: email,
          password: password
        }, function(user) {
            console.log(user + 'removed');
            return cb();
        }, function(err) {
            return cb(err.data);
        });
      },
      updateUser: function(debug, callback) {
        console.log("debug: ");
        console.log(debug);
        var cb = callback || angular.noop;
        User.update({
          'preference': {'debbugging':debug},
          
        }, function(user) {
            console.log('preference updated');
            return cb();
        }, function(err) {
            return cb(err.data);
        });
      }
    };
  })