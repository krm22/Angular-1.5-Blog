angular.
module('app.blogComponent', []).
component('blog', {
    templateUrl: 'js/components/blogList/blogList.html',
    controller: function($stateParams, postsService) {

        postsService.get().then((response) => {
            this.blog = response.data[$stateParams.position];
        });

        this.add = (blog) => {
            this.blog.unshift(response.data);
        };

        this.delete = (blog, index) => {
            this.blog.splice(blog, 1);
            console.log("This blog is deleted")
        };

        this.editMode = (blog, index) => {
            this.blog.editMode = true;

        let date = new Date();
        this.hhmm = (new Date(), 'hh:mm');

        };
    }
}); //dont delete
