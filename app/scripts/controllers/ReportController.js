'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
    .controller('ReportController', function ($scope, $modal, $rootScope, $location) {
        $scope.data = $rootScope.data.reports;
        $scope.add = function () {
            $modal.open({
                animation: true,
                templateUrl: 'ReportAdd.html',
                controller: 'ReportAddController',
                backdrop: true,
                size: 'sm'
            });
        };

    })
    .controller('ReportAddController', function ($scope, $modalInstance, $rootScope) {
        $scope.data = {
            name: ''
        };
        $scope.ok = function () {
            /*
            var re = {
                id: $rootScope.data.pageIndex,
                name: $scope.data.name
            };
            $rootScope.data.pageIndex = page.id + 1;
            $rootScope.data.pages.push(page);
            */
            $modalInstance.close($modalInstance.opened);
        };
        $scope.close = function () {
            $modalInstance.close($modalInstance.opened);
        };
    })
;