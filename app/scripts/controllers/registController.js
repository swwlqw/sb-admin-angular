angular.module('sbAdminApp')
    .controller('registController', function($scope, $modal){
        $scope.data ={
            username:'',
            password:'',
            confirm:'',
            nickname:'',
            email:'',
            mobile:''
        };

        $scope.regist = function(){
            $modal.open({
                animation: true,
                templateUrl: 'registModalContent.html',
                controller: 'RegistModalController',
                backdrop: true,
                size:'sm'
            });
        }
    })
    .controller('RegistModalController', function ($scope, $modalInstance) {
        $scope.modal = {
            title: '提示',
            content: '注册成功！',
            confirm: '确定'
        };
        $scope.close = function () {
            $modalInstance.close($modalInstance.opened);
        };
    });
