﻿'use strict';
angular.module('LfApp', ['ngRoute','AdalAngular'])
.config(['$routeProvider', '$httpProvider', 'adalAuthenticationServiceProvider', function ($routeProvider, $httpProvider, adalProvider) {

    $routeProvider.when("/Home", {
        controller: "homeCtrl",
        templateUrl: "/app/html/Home.html",
    }).otherwise({ redirectTo: "/Home" });

    adalProvider.init(
        {
            instance: 'https://login.microsoftonline.com/', 
            tenant: 'together.at',
			clientId: 'eb4c0c67-7376-4a50-b9fe-ed01fe020b58',
            extraQueryParameter: 'nux=1',
        },
        $httpProvider
        );
   
}]);