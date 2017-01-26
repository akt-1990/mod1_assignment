(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', MsgController);

MsgController.$inject = ['$scope'];


function MsgController($scope) {
  $scope.name = "";
  $scope.stateOfBeing = "";

  $scope.sayMessageOK = function () {
    return "Enjoy !!";
  };

  $scope.sayMessageTooMuch = function () {
    return "Too Much !!";
  };

  $scope.sayMessageNoLunch = function () {
    return "Please Enter Data First !!";
  };

  $scope.customStyle = {};
  $scope.turnGreen = function (){
      $scope.customStyle.style = {"color":"green"};
  }

  $scope.turnRed = function() {
      $scope.customStyle.style = {"color":"red"};
  }
  $scope.checkLunchItems = function () {
    var str = $scope.name;

    var myarray = str.split(",");

    //checking if there is any empty element in the array
    myarray = myarray.filter(entry => /\S/.test(entry));

    var myArrayLength = myarray.length;

    if(myArrayLength>0)  {
      if(myArrayLength<=3)
      {
        $scope.stateOfBeing = $scope.sayMessageOK();
      }
      else{
        $scope.stateOfBeing = $scope.sayMessageTooMuch();
      }
      $scope.turnGreen();
    }
    else{
      $scope.stateOfBeing = $scope.sayMessageNoLunch();
      $scope.turnRed();
    }
  };
}
})();
