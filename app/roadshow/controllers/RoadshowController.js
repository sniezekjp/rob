angular.module('app')
.controller('RoadshowController', function($scope, RoadshowService, ENV) {
	
	$scope.roadshows = [];
	$scope.roadshow = {};

	$scope.order = 'id';

	$scope.getRoadshows = function() {
		RoadshowService.getAll().success(function(res) {
			$scope.roadshows = res;
		});
	};

	$scope.getRoadshows();

	$scope.edit = function(roadshow) {
	    $scope.roadshow = roadshow;
	    $state.go('.edit');    
  	};

	  $scope.update = function(roadshow) {
	    $scope.sendingRequest = true;
	    RoadshowService.update(roadshow.id, roadshow).success(function() {
	      $state.go('^');
	      $scope.getRoadshows();
	      $scope.roadshow = {};
	      $scope.sendingRequest = false;
	    });   
	  };

	  $scope.create = function(roadshow) {
	    $scope.sendingRequest = true;
	    RoadshowService.create(roadshow).success(function() {
	      $state.go('^');
	      $scope.getRoadshows();
	      $scope.roadshow = {};
	      $scope.sendingRequest = false;
	    });    
	  };

	  $scope.save = function(roadshow) {
	    var action = account.id ? "update" : "create";
	    $scope[action](calllog);
	  };

	$scope.delete = function(roadshow) {
		roadshow.delete = true;
		RoadshowService.destroy(roadshow.id);
	};

	$scope.filterDeleted = function(roadshow) {
		return !roadshow.delete;
	};


});