angular.module('app')
.factory('BrokerService', function(ENV, $http) {
  var prefix = '/broker';
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

    list: function() {
      return $http.get(ENV.apiUrl + prefix + '/list');  
    },
    
    find: function(query) {

    },

    findAll: function() {
      return $http.get(ENV.apiUrl + prefix + '?limit=100');
    },

    destroy: function(id) {
      return $http.delete(ENV.apiUrl + prefix + '/' + id);
    },

    import: function(file) {
      return $http.post(ENV.apiUrl + prefix + '/import', file);
    }
  };
});