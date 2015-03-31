angular.module('app')
.config(function($stateProvider) {
  $stateProvider.state('import', {
    url: '/import',
    controller: 'ImportController',
    templateUrl: 'app/import/views/import.tpl.html'
  });

  $stateProvider.state('import.accounts', {
    url: '/accounts',
    templateUrl: 'app/import/views/imports/accounts.tpl.html'
  });

  $stateProvider.state('import.calllogs', {
    url: '/calllogs',
    templateUrl: 'app/import/views/imports/calllogs.tpl.html'
  });

  $stateProvider.state('import.roadshow', {
    url: '/roadshow',
    templateUrl: 'app/import/views/imports/roadshow.tpl.html'
  });
});