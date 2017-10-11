'use strict';
angular.module('catApp')
.controller('homeCtrl', ['$scope', 'adalAuthenticationService','$location', function ($scope, adalService, $location) {
    $scope.login = function () {
        adalService.login();
    };
    $scope.logout = function () {
        adalService.logOut();
    };
    $scope.isActive = function (viewLocation) {        
        return viewLocation === $location.path();
    };
	/*$scope.getToken2 = function(){
		 var resource = 'eb4c0c67-7376-4a50-b9fe-ed01fe020b58';
		 var tokenVal = adalService.getCachedToken(resource);
		 return tokenVal;
	};*/
}]);