angular.module('video-player')

  .component('videoPlayer', {
    // TODO
    bindings: {
      video: '<'
    },
    controller: function() {
      // this.main = this.videos[0];
      // this.show = () => {
      //   this.video === undefined
      // }
      console.log('what vidplayer receiv', this.video);
    },
    templateUrl: 'src/templates/videoPlayer.html'
  });
