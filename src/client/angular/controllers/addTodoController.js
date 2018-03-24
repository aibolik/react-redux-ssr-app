angular.module('todoApp').controller('addTodoController', ['$scope', '$http', '$location', function($scope, $http, $location) {
  $scope.loading = false;
  $scope.newTodo = '';

  $scope.addTodo = () => {
    let todo = {
      text: $scope.newTodo,
      done: false,
      createdAt: moment()
    };

    if(!todo.text) {
      alert('Text of todo is mandatory...');
      return;
    }

    $scope.loading = true;
    $http.post('https://sdubot.jsindev.party:1000/todos', todo)
      .then(res => {
        $scope.loading = false;
        $scope.newTodo = '';
        $location.path('/todos').hash('todos');
      });
  };
}]);
