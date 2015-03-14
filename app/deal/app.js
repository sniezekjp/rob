
var app = angular.module('app');

app.config(function($stateProvider) {

  $stateProvider.state('deals', {
    url: '/deals',
    controller: 'DealController',
    templateUrl: 'app/deal/views/deals.tpl.html'
  });

  $stateProvider.state('deals.list', {
    url: '/list',
    templateUrl: 'app/deal/views/list.tpl.html'
  }); 

  $stateProvider.state('deals.new', {
    url: '/new',
    templateUrl: 'app/deal/views/edit.tpl.html'
  });

  $stateProvider.state('deals.edit', {
    url: '/edit',
    templateUrl: 'app/deal/views/edit.tpl.html'
  });
});