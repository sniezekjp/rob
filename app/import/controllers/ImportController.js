angular.module('app')
.controller('ImportController', function($scope, AccountService, CallLogService) {

  $scope.importAccounts = function(content) {
    $scope.loading = true;
    AccountService.import(content).success(function(res) {
      console.log(res);
    }).finally(function() {
      $scope.loading = false;
    });
  };

  $scope.importCallLogs = function(content) {
    $scope.loading = true;
    CallLogService.import(content).success(function(res) {
      console.log(res);
    }).finally(function() {
      $scope.loading = false;
    });
  };

});