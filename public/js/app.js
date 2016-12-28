((app) => {

})(require('angular').module( 'app', [
    require('angular-ui-router'),
    require('angular-cookies'),
    'app.config',
    'app.services',
    'app.home',
    'app.login',
    'app.blog'
]))
