angular.module('video-player')

  .component('app', {
    // TODO
    controller: function(youTube) {
      var thisApp = this;
      thisApp.videos = window.exampleVideoData;
      thisApp.currentVideo = undefined;
      thisApp.noVideoElement = thisApp.currentVideo !== undefined;
      thisApp.onClick = function (index) {
        thisApp.currentVideo = this.videos[index];
      };
      thisApp.selectVideo = () => {
        
      };
      
      thisApp.processResults = (data) => {
        thisApp.videos = data;
        thisApp.currentVideo = data[0];
      };

      thisApp.searchResults = (query) => {
        youTube.search(query, thisApp.processResults);
      };

      thisApp.init = () => {
        youTube.search('', thisApp.processResults);
      };

      thisApp.init();

    },
    templateUrl: 'src/templates/app.html'
  });
