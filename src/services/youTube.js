angular.module('video-player')
  .service('youTube', function($http) {
    var scope = this;
    scope.method = 'GET',
    scope.url = 'https://www.googleapis.com/youtube/v3/search',
    scope.result = null,
    scope.search = function (query, callback) {
      // TODO
      $http({
        url: scope.url,
        method: scope.method,
        params: {
          key: window.YOUTUBE_API_KEY,
          maxResults: 5,
          q: query,
          part: 'snippet',
          type: 'video',
          videoEmbeddable: 'true'
        },
      }).
        then(
          function (response) {
            var data = response.data.items;
            // console.log("Success: " + JSON.stringify(data));
            callback(data);
          },
          function (response) {
            var data = response.data.items || "Request failed";
            var status = response.status;
            console.error("Error: " + JSON.stringify(data));
          }
        );
    };
  });