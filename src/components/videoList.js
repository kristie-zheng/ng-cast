angular.module('video-player')
  .component('videoList', {
    // TODO
    bindings: {
      videos: '<'
    },

    controller: function() {
      this.onClick = function(index) {
        console.log(index);
      };
    },
    templateUrl: 'src/templates/videoList.html'
  });
