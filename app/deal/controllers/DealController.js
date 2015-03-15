angular.module('app')
.controller('DealController', function($scope, DealService, $state, AccountService) {
  
  $scope.deals = [];
  $scope.deal = {};

  $scope.accounts = [];

  AccountService.getAll().success(function(accounts) {
    $scope.accounts = accounts;
  });

  $scope.getDeals = function() {
    DealService.getAll().success(function(res) {
      $scope.deals = res;
    });
  };

  $scope.getDeals();

  $scope.create = function(deal) {
    $scope.sendingRequest = true;
    DealService.create(deal).success(function() {
      $state.go('^');
      $scope.getDeals();
      $scope.deal = {};
      $scope.sendingRequest = false;
    });
  };

  $scope.update = function(deal) {
    $scope.sendingRequest = true;
    DealService.update(deal.id, deal).success(function() {
      $state.go('^');
      $scope.getAccounts();
      $scope.deal = {};
      $scope.sendingRequest = false;
    });
  };

  $scope.save = function(deal) {
    var action = deal.id ? "update" : "create";
    $scope[action](deal);
  };

  $scope.edit = function(deal) {
    $scope.deal = deal;
    $state.go('.edit');
  };

  $scope.delete = function(deal) {
    deal.delete = true;
    DealService.destroy(deal.id);
  };

  $scope.average = function(deal) {
    return (deal.rangeLow + deal.rangeHigh) / 2;
  };

  $scope.filterDeleted = function(deal) {
    return !deal.delete;
  };
});