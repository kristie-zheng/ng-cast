angular.module('video-player')

  .component('videoPlayer', {
    // TODO
    bindings: {
      mainVideo: '<'
    },
    controller: function() {
      // this.main = this.videos[0];
      console.log(this.mainVideo);
    },
    templateUrl: 'src/templates/videoPlayer.html'
  });
