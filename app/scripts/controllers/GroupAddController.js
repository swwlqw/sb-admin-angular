'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
    .controller('GroupAddController', function ($scope, $modal, $rootScope, $location) {
        $scope.data = {
            length: 0,
            subs: []
        };

        $scope.add = function(){
            $rootScope.groupAddData = $scope.data;
            $modal.open({
                animation: true,
                templateUrl: 'ColumnAdd.html',
                controller: 'ColumnAddController',
                backdrop: true,
                size: 'sm'
            });
        };

        $scope.addGroup = function(){
            $scope.data.id = $rootScope.data.groupIndex;
            $rootScope.data.groupIndex = $scope.data.id + 1;
            $rootScope.data.groups.push($scope.data);
            $location.path('home/console/group')
        }
    })
    .controller('ColumnAddController', function ($scope, $modalInstance, $rootScope) {
        $scope.data ={
            name:'',
            type:'字符串',
            remark:''
        };
        $scope.ok = function () {
            var pdata = $rootScope.groupAddData;
            pdata.subs.push($scope.data);
            pdata.length = pdata.length + 1;
            $modalInstance.close($modalInstance.opened);
        };
        $scope.close = function () {
            $modalInstance.close($modalInstance.opened);
        };
    })
   ;