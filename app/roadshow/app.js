
var app = angular.module('app');

app.config(function($urlRouterProvider, $stateProvider) {

  $stateProvider.state('roadshow', {
    url: '/roadshow',
    controller: 'RoadshowController',
    templateUrl: 'app/roadshow/views/roadshow.tpl.html'
  }); 

});