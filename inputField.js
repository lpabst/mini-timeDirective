angular.module('myApp')
.directive('inputField', function(){

    return {
        restrict: 'E',
        templateUrl: 'views/inputField.html',
        scope: {
            buttonText: '@',
            whenClicked: '&'
        }

    }

});