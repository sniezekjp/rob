
var app = angular.module('app');

app.config(function($stateProvider) {
  $stateProvider.state('custom', {
    url: '/custom',
    templateUrl: 'app/customaccount/views/custom.tpl.html',
    controller: 'CustomAccountController'
  });

  $stateProvider.state('custom.list', {
    url: '/list',
    templateUrl: 'app/customaccount/views/list.tpl.html'
  }); 

  $stateProvider.state('custom.new', {
    url: '/new',
    templateUrl: 'app/customaccount/views/edit.tpl.html'
  });

  $stateProvider.state('custom.edit', {
    url: '/edit',
    templateUrl: 'app/customaccount/views/edit.tpl.html'
  });  

});