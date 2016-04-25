angular.module('sbAdminApp')
    .controller('appsController', function ($scope, $http, $location) {
        $scope.lists = [
            {
                name: ' APP管理',
                number: 1,
                icon: 'fa-wrench',
                subs: [
                    {url: 'home.apps.list', name: 'APP列表'},
                    {url: 'home.apps.grants', name: '授权管理'}
                ]
            }
        ];
        $scope.check = function (x) {
            if (x == $scope.collapseVar)
                $scope.collapseVar = 0;
            else
                $scope.collapseVar = x;
            console.log($scope.collapseVar);
        };
    });