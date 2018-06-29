angular.module('video-player')
  .component('videoList', {
    // TODO
    controller: function() {
      this.videos = window.exampleVideoData;
      this.onClick = function() {
        console.log(this.videos);
      };
    },
    templateUrl: 'src/templates/videoList.html'
  });
