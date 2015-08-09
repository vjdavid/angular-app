(function() {

  var customer = {
    name: "Juan",
    lastName: "Lopez",
    age: 19
  };

  var app = angular.module("myapp", []);

  app.controller('StoreController', function() {
    this.person = customer;
  });

}) ();
