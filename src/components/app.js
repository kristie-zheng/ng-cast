angular.module('video-player')

  .component('app', {
    // TODO
    controller: function(youTube) {
      var thisApp = this;
      // thisApp.ytsearch = youTube.search;
      thisApp.videos = window.exampleVideoData;
      thisApp.currentVideo = window.exampleVideoData[0];
      thisApp.onClick = function (index) {
        // console.log(appp.videos[index])
        // console.log(this.currentVideo)
        thisApp.currentVideo = this.videos[index];
        // console.log(index, 'after the click event', appp.currentVideo)
      };
      thisApp.selectVideo = () => {
        
      };
      thisApp.searchResults = (query) => {
        //thisApp.ytsearch(query)
        youTube.search(query);
      };
    },
    templateUrl: 'src/templates/app.html'
  });
