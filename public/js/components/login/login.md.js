((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider
            .state('app.login', {
                url: '',
                abstract: true,
                template: '<login></login>'
            })
            .state('app.login.connect', {
                url: '/login',
                template: '<connect></connect>'
            })
            .state('app.login.create', {
                url: '/new/account',
                template: '<account></account>'
            })
    }])
})(require('angular').module('app.login', []))
