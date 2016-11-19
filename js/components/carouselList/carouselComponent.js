 angular.
module('app.carouselComponent', []).
component('carousel', {
  templateUrl: 'js/components/carouselList/carouselList.html',
  controller: function carouselController(postsService) {
            postsService.get().then((response) => {
                this.posts = response.data
            });

            this.add = (post) => {
                this.posts.push(response.data)
            };

            this.delete = (post, index) => {
                this.posts.splice(index, 1);
            };

            this.edit = (post, index) => {
                  post.editMode = true;
            };
        } //dont delete
}); //dont delete
