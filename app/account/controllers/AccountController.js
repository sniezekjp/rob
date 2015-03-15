angular.module('app')
.controller('AccountController', function($scope, AccountService, $state, BrokerService) {
	
	$scope.accounts = [];
	$scope.account = {};

	$scope.order = 'id';

	$scope.brokers = [];
	$scope.selected = {};

	BrokerService.findAll().success(function(res) {
		$scope.brokers = res;
		$scope.brokers.unshift({ id: null, first: "No", last: "Broker"});
	});

	$scope.asBroker = function(broker) {
		return broker.first + " " + broker.last;
	};

	$scope.getAccounts = function() {
		AccountService.getAll().success(function(res) {
			$scope.accounts = res;
		});
	};

	$scope.getAccounts();

	$scope.search = function(name) {
		AccountService.find({
			name: {
				contains: name
			}
		}).success(function(res) {
			$scope.accounts = res;
		});
	}

	$scope.create = function(account) {
		$scope.sendingRequest = true;
		AccountService.create(account).success(function() {
			$state.go('^');
			$scope.getAccounts();
			$scope.account = {};
			$scope.sendingRequest = false;
		});
	};

	$scope.update = function(account) {
		$scope.sendingRequest = true;
		AccountService.update(account.id, account).success(function() {
			$state.go('^');
			$scope.getAccounts();
			$scope.account = {};
			$scope.sendingRequest = false;
		});
	};

	$scope.save = function(account) {
    var action = account.id ? "update" : "create";
    $scope[action](account);
  };

	$scope.edit = function(account) {
		$scope.account = account;
		$state.go('.edit');
	};

	$scope.delete = function(account) {
		account.delete = true;
		AccountService.destroy(account.id);
	};

	$scope.filterDeleted = function(account) {
		return !account.delete;
	};

	$scope.resetSelected = function() {
		$scope.selected = {};
		$scope.getAccounts();
		page = 1;
	};

	$scope.byBroker = function(account) {
		if(!$scope.selected.broker) { return true; }
		if($scope.selected.broker.id === null) {
			return !account.broker || !account.broker.id;
		}
		return account.broker.id === $scope.selected.broker.id;
	};

	var page = 1;
	var fetching = false;
	$(window).bind('scroll', function() {
		if(fetching) { return; }
	  if($(window).scrollTop() + $(window).height() == $(document).height()) {
	  	fetching = true;
	  	if($scope.selected.broker) {
	  		var query = {
	  			where: { broker: $scope.selected.broker.id },
	  			skip: (page * 30)
	  		};
		    AccountService.find(query).success(function(brokerAccounts) {
		    	angular.forEach(brokerAccounts, function(account) {
		    		$scope.accounts.push(account);
		    	});
		    	fetching = false;
		    	page++;
		    });
	  	} else {
		    AccountService.page(page).success(function(res) {
		    	angular.forEach(res, function(account) {
		    		$scope.accounts.push(account);
		    	});
		    	fetching = false;
		    	page++;
		    });
		  }
	  }
	});

	$scope.$on('$destroy', function() {
		$(window).unbind('scroll');
	});

	$scope.$watch('selected.broker', function(newV) {
		if(!newV) { return; }
		var query = {
			where: { broker: newV.id }
		};
    AccountService.find(query).success(function(brokerAccounts) {
    	$scope.accounts = brokerAccounts;
    	page = 1;
    });
	}, true);
});