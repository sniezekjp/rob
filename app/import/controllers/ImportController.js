angular.module('app')
.controller('ImportController', function($scope, AccountService) {
  $scope.content = "test content";

  $scope.importAccounts = function() {
    AccountService.import($scope.content).success(function(res) {
      console.log(res);
    });
  };
});