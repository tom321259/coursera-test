
(function()
{
  'use strict';

  angular.module('messApp', [])

  .controller('messController', function($scope)
  {
    $scope.name = "Tom";
    $scope.animal = "Cat";
    $scope.alterAnimal = function() //ALters the image src of the animal
    {
      if($scope.animal == "Cat") {$scope.animal = "Dog";}
      else {$scope.animal = "Cat";}
    }
    $scope.printName = function($name)
    {
      return $name;
    }
  })

})();
