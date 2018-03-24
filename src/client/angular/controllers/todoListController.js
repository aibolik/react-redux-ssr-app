angular.module('todoApp').controller('todoListController', ['$scope', 'todoFactory', ($scope, todoFactory) => {
  todoFactory.getTasks().then(items => {
    todoFactory.tasksList = items;
    $scope.completedTasks = todoFactory.getCompletedTasks();
    $scope.newTasks = todoFactory.getNewTasks();
  });
  $scope.filter = -1;
  $scope.filteredText = '';

  $scope.completeTask = (task) => {
    todoFactory.completeTask(task)
      .then(res => {
        if (res.statusText === 'OK') {
          $scope.completedTasks = todoFactory.getCompletedTasks();
          $scope.newTasks = todoFactory.getNewTasks();
        } else {
          // Error handler
          task.loading = false;
        }
      });
  };

  $scope.dateFilter = task => {
    if($scope.filter === -1) return true;
    return Math.abs(moment(task.createdAt).diff(moment(), 'days')) <= $scope.filter;
  };

  $scope.textFilter = task => {
    if($scope.filteredText.length === 0) return true;
    return task.text.toLowerCase().indexOf($scope.filteredText.toLowerCase()) > -1;
  };

  $scope.changeFilter = filter => {
    $scope.filter = filter;
  };

}]);
