require.config({
    urlArgs : 'version:v1' + (new Date().getTime()),
    paths: {
        'angular': 'libs/angularjs/1.5.0/angular.min',
        'angularRoute': 'libs/angularjs/1.5.0/angular-route.min',
        'd3':'libs/D3/d3',
        'nvd3': 'libs/D3/nv.d3.min',
        'angularNvd3': 'libs/D3/angular-nvd3.min'
    },
    shim: {
        'angular': {
            exports : 'angular'
        },
        'angularRoute': {
            deps:['angular']
        },
        'd3': {
            exports : 'd3'
        },
        'nvd3': {
            deps: [
                'angular',
                'd3'
            ]
        },
        'angularNvd3': {
            deps: [
                'angular',
                'nvd3'
            ]
        },
    }
});

require([
    'angular',
    'app/namespace',
    'app/app',
    'app/routes'
],
    function (angular, namespace) {
        angular.element(document).ready(function () {
            angular.bootstrap(document, [namespace]);
        });
    });