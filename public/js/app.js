((app) => {

})(require('angular').module( 'app', [
    require('angular-ui-router'),
    require('angular-cookies'),
    require('angular-materialize'),
    'app.config',
    'app.services',
    'app.login',
    'app.home',
    'app.common',
    'app.blog'
]))
