
var app = angular.module('app');

app.config(function($urlRouterProvider, $stateProvider) {

  $stateProvider.state('accounts', {
    url: '/accounts',
    controller: 'AccountController',
    templateUrl: 'app/account/views/accounts.tpl.html'
  }); 

  $stateProvider.state('accounts.new', {
    url: '/new',
    templateUrl: 'app/account/views/edit.tpl.html'
  });

  $stateProvider.state('accounts.edit', {
    url: '/edit',
    templateUrl: 'app/account/views/edit.tpl.html'
  });
  
  $urlRouterProvider.otherwise('/accounts');
});