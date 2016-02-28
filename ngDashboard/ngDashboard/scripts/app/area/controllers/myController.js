define([
    '../module',
    '../namespace'
], function (module, namespace) {

    var name = namespace + '.myController';

    var dependencies = ['$scope', namespace + '.myService'];
    var controller = function ($scope, myService) {
        var vm = this;
        vm.message = "Parthiban's airtel data usage";
        vm.title = "This is a title";
        vm.items = [{ ID: 1, Title: 'Cumulative Usage' }, { ID: 2, Title: 'Individual Usage' }];
        vm.selectedData;
        vm.options = {
            chart: {
                type: 'discreteBarChart',
                height: 450,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 50,
                    left: 55
                },
                x: function (d) { return d.label; },
                y: function (d) { return d.value; },
                showValues: true,
                valueFormat: function (d) {
                    return d3.format(',.4f')(d);
                },
                duration: 500,
                xAxis: {
                    axisLabel: 'X Axis'
                },
                yAxis: {
                    axisLabel: 'Y Axis',
                    axisLabelDistance: -10
                }
            }
        };

        vm.populateGraph = function (key) {
            if (key) {
                myService.findByKey(key).then(function (data) {
                    vm.data = data;
                });
            } else {
                vm.data = null;
            }
        }
    };

    module.controller(name, dependencies.concat(controller));

});