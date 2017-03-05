angular.module('friendsList');
angular.module('friendsList').controller('mainCtrl', function ($scope) {
    $scope.friends = ['John', 'Matt', 'Andy', 'Zoey', 'Alex', 'Cassandra'];
    $scope.addFriend = function(){
        $scope.friends.push($scope.newFriend);
    }
});