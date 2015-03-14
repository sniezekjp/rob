angular.module('app')
.directive('importFile', function() {
  return {
    scope: {
      content: "="
    },
    link: function($scope, elm) {
      elm.change(function(e) {
        var target = e.originalEvent.target;
        var reader = new FileReader();
        reader.onload = function(e) {
          $scope.content = Papa.parse(e.target.result);
          $scope.$apply();
        };
        reader.readAsText(target.files[0]);
      });
    }
  };
});