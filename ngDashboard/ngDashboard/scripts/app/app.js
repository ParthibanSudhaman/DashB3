define([
        'angular',
        './namespace',
        './common/namespace',
        './area/namespace',
        'angularRoute',
        'd3',
        'nvd3',
        'angularNvd3',
        './common/module.require',
        './area/module.require'
],
function (angular, namespace, namespaceCommon, namespaceArea) {
    'use strict'
    var app = angular.module(namespace, [
        'ngRoute',
        'nvd3',
        namespaceCommon,
        namespaceArea
    ]).run(function () {

    });
    return app;
});