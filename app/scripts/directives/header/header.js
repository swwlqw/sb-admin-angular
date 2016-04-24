'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
    .directive('header', function () {
        return {
            templateUrl: 'scripts/directives/header/header.html',
            restrict: 'E',
            replace: true,
            controller: function ($scope) {
				$scope.pages = [
                    {id: 1, name:'Page1'},
                    {id: 2, name:'Page2'},
                ];

            }
        }
    });


