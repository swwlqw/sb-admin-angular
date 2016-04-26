'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */

angular.module('sbAdminApp')
  .directive('mySidebar',['$location',function() {
    return {
      templateUrl:'scripts/directives/sidebar/my_sidebar.html',
      restrict: 'E',
      replace: true,
      scope: {
        lists:'='
      },
      controller: function($scope){
        $scope.selectedMenu = 'dashboard';
        $scope.collapseVar = 1;
        $scope.multiCollapseVar = 0;

        $scope.check = function(x){
          if(x==$scope.collapseVar)
            $scope.collapseVar = 0;
          else
            $scope.collapseVar = x;
        };

        $scope.multiCheck = function(y){
          if(y==$scope.multiCollapseVar)
            $scope.multiCollapseVar = 0;
          else
            $scope.multiCollapseVar = y;
        };
      }
    }
  }]);
