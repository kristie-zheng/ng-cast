angular.module('video-player')

  .component('app', {
    // TODO
    controller: function() {
      var thisApp = this;
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
      thisApp.searchResults = () => {
      };
    },
    templateUrl: 'src/templates/app.html'
  });
