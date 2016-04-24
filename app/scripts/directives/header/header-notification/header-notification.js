'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
    .directive('headerNotification', function () {
        return {
            templateUrl: 'scripts/directives/header/header-notification/header-notification.html',
            restrict: 'E',
            replace: true,
            controller: function ($scope, $http) {
                $http.get('api/user/nickname').success(function (result){
                    if (result.success) {
                        $scope.nickname = result.data;
                    }
                })
            }
        }
    });


