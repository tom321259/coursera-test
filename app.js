
(function()
{
  'use strict';

  angular.module('myFirstApp', [])

  .controller('myFirstController', function($scope)
  {
    $scope.name = "Tom";
    $scope.sayHello = function() {
      return "Hello Tom dfgdfgddf!";
    }
  })

})();
