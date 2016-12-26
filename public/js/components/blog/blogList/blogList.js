((app) => {
    app.component('blogList', {
            templateUrl: 'js/components/blog/blogList/blogList.html',
            controller: function(postsService) {

                    postsService.get().then((response) => {
                        this.posts = response.data
                    });

                    this.add = (post) => {
                        this.posts.push(this.posts),
                            console.log('this has been added');
                    };

                    let date = new Date();
                    this.hhmm = (new Date(), 'hh:mm');


                    this.carouselstate = 3
                    this.loadMore = () => {
                        this.carouselstate += 3
                    };

             } //dont delete
        }); //dont delete
})(require('angular').module('app.blog'))
