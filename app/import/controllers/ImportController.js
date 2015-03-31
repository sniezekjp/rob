angular.module('app')
.controller('ImportController', function($scope, AccountService, CallLogService, RoadshowService) {

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

  $scope.importRoadshow = function(content) {
    $scope.loading = true;
    RoadshowService.import(content).success(function(res) {
      console.log(res);
    }).finally(function() {
      $scope.loading = false;
    });
  };

});