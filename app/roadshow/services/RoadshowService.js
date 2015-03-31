angular.module('app')
.factory('RoadshowService', function($http, ENV) {
  var prefix = '/roadshow';
  return {
    create: function(roadshow) {
      return $http.post(ENV.apiUrl + prefix, roadshow); 
    },

    update: function(id, roadshow) {
      return $http.put(ENV.apiUrl + prefix + '/' + id, roadshow);
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