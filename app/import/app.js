angular.module('app')
.config(function($stateProvider) {
  $stateProvider.state('import', {
    url: '/import',
    controller: 'ImportController',
    templateUrl: 'app/import/views/import.tpl.html'
  });
});