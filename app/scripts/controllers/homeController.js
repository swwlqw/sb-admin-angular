angular.module('sbAdminApp')
    .controller('homeController', function ($rootScope) {
        $rootScope.data = {
            apps: [
                {
                    id: 1,
                    name: 'APP1',
                    description: '描述1',
                },
                {
                    id: 2,
                    name: 'APP2',
                    description: '描述2',
                }
            ]
        }
    });