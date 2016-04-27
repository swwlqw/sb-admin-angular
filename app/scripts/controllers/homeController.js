angular.module('sbAdminApp')
    .controller('homeController', function ($scope, $rootScope) {
        $rootScope.generate = function(n){
            var chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
            var res = "";
            for(var i = 0; i < n ; i++) {
                var id = Math.ceil(Math.random()*35);
                res += chars[id];
            }
            return res;
        };

        $rootScope.data = {
            appIndex : 3,
            apps: [
                {
                    id: 1,
                    grant:'创建者',
                    name: 'APP1',
                    appKey: $rootScope.generate(10),
                    appSecret: $rootScope.generate(20),
                    description: '测试用的APP'
                },
                {
                    id: 2,
                    grant:'管理员',
                    name: 'APP2',
                    appKey:$rootScope.generate(10),
                    appSecret:$rootScope.generate(20),
                    description: '第二个APP的描述信息'
                }
            ],
            groupIndex: 5,
            groups: [
                {
                    id: 1,
                    name:'group1',
                    description:'测试数据组1',
                    length: 2,
                    subs: [
                        {name:'sireal', type:'字符串'},
                        {name:'time', type:'时间'}
                    ]
                },
                {
                    id: 2,
                    name:'group2',
                    description:'测试数据组2',
                    length: 1,
                    subs: [
                        {
                            name:'job',
                            type:'枚举',
                            remark:'工人,教师,医生,学生,农民'
                        }
                    ]
                },
                {
                    id: 3,
                    name:'group3',
                    description:'测试数据组3',
                    length: 2,
                    subs: [
                        {name:'province', type:'枚举'},
                        {name:'value', type:'数字'}
                    ]
                },
                {
                    id: 4,
                    name:'group4',
                    description:'测试数据组4',
                    length: 4,
                    subs: [
                        {name:'data1', type:'数字'},
                        {name:'data2', type:'数字'},
                        {name:'count', type:'数字'},
                        {name:'time', type:'时间'}
                    ]
                }
            ]
        };

    });