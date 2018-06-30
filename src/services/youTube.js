angular.module('video-player')
  .service('youTube', function($http) {
    var scope = this;
    scope.method = 'GET',
    scope.url = 'https://www.googleapis.com/youtube/v3/search',
    scope.params = {
      key: window.YOUTUBE_API_KEY,
      maxResults: 5,
      q: 'cat',
      part: 'snippet',
      type: 'video',
      videoEmbeddable: 'true'
    };
    scope.result = null,
    scope.search = function (callback) {
      // TODO
      
      $http({
        url: 'https://www.googleapis.com/youtube/v3/search',
        method: scope.method,
        // data: {
        //   q: 'cat'
        // },
        params: scope.params,
      }).
        then(
          function (response) {
            var data = response.data.items;
            console.log("Success: " + JSON.stringify(data));
            callback(data);
            // scope.result = data;
            // console.log(scope.result);
          },
          function (response) {
            var data = response.data.items || "Request failed";
            var status = response.status;
            console.error("Error: " + JSON.stringify(data));
          }
        );
    };
  });