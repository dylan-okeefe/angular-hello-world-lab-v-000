function MainController($scope) {
  $scope.name = 'dylan';
  $scope.email = 'dylan@email.com';
  $scope.phone = '5555555';
}

angular
  .module('app')
  .controller('MainController', MainController);