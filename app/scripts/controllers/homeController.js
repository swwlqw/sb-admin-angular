angular.module('sbAdminApp')
    .controller('homeController', function ($rootScope) {
        $rootScope.data = {
            apps: [
                {
                    id: 1,
                    grant:'创建者',
                    name: 'APP1',
                    description: '描述1'
                },
                {
                    id: 2,
                    grant:'管理员',
                    name: 'APP2',
                    description: '描述2'
                }
            ]
        }
    });