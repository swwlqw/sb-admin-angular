angular.module('sbAdminApp')
    .controller('loginController', function ($scope, $location, $modal) {
        $scope.data = {
            username: '',
            password: ''
        };
        $scope.login = function () {
            if ($scope.data.username === 'swwlqw' || $scope.data.username === 'liquanwei') {
                $location.path('home/apps/list');
            } else {
                $modal.open({
                    animation: true,
                    templateUrl: 'loginModalContent.html',
                    controller: 'LoginModalController',
                    backdrop: true,
                    size:'sm'
                });
            }
        }
    })
    .controller('LoginModalController', function ($scope, $modalInstance) {
        $scope.modal = {
            title: '提示',
            content: '登录失败，用户名或密码错误！',
            confirm: '确定'
        };
        $scope.close = function () {
            $modalInstance.close($modalInstance.opened);
        };
    });
