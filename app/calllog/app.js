
var app = angular.module('app');

app.config(function($stateProvider) {

  $stateProvider.state('calllog', {
    url: '/calllogs',
    controller: 'CallLogController',
    templateUrl: 'app/calllog/views/calllogs.tpl.html'
  }); 

  $stateProvider.state('calllog.new', {
    url: '/new',
    templateUrl: 'app/calllog/views/edit.tpl.html'
  });

  $stateProvider.state('calllog.edit', {
    url: '/edit',
    templateUrl: 'app/calllog/views/edit.tpl.html'
  });
  
});