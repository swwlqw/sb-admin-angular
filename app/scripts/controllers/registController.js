angular.module('sbAdminApp')
    .controller('registController', function($scope, $http, $location){
        $scope.data ={
            username:'',
            password:'',
            confirm:'',
            nickname:'',
            email:'',
            mobile:''
        };

        $scope.result ={
            show: false,
            success: true,
            message:''
        };
        $scope.regist = function(){
            $scope.show = false;
            $http.post('api/user/regist',$scope.data)
                .success(function(result){
                    $scope.show = true;
                    $scope.success = result.success;
                    if (result.success){
                        $scope.result.message='注册成功！'
                    }else{
                        $scope.result.message='注册失败！'
                    }
                });
        }
    });