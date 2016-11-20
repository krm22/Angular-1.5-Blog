 angular.
module('app.carouselComponent', []).
component('carousel', {
  templateUrl: 'js/components/carouselList/carouselList.html',
  controller: function carouselController(postsService) {

            postsService.get().then((response) => {
                this.posts = response.data
            });

            this.add = (post) => {
                this.posts.push(this.posts),
                console.log('this has been added');
            };

            this.carouselstate  =  0
                  this.next = () => {
                      this.carouselstate  ==  this.posts.length  -  1  ?  this.carouselstate = 0 : this .carouselstate ++
                      console.log('searching next blog');
                  }

                  this.prev = () => {
                      this.carouselstate  <  1  ?  this.carouselstate  =  this.posts.length - 1 : this.carouselstate = 0 ;
                        console.log('searching prev blog');
                  }





        } //dont delete
}) //dont delete
