angular.module('app')
.factory('DealService', function(ENV, $http) {
  
  var prefix = '/deal';

  return {
    create: function(account) {
      return $http.post(ENV.apiUrl + prefix, account); 
    },

    update: function(id, account) {
      return $http.put(ENV.apiUrl + prefix + '/' + id, account);
    },
    
    getAll: function() {
      return $http.get(ENV.apiUrl + prefix);
    },
    
    find: function(query) {

    },

    destroy: function(id) {
      return $http.delete(ENV.apiUrl + prefix + '/' + id);
    }
  };
});