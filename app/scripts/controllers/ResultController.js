'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
    .controller('ResultController', function ($scope, $modal, $rootScope, $stateParams) {
        var id = $stateParams.id;
        $scope.data = $rootScope.data.locations[id];
        $scope.all = $rootScope.data.reports;

        $scope.add = function(item){
            $scope.data.push(item);
        };

        $scope.delete = function(item){
            var temp = [];
            for (var i in $scope.data) {
                if ($scope.data[i] !== item){
                    temp.push($scope.data[i]);
                }
            }
            $scope.data.splice(0, $scope.data.length);
            for (var j in temp) {
                $scope.data.push(temp[j]);
            }
        }
    });