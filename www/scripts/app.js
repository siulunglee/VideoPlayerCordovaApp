﻿(function() {
  var app = angular.module('myStore', ['store-directives']);

  app.controller('StoreController',['$http', function($http){
    var store = this;
    store.products = [];
    
    $http.get('data/products.json').success(function(data) {
        store.products = data;
    });
  }]);

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);

      this.review = {};
    };
  });
})();