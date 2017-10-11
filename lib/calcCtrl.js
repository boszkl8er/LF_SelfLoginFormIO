'use strict';
angular.module('catApp')
.controller('calcCtrl', ['$scope', 'adalAuthenticationService', function ($scope, adalService) {
	$scope.getToken2 = function(){
		 var resource = adalService.getClientID();
		 console.log('ClientID = '+resource);
		 var tokenVal = adalService.getCachedToken(resource);
		 return tokenVal;
	};

}]);