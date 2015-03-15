angular.module('app')
.controller('CallLogController', function($scope, CallLogService) {

  $scope.calllogs = [];
  $scope.calllog = {};

  $scope.getCalllogs = function() {
    CallLogService.getAll().success(function(res) {
      $scope.calllogs = res;
    });
  };
  
  $scope.edit = function(calllog) {
    $scope.calllog = calllog;
    $state.go('.edit');    
  };

  $scope.update = function(calllog) {
    $scope.sendingRequest = true;
    CallLogService.update(calllog.id, calllog).success(function() {
      $state.go('^');
      $scope.getCalllogs();
      $scope.calllog = {};
      $scope.sendingRequest = false;
    });   
  };

  $scope.create = function(calllog) {
    $scope.sendingRequest = true;
    CallLogService.create(calllog).success(function() {
      $state.go('^');
      $scope.getCalllogs();
      $scope.calllog = {};
      $scope.sendingRequest = false;
    });    
  };

  $scope.save = function(calllog) {
    var action = account.id ? "update" : "create";
    $scope[action](calllog);
  };

  $scope.delete = function(calllog) {
    
  };
});