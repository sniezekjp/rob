angular.module('app')
.controller('CallLogController', function($scope, CallLogService, ENV) {
  $scope.calllog = {};
  $scope.calllogs = [];

  $scope.order = 'datetime';

  $scope.getCalllogs = function() {
    CallLogService.getAll().success(function(res) {
      $scope.calllogs = res;
    });
  };
  
  $scope.getCalllogs();

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
    calllog.delete = true;
    CallLogService.destroy(calllog.id);
  };

  $scope.filterDeleted = function(calllog) {
    return !calllog.delete;
  };

  // var page = 1;
  // var fetching = false;
  // $(window).bind('scroll', function() {
  //   if(fetching) { return; }
  //   if($(window).scrollTop() + $(window).height() == $(document).height()) {
  //     fetching = true;
  //     if($scope.selected.broker) {
  //       var query = {
  //         where: { broker: $scope.selected.broker.id },
  //         skip: (page * 30)
  //       };
  //       AccountService.find(query).success(function(brokerAccounts) {
  //         angular.forEach(brokerAccounts, function(account) {
  //           $scope.accounts.push(account);
  //         });
  //         fetching = false;
  //         page++;
  //       });
  //     } else {
  //       AccountService.page(page).success(function(res) {
  //         angular.forEach(res, function(account) {
  //           $scope.accounts.push(account);
  //         });
  //         fetching = false;
  //         page++;
  //       });
  //     }
  //   }
  // });


});