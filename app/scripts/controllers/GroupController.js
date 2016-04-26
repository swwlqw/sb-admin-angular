angular.module('sbAdminApp')
    .controller('GroupController', function ($scope, $rootScope, $modal, $location) {
        $scope.groups = $rootScope.data.groups;
        $scope.add = function () {
            $location.path('home/console/group-add');
        };

        $scope.detail = function (item) {
            $rootScope.detailGroup = item;
            $modal.open({
                animation: true,
                templateUrl: 'GroupDetail.html',
                controller: 'GroupDetailController',
                backdrop: true,
                size: 'md'
            });
        };

        $scope.manager = function (item) {
            $rootScope.currentApp = item;
            $location.path("home/console")
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
    .controller('GroupAddController', function ($scope, $modalInstance, $rootScope) {
        $scope.ok = function () {
            var index = $rootScope.data.groupIndex;
            $rootScope.data.groupIndex = index + 1;
            var app = {
                id: index,
                name: $scope.data.name,
                description: $scope.data.description,
                subs: []
            };
            $rootScope.data.groups.push(app);
            $modalInstance.close($modalInstance.opened);
        };
        $scope.close = function () {
            $modalInstance.close($modalInstance.opened);
        };
    })
    .controller('GroupDetailController', function ($scope, $modalInstance, $rootScope) {
        $scope.data = $rootScope.detailGroup;
        $scope.ok = function () {
            $modalInstance.close($modalInstance.opened);
        };
    });