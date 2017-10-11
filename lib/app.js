'use strict';
angular.module('catApp', ['ngRoute','AdalAngular'])
.config(['$routeProvider', '$httpProvider', 'adalAuthenticationServiceProvider', function ($routeProvider, $httpProvider, adalProvider) {

    $routeProvider.when("/Home", {
        controller: "homeCtrl",
        templateUrl: "/App/Views/Home.html",
    }).when("/CatList", {
        controller: "catListCtrl",
        templateUrl: "/App/Views/CatList.html",
        requireADLogin: true,
	}).when("/Calc", {
        controller: "calcCtrl",
        templateUrl: "/App/Views/Calc.html",
		requireADLogin: true,
    }).when("/UserData", {
        controller: "userDataCtrl",
        templateUrl: "/App/Views/UserData.html",
    }).otherwise({ redirectTo: "/Home" });

    adalProvider.init(
        {
            instance: 'https://login.microsoftonline.com/', 
            tenant: 'together.at',
			clientId: 'eb4c0c67-7376-4a50-b9fe-ed01fe020b58',
            extraQueryParameter: 'nux=1',
            //cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost.
        },
        $httpProvider
        );
   
}]);