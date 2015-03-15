angular.module('app')
.factory('CallLogService', function($http, ENV) {
  var prefix = '/calllog';
  return {
    create: function(calllog) {
      return $http.post(ENV.apiUrl + prefix, calllog); 
    },

    update: function(id, calllog) {
      return $http.put(ENV.apiUrl + prefix + '/' + id, calllog);
    },
    
    getAll: function() {
      return $http.get(ENV.apiUrl + prefix);
    },

    list: function() {
      return $http.get(ENV.apiUrl + prefix + '/list');  
    },
    
    find: function(query) {
      return $http.post(ENV.apiUrl + prefix + '/find', query);
    },

    destroy: function(id) {
      return $http.delete(ENV.apiUrl + prefix + '/' + id);
    },

    import: function(content) {
      console.log(content);
      return $http.post(ENV.apiUrl + prefix + '/import', content);
    }
  };
});