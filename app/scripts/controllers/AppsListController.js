angular.module('sbAdminApp')
    .controller('AppsListController', function($scope, $http, $location){
        $http.get('api/app/list')
            .success(function(result){
                console.log(result);
                if(result.success){
                    $scope.apps = result.data;
                }
            })
    });