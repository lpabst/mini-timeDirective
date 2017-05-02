angular.module('myApp')
.controller('mainCtrl', function($scope){

    $scope.name = 'loren';

    $scope.alerter = function(text){
        alert(text);
    }

    $scope.logger = function(text){
        console.log(text);
    }


});