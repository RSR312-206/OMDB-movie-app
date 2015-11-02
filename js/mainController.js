app.controller("mainController", function($http, $scope, $routeParams) {
  $scope.movie = '';
  $scope.findMovie = function(value) {
    var movie = $scope.movie;
    $http.get("http://www.omdbapi.com/?s=" + movie + "&type=" + value + "&plot=full&r=json").then(function(data){
      $scope.results = data.data.Search;
    })
  }
  $http.get("http://www.omdbapi.com/?i=" + $routeParams.id + "&tomatoes=true&plot=full&r=json").then(function(data) {
    $scope.uniqueMovie = data.data;
  })
})

