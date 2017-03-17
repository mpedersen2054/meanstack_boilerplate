
angular.module('myApp')
.controller('ExamplesCtrl', ['$scope', 'ExampleFactory', function($scope, ExampleFactory) {

  $scope.examples = []

  ExampleFactory.init(function(examples) {
    $scope.examples = examples
  })

}])
