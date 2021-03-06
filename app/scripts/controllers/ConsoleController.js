angular.module('sbAdminApp')
    .controller('ConsoleController', function ($scope, $rootScope, $location) {
        if ($rootScope.currentApp) {
            $scope.$parent.app = $rootScope.currentApp.name;
        }else{
            $scope.$parent.app = 'Test';
        }

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

        $rootScope.data.reportIndex = 5;
        $rootScope.data.reports = [
            {
                id: '1',
                name: 'chart1',
                type:'line',
                group:'group1',
                title:'折线图测试'
            },
            {
                id: '2',
                name: 'chart2',
                type:'pie',
                group:'group2',
                title:'饼图测试'
            },
            {
                id: '3',
                name: 'chart3',
                type:'map',
                group:'group3',
                title:'地图测试'
            },
            {
                id: '4',
                name: 'table1',
                type:'table',
                group:'group4',
                title:'表格测试'
            }
        ];

        function randomData() {
            return Math.round(Math.random()*1000);
        }

        $rootScope.data.options ={
            chart1: {
                title: '折线图测试',
                option:{
                    tooltip: {},
                    legend: {
                        data:['活跃用户']
                    },
                    xAxis: {
                        data: ["04/20","04/21","04/22","04/23","04/24","04/25"]
                    },
                    yAxis: {},
                    series: [{
                        name: '活跃用户',
                        type: 'line',
                        data: [5, 20, 36, 10, 10, 20]
                    }]
                }
            },
            chart2:{
                title:'饼图测试',
                option:{
                    title: {
                        text: '职业分布',
                        left: 'center',
                        top: 20,
                        textStyle: {
                            color: '#ccc'
                        }
                    },

                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },

                    visualMap: {
                        show: false,
                        min: 80,
                        max: 600,
                        inRange: {
                            colorLightness: [0, 1]
                        }
                    },
                    series : [
                        {
                            name:'人数',
                            type:'pie',
                            radius : '55%',
                            center: ['50%', '50%'],
                            data:[
                                {value:335, name:'教师'},
                                {value:310, name:'工人'},
                                {value:274, name:'医生'},
                                {value:235, name:'学生'},
                                {value:400, name:'农民'}
                            ].sort(function (a, b) { return a.value - b.value}),
                            roseType: 'angle',
                        }
                    ]
                }
            },
            chart3:{
                title:'地图测试',
                option:{
                    title : {
                        text: '网络延迟',
                        x:'center'
                    },
                    tooltip : {
                        trigger: 'item'
                    },
                    legend: {
                        orient: 'vertical',
                        x:'left',
                        data:['时间（ms）']
                    },
                    dataRange: {
                        min: 0,
                        max: 2500,
                        x: 'left',
                        y: 'bottom',
                        text:['高','低'],
                        calculable : true
                    },

                    series : [
                        {
                            name: '时间（ms）',
                            type: 'map',
                            mapType: 'china',
                            roam: false,
                            itemStyle:{
                                normal:{label:{show:true}},
                                emphasis:{label:{show:true}}
                            },
                            data:[
                                {name: '北京',value: Math.round(Math.random()*1000)},
                                {name: '天津',value: Math.round(Math.random()*1000)},
                                {name: '上海',value: Math.round(Math.random()*1000)},
                                {name: '重庆',value: Math.round(Math.random()*1000)},
                                {name: '河北',value: Math.round(Math.random()*1000)},
                                {name: '河南',value: Math.round(Math.random()*1000)},
                                {name: '云南',value: Math.round(Math.random()*1000)},
                                {name: '辽宁',value: Math.round(Math.random()*1000)},
                                {name: '黑龙江',value: Math.round(Math.random()*1000)},
                                {name: '湖南',value: Math.round(Math.random()*1000)},
                                {name: '安徽',value: Math.round(Math.random()*1000)},
                                {name: '山东',value: Math.round(Math.random()*1000)},
                                {name: '新疆',value: Math.round(Math.random()*1000)},
                                {name: '江苏',value: Math.round(Math.random()*1000)},
                                {name: '浙江',value: Math.round(Math.random()*1000)},
                                {name: '江西',value: Math.round(Math.random()*1000)},
                                {name: '湖北',value: Math.round(Math.random()*1000)},
                                {name: '广西',value: Math.round(Math.random()*1000)},
                                {name: '甘肃',value: Math.round(Math.random()*1000)},
                                {name: '山西',value: Math.round(Math.random()*1000)},
                                {name: '内蒙古',value: Math.round(Math.random()*1000)},
                                {name: '陕西',value: Math.round(Math.random()*1000)},
                                {name: '吉林',value: Math.round(Math.random()*1000)},
                                {name: '福建',value: Math.round(Math.random()*1000)},
                                {name: '贵州',value: Math.round(Math.random()*1000)},
                                {name: '广东',value: Math.round(Math.random()*1000)},
                                {name: '青海',value: Math.round(Math.random()*1000)},
                                {name: '西藏',value: Math.round(Math.random()*1000)},
                                {name: '四川',value: Math.round(Math.random()*1000)},
                                {name: '宁夏',value: Math.round(Math.random()*1000)},
                                {name: '海南',value: Math.round(Math.random()*1000)},
                                {name: '台湾',value: Math.round(Math.random()*1000)},
                                {name: '香港',value: Math.round(Math.random()*1000)},
                                {name: '澳门',value: Math.round(Math.random()*1000)}
                            ]
                        }
                    ]
                }
            }

        };

        $rootScope.data.locations =[
            [],
            [],
            [],
            [],
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