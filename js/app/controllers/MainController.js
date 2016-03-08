
function MainController($scope) {
  $scope.name = 'Dee';
  $scope.email = 'dee@dee.com';
  $scope.phone = '01234567890';
}

angular
  .module('app')
  .controller('MainController', MainController);