
var app = angular.module('app');

app.config(function($stateProvider) {

  $stateProvider.state('dashboard', {
    url: '/dashboard',
    controller: 'DashboardController',
    templateUrl: 'app/dashboard/views/dashboard.tpl.html'
  });

});