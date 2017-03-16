angular.module('userProfiles')
.service('friendService', function( $http ) {


    this.login = function( user ) {
      return $http.post('/api/login', { user: user });
    };

    this.getFriends = function() {
        return $http.get('/api/profiles').then(function(response) {
            return response.data;
        });
    };

});



this.getMessages = function () {
        return $http.get('/messages');
      }
