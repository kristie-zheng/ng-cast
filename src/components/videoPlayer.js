angular.module('video-player')

  .component('videoPlayer', {
    // TODO
    bindings: {
      video: '<',
      noVideoElement: '<'
    },
    templateUrl: 'src/templates/videoPlayer.html'
  });
