'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
    .controller('ResultController', function ($scope, $rootScope,$stateParams) {
        var id = $stateParams.id;
        var config = $rootScope.data.locations[id];
        $scope.data =[];
        config.forEach(function(item){
            $scope.data.push($rootScope.data.options[item.name]);
        });

        console.log($scope.data);
    });