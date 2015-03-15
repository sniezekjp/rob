angular.module('app')
.controller('CustomAccountController', function($scope, AccountService, CustomAccountService, ENV, $state) {
  $scope.custom = {};
  $scope.customAccounts = [];

  $scope.data = {
    selected: {}
  };

  $scope.getAccounts = function() {
    CustomAccountService.getAll().success(function(res) {
      $scope.customAccounts = res;
    });
  };

  $scope.getAccounts();

  $scope.url = ENV.apiUrl + '/account/search?name=';

  $scope.delete = function(custom) {
    
  };

  $scope.create = function(account) {
    $scope.sendingRequest = true;
    CustomAccountService.create(account).success(function() {
      $state.go('^');
      $scope.getAccounts();
      $scope.custom = {};
      $scope.sendingRequest = false;
    });
  };

  $scope.update = function(account) {
    $scope.sendingRequest = true;
    CustomAccountService.update(account.id, account).success(function() {
      $state.go('^');
      $scope.getAccounts();
      $scope.custom = {};
      $scope.sendingRequest = false;
    });
  };  

  $scope.save = function(custom) {
    var action = custom.id ? "update" : "create";
    $scope[action](custom);
  };

  $scope.edit = function(custom) {
    $scope.custom = custom;
    if(custom.formal) {
      $scope.data.selected.originalObject = custom.formal;
    }
    $state.go('.edit');
  };

  $scope.$watch('data.selected.originalObject', function(newV) {
    if(!newV) { return; }
    $scope.custom.formal = newV.id;
  }, true);
});