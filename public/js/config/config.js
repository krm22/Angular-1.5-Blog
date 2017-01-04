((app) => {
    'use strict'
    app.config(['$locationProvider', '$stateProvider', '$urlRouterProvider',

        function($locationProvider, $stateProvider, $urlRouterProvider) {
            $locationProvider.hashPrefix('!');
            $urlRouterProvider.otherwise('/');
            $stateProvider.state('app', {
                    url: '',
                    abstract: true,
                    template: '<navbar /><div class="container"><ui-view></ui-view></div>'
                }).state('callback', {
                    url: '/auth/callback/:token',
                    template: '',
                    controller: ['UsersService', '$stateParams', '$state', function(UsersService, $stateParams, $state) {
                        if ($stateParams.token) {
                            UsersService.setToken($stateParams.token).then((user) => {
                                let toastContent = `Welcome ${user.name} !`
                                Materialize.toast(toastContent, 4000, 'toast-success')
                                $state.go('app.blog.list')
                            })
                        } else {
                            $state.go('app.blog.list')
                        }
                    }]
                })
                .state('app.blog', {
                    template: '<home></home>',
                    url: '',
                    abstract: true,
                })
                .state('app.blog.list', {
                    template: '<blog-list></blog-list>',
                    url: '/'
                })
                .state('app.blog.item', {
                    url: '/blog/:id',
                    template: '<blog-item editable="true"></blog-item>'

                });
        }
    ]);

})(require('angular').module('app.config', []))
