'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
    .controller('PageController', function ($scope, $modal, $rootScope, $location) {
        $scope.data = $rootScope.data.pages;
        $scope.add = function () {
            $modal.open({
                animation: true,
                templateUrl: 'PageAdd.html',
                controller: 'PageAddController',
                backdrop: true,
                size: 'sm'
            });
        };

    })
    .controller('PageAddController', function ($scope, $modalInstance, $rootScope) {
        $scope.data = {
            name: ''
        };
        $scope.ok = function () {
            var page = {
                id: $rootScope.data.pageIndex,
                name: $scope.data.name
            };
            $rootScope.data.pageIndex = page.id + 1;
            $rootScope.data.pages.push(page);
            $rootScope.reloadLists();
            $modalInstance.close($modalInstance.opened);
        };
        $scope.close = function () {
            $modalInstance.close($modalInstance.opened);
        };
    })
;