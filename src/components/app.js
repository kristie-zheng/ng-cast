angular.module('video-player')

  .component('app', {
    // TODO
    controller: function(youTube) {
      var thisApp = this;
      // thisApp.ytsearch = youTube.search;
      thisApp.videos = window.exampleVideoData;
      thisApp.currentVideo = thisApp.videos[0];
      thisApp.onClick = function (index) {
        // console.log(appp.videos[index])
        // console.log(this.currentVideo)
        thisApp.currentVideo = this.videos[index];
        // console.log(index, 'after the click event', appp.currentVideo)
      };
      thisApp.selectVideo = () => {
        
      };
      
      thisApp.processResults = (data) => {
        thisApp.videos = data;
        thisApp.currentVideo = data[0];
        // console.log(searchString);
      };

      thisApp.searchResults = (query) => {
        // console.log('search box text', query)
        youTube.search(query, thisApp.processResults);
        // console.log(youTube.result);
      };

      

    },
    templateUrl: 'src/templates/app.html'
  });
