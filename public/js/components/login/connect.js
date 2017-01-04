((app) => {
    'use strict'
    app.component('connect', {
        templateUrl: 'js/components/login/connect.html',
        controller: ['UsersService', '$state', function(UsersService, $state) {
            let $ctrl = this
            angular.extend(this, {
                connect() {
                    UsersService.connect($ctrl.user).then((user) => {
                        let toastContent = `Welcome ${user.name} !`
                        Materialize.toast(toastContent, 4000, 'toast-success')
                        $state.go('app.blog.list')
                    }).catch((err)=>{
                      let toastContent = `Error : ${err.data} !`
                      Materialize.toast(toastContent, 4000, 'toast-error')
                    })
                }
            })
        }]
    })
})(require('angular').module('app.login'))
