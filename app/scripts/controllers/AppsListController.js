angular.module('sbAdminApp')
    .controller('AppsListController', function($scope,$rootScope){
        $scope.apps = $rootScope.data.apps;
    });