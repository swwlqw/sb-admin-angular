angular.module('sbAdminApp')
    .controller('ConsoleController', function ($scope, $rootScope, $location) {
      //  $scope.$parent.app = $rootScope.currentApp.name;
        $scope.$parent.app = 'test';

        $rootScope.data.pageIndex = 3;
        $rootScope.data.pages = [
            {
                id: '1',
                name: '页面1'
            },
            {
                id: '2',
                name: '页面2'
            }
        ];

        $rootScope.data.reportIndex = 3;
        $rootScope.data.reports = [
            {
                id: '1',
                name: 'chart1',
                type:'line',
                group:'group1'
            },
            {
                id: '2',
                name: 'chart2',
                type:'pie',
                group:'group2'
            }
        ];


        $rootScope.data.locations =[
            [],
            [
                {
                    name:'chart1',
                },
                {
                    name:'chart2',
                }
            ],
            [],
            [],
            []
        ];
        $scope.lists = [
            {
                name: ' 基础配置',
                number: 1,
                icon: 'fa-wrench',
                subs: [
                    {url: 'home.console.group', name: '数据组管理'},
                    {url: 'home.console.page', name: '页面管理'},
                    {url: 'home.console.report', name: '报表管理'}
                ]
            },
            {
                name: ' 页面报表配置',
                number: 2,
                icon: 'fa-location-arrow',
                subs: []
            },
            {
                name: ' 报表查看',
                number: 3,
                icon: 'fa-bar-chart-o',
                subs: []
            }
        ];

        $rootScope.reloadLists = function() {
            var subs1 = $scope.lists[1].subs;
            var subs2 = $scope.lists[2].subs;
            subs1.splice(0, subs1.length);
            subs2.splice(0, subs2.length);

            $rootScope.data.pages.forEach(function (page) {
                    var p1 = {
                        url: 'home.console.location({id:' + page.id+'})',
                        name: page.name
                    };
                    subs1.push(p1);
                    var p2 = {
                        url: 'home.console.result({id:' + page.id+'})',
                        name: page.name
                    };
                    subs2.push(p2);
                }
            );
        };

        $rootScope.reloadLists();


        $scope.check = function (x) {
            if (x == $scope.collapseVar)
                $scope.collapseVar = 0;
            else
                $scope.collapseVar = x;
            console.log($scope.collapseVar);
        };
    });