define([
        '../module',
        '../namespace'
],
    function (module, namespace) {
        'use strict';

        var name = namespace + ".myService";

        var dependencies = ["$q"];
        var service = function ($q) {

            var data = [{
                key: "Cumulative Usage",
                values: [{ "label": "A", "value": 29.765957771107 },
                    { "label": "B", "value": 0 },
                    { "label": "C", "value": 32.807804682612 },
                    { "label": "D", "value": 196.45946739256 },
                    { "label": "E", "value": 0.19434030906893 },
                    { "label": "F", "value": 98.079782601442 },
                    { "label": "G", "value": 13.925743130903 },
                    { "label": "H", "value": 5.1387322875705 }]
            }, {
                key: "Individual Usage",
                values: [{ "label": "1", "value": 9.765957771107 },
                    { "label": "2", "value": 23.121212 },
                    { "label": "3", "value": 33.807804682612 },
                    { "label": "4", "value": 46.45946739256 },
                    { "label": "5", "value": 10.19434030906893 },
                    { "label": "6", "value": 91.079782601442 },
                    { "label": "7", "value": 113.925743130903 },
                    { "label": "8", "value": 53.1387322875705 }]
            }];

            return {
                findAll: function () {
                    var deferred = $q.defer();
                    deferred.resolve(data);
                    return deferred.promise;
                },

                findByKey: function (key) {
                    var deferred = $q.defer(),
                        results = data.filter(function (element) {
                            return key === element.key;
                        });
                    deferred.resolve(results);
                    return deferred.promise;
                }

            };
        };

        module.factory(name, dependencies.concat(service));
    });