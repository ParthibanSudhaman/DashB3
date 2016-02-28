define([
    'angular',
    './namespace'
],
    function (angular, namespace) {
        'use strict';
        return angular.module(namespace, ['nvd3']);
    });