((app) => {

    app.config(['$locationProvider', '$stateProvider', '$urlRouterProvider',

        function($locationProvider, $stateProvider, $urlRouterProvider) {
            $locationProvider.hashPrefix('!');
            $urlRouterProvider.otherwise('/');
            $stateProvider.state('app', {
                    template: '<home></home>',
                    url: '',
                    abstract: true
                })
                .state('app.carousel', {
                    template: '<carousel></carousel>',
                    url: '/'
                })
                .state('app.blog', {
                    template: '<blog></blog>',
                    url: '/blog/:position'
                });
        }
    ]);

})(angular.module('app.config', []))
