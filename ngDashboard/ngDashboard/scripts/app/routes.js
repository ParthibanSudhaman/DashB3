define([
    'angular',
    'app/app',
    './area/namespace'
],
function (angular, app, namespaceArea) {
    'use strict';

    return app.config([
        '$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/area', {
                    templateUrl: 'scripts/app/area/templates/area.html',
                    controller: namespaceArea + '.myController as vm'
                })
            .otherwise({ redirectTo: '/area' });
        }
    ]);
});