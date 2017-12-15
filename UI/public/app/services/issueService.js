angular.module('issueService', [])

    .factory('Issues', ['$http', function($http) {
        return {
            get : function() {
              return $http.get('all_issues');
            },

            create : function(data) {
              var config = {
                             method: 'POST',
                             url: '/create',
                             headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                             data: $.param(data)
              }
      				return $http(config);
      			},

            edit : function(id) {
              var config = {
                              method: 'POST',
                              url: '/edit/' + id
              }
              return $http(config);
            },

            update : function(data) {
              var config = {
                              method: 'PUT',
                              url: '/update/'+data._id,
                              headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                              data: $.param(data)
              }
              return $http(config);
            },

            delete: function(id) {
              var config = {
                              method: 'DELETE',
                              url: 'issues/'+ id
              }
              return $http(config);
            }
        }

}]);
