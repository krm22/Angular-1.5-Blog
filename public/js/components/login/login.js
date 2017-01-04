((app) => {
    'use strict'
    app.component('login', {
        templateUrl: 'js/components/login/login.html',
        controller: ['$state', function($state) {
            let $ctrl = this
            $ctrl.state = $state
        }]
    })
})(require('angular').module('app.login'))
