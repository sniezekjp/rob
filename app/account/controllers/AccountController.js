angular.module('app')
.controller('AccountController', function($scope, AccountService, $state) {
	
	$scope.accounts = [];
	$scope.account = {};

	$scope.getAccounts = function() {
		AccountService.list().success(function(res) {
			$scope.accounts = res;
		});
	};

	$scope.getAccounts();

	$scope.create = function(account) {
		$scope.sendingRequest = true;
		AccountService.create(account).success(function() {
			$state.go('^.list');
			$scope.getAccounts();
			$scope.account = {};
			$scope.sendingRequest = false;
		});
	};

	$scope.update = function(account) {
		$scope.sendingRequest = true;
		AccountService.update(account.id, account).success(function() {
			$state.go('^.list');
			$scope.getAccounts();
			$scope.account = {};
			$scope.sendingRequest = false;
		});
	};

	$scope.edit = function(account) {
		$scope.account = account;
		$state.go('^.edit');
	};

	$scope.delete = function(account) {
		account.delete = true;
		AccountService.destroy(account.id);
	};

	$scope.filterDeleted = function(account) {
		return !account.delete;
	};
});