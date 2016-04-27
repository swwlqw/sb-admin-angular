'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
    .directive('myChart', function () {
        return {
            restrict: 'A',
            scope: {
                'option': '='
            },
            replace: true,
            template: '<div style="height:{[{height}]}px;"></div>',
            link: function ($scope, element) {
   //             $http.get('china.json')
   //                 .success(function(chinaJson){
    //                    echarts.registerMap('china', chinaJson);
                        var myChart = echarts.init(element[0]);
                        myChart.setOption($scope.option);
     //               });
            }
        };
    });


