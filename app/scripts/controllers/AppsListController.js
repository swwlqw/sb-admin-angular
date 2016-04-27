angular.module('sbAdminApp')
    .controller('AppsListController', function ($scope, $rootScope, $modal, $location) {
        $scope.apps = $rootScope.data.apps;
        $scope.add = function () {
            $modal.open({
                animation: true,
                templateUrl: 'AppListAdd.html',
                controller: 'AppAddController',
                backdrop: true,
                size: 'sm'
            });
        };

        $scope.detail = function (item) {
            $rootScope.detailApp = item;
            $modal.open({
                animation: true,
                templateUrl: 'AppListDetail.html',
                controller: 'AppDetailController',
                backdrop: true,
                size: 'sm'
            });
        };

        $scope.manager = function (item) {
            $rootScope.currentApp = item;
            $location.path("home/console/group")
        };

        $scope.delete = function (item) {
            var temp = [];
            for (var i in $scope.apps) {
                var app = $scope.apps[i];
                if (app.id !== item.id){
                    temp.push(app);
                }
            }
            $scope.apps.splice(0, $rootScope.data.apps.length);
            for (var j in temp) {
                $scope.apps.push(temp[j]);
            }
        }

    })
    .controller('AppAddController', function ($scope, $modalInstance, $rootScope) {
        $scope.ok = function () {
            var index = $rootScope.data.appIndex;
            $rootScope.data.appIndex = index + 1;
            var app = {
                id: index,
                name: $scope.data.name,
                description: $scope.data.description,
                grant: '创建者',
                appKey: $rootScope.generate(10),
                appSecret: $rootScope.generate(20)
            };
            $rootScope.data.apps.push(app);
            $modalInstance.close($modalInstance.opened);
        };
        $scope.close = function () {
            $modalInstance.close($modalInstance.opened);
        };
    })
    .controller('AppDetailController', function ($scope, $modalInstance, $rootScope) {
        $scope.data = $rootScope.detailApp;
        $scope.ok = function () {
            $modalInstance.close($modalInstance.opened);
        };
    });