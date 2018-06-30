angular.module('video-player')
  .service('youTube', function() {
    this.method = 'GET',
    this.url = 'https://www.googleapis.com/youtube/v3/search',
    this.params = {
      key: window.YOUTUBE_API_KEY,
      maxResults: 5,
      query: ''
    };
    this.search = function () {
      // TODO
      
      $http({
        url: this.URL,
        method: this.method,
        data: {
          q: ''
        },
        params: this.params,
      }).
        then(
          function (response) {
            var data = response.data;
            console.log("Success: " + JSON.stringify(data));
          },
          function (response) {
            var data = response.data || "Request failed";
            var status = response.status;
            console.error("Error: " + JSON.stringify(data));
          }
        );
    };

    // this.params = {
    //   key: window.YOUTUBE_API_KEY, 
    //   maxResults: 5, 
    //   query: query
    // }
    // this.search = function (query) {
    //   console.log('it executed the search')
    //   $http = {};
    //   then(function(response) {
    //     console.log(response)
    //   //   this.status = response.status;
    //   //   this.data = response.data;
    //   // }, function(response) {
    //   //   this.data = response.data || 'Request failed';
    //   //   this.status = response.status;
    //   }
    // 
  });