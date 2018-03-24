angular.module('todoApp').controller('editTodoController', ['$scope', '$http', '$location', '$routeParams',
  function($scope, $http, $location, $routeParams) {
    $scope.loading = true;
    $scope.currentTodo = {};

    $http.get(`https://sdubot.jsindev.party:1000/todos/${$routeParams.todoId}`)
      .then(res => {
        $scope.currentTodo = res.data;
        $scope.loading = false;
      });

    $scope.editTodo = () => {
      let todo = {
        text: $scope.currentTodo.text,
      };

      if(!todo.text) {
        alert('Text of todo is mandatory...');
        return;
      }

      $scope.loading = true;
      $http.put(`https://sdubot.jsindev.party:1000/todos/${$scope.currentTodo._id}`, todo)
        .then(res => {
          $scope.loading = false;
          $location.path('/todos').hash('todos');
        });
    };
}]);
