((app) => {

    app.service('postsService', function($http) {
        return {
            get() {
                return $http.get('mock/posts.json')
            },

            add(blog) {

            },

            delete(blog, index) {

            },

            edit(blog, index) {

            }
        }
    })

})(angular.module('app.services'))
