'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
    .directive('myHeader', function () {
        return {
            templateUrl: 'scripts/directives/header/my_header.html',
            restrict: 'E',
            replace: true,
            scope: {
                app:'='
            },
            controller: function ($scope) {
				$scope.nickname ="swwlqw";
            }
        }
    });


