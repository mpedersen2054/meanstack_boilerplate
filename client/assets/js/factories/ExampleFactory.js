
angular.module('myApp')
.factory('ExampleFactory', ['$http', function($http) {

  var examples = []
  var factory = {}

  factory.init = function(callback) {
    callback(examples)
  }

  return factory

}])
