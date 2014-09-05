'use strict';

angular.module('myApp')
  .controller('BlogsCtrl', function ($scope, $log, Blogs, $location, $routeParams, $rootScope,$upload,_,$http,$sce, du) {

    $scope.editAllowed=false;
    $scope.createAllowed=false;


    $scope.findOne = function() {
     
      Blogs.get({
        blogId: $routeParams.blogId
      }, function(blog) {
       
        $scope.blog = blog;
      
        $scope.images=$scope.blog.images;
        if ( $scope.blog.creator._id === $rootScope.currentUser._id ) {
         $scope.editAllowed=true;
        };

      });
    };





    if ($rootScope.currentUser) {
      var roles= $rootScope.currentUser.roles
      if (roles.indexOf("blogger") > -1) {
        $scope.createAllowed= true
      }
      if (roles.indexOf("administrator") > -1) {
        $scope.createAllowed= true
        $scope.editAllowed= true
      }
    };
    $scope.create = function() {
      console.log("create: ");

      var blog = new Blogs({
        title: this.title,
        content: this.content,
        images :$scope.images
      });
      blog.$save(function(blog) {
       // $location.path( "/blogs!"+ blog._id);
        $scope.blog=blog;
      });

      this.title = "";
      this.content = "";
    };

    $scope.remove = function(blog) {
      blog.$remove();

      for (var i in $scope.blogs) {
        if ($scope.blogs[i] == blog) {
          $scope.blogs.splice(i, 1);
        }
      }
    };

    $scope.updateSubmit = function() {
      console.log("update: ");

      var blog = $scope.blog;
      blog.$update(function() {
        //$location.path('blogs/' + blog._id);
      });
    };

    $scope.find = function() {
      Blogs.query(function(blogs) {
        $scope.blogs = blogs;


      });
    };

    //DU EDITOR

    $scope.insertDiv =function() {
    $scope.output="";
      /*;div {
      border-width: 1px;
      border-color: green;
      border-style: solid;*/
  

    $scope.output=($scope.output+'<style>.test{border:1px solid green;}</style><p style="color:rgb(100,100,100)">test</p>');
      console.log("$scope.output: ");
      console.log($scope.output);
    };



    //DU EDITOR END






 



    if ($rootScope.currentUser) {
          var roles= $rootScope.currentUser.roles
          if (roles.indexOf("administrator") > -1) {
            $scope.debugging=true;



      }
    };
  });
