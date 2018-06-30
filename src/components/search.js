angular.module('video-player')

  .component('search', {
    // TODO
    bindings: {
      result: "<",
      ytsearch: "<"
    },
    controller: function (youTube) {

    },
    templateUrl: 'src/templates/search.html'
  });
