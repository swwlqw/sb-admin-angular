angular.module('sbAdminApp')
    .controller('loginController', function($scope, $http, $location){
        $scope.data ={
            username:'',
            password:''
        };

        $scope.result = {
            error: false
        };

        $scope.login = function(){
            $scope.result.error = false;
            $http.post('api/user/login',$scope.data)
                .success(function(result){
                    if (result.success){
                        $location.path('home');
                    }else{
                        $scope.result.error = true;
                    }
                });
        }
    });