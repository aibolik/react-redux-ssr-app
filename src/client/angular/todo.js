import 'angular-route';
import './index.scss';
import moment from 'moment';
import uuid from 'uuid';
// const app = angular.module('todoApp', [require('angular-route')]);
const app = angular.module('todoApp', ['ngRoute']);

app.filter('customDate', function() {
    return function(d) {
      return moment(d).format('DD/MM/YYYY hh:mm');
    };
});

app.config(['$locationProvider', '$routeProvider',
function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.
      when('/todos/add', {
        template: `
          <h3>Adding todo</h3>
          <form ng-submit="addTodo()" name='form'>
          <input id="new-todo" ng-model='newTodo' placeholder="What you need to do?">
          <input type="button" value="Add todo" ng-click="addTodo()" />
        </form>
        <div class='loading' ng-class='{"visible": loading}'></div>
        `,
        controller: 'addTodoController'
      })
      .when('/todos/:todoId/edit', {
        template: `
          <h3>Editing todo</h3>
          <form ng-submit="editTodo()" name='form'>
          <input id="edit-todo" ng-model='currentTodo.text' placeholder="Loading...">
          <input type="button" value="Edit todo" ng-click="editTodo()" />
        </form>
        <div class='loading' ng-class='{"visible": loading}'></div>
        `,
        controller: 'editTodoController'
      })
      .when('/todos', {
        template: `<h3>Todo list</h3>
        <a href='#!/todos/add' class='add-todo'>Add todo</a>
        <input ng-model='filteredText' placeholder="Sort by text">
        <ul>
          <h4>New todos</h4>
          <li ng-repeat='task in newTasks | filter:dateFilter | filter:textFilter' ng-click="completeTask(task)">
            <span class='tasks__item' ng-class='{"tasks__item--done": task.done}'>{{task.text}}</span>
            <span class='tasks__created-at'>created at {{task.createdAt | customDate}}</span>
            <a ng-href='#!/todos/{{task._id}}/edit' class='edit-todo'>Edit</a>
          </li>
        </ul>

        <ul>
          <h4>Completed todos</h4>
          <li ng-repeat='task in completedTasks | filter:dateFilter | filter:textFilter' ng-click="completeTask(task)">
            <span class='tasks__item' ng-class='{"tasks__item--done": task.done}'>{{task.text}}</span>
            <span class='tasks__created-at'>created at {{task.createdAt | customDate}}</span>
            <a ng-href='#!/todos/{{task._id}}/edit' class='edit-todo'>Edit</a>
          </li>
        </ul>
        <ul class='filter'>
          <li class='filter__item'
          ng-class='{"filter__item--active": filter === -1}'
          ng-click="changeFilter(-1)">All</li>
          <li class='filter__item'
          ng-class='{"filter__item--active": filter === 0}'
          ng-click="changeFilter(0)">Created Today</li>
          <li class='filter__item'
          ng-class='{"filter__item--active": filter === 1}'
          ng-click="changeFilter(1)">Created Last day</li>
          <li class='filter__item'
          ng-class='{"filter__item--active": filter === 7}'
          ng-click="changeFilter(7)">Created Last week</li>
        </ul>`,
        controller: 'todoListController'
      })
      .otherwise('/', {
        template: '<div>Home</div>'
      });
}]
);
app.directive('min20symbols', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$validators.lengthCheck = function(modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue)) {
          return true;
        }

        if (viewValue.length < 20) {
          return false;
        }
        return true;
      };
    }
  };
});

app.factory('todoFactory', ['$http', ($http) => {
  return {
    getTasks() {
      return $http.get('https://sdubot.jsindev.party:1000/todos').then(
        (res) => {
          return res.data.items;
        }
      );
    },
    getFilteredTasks(minutesDiff) {
      return this.tasksList.filter(item => {
        return moment().diff(moment.unix(item.createdAt), 'minutes') < minutesDiff;
      });
    },
    getCompletedTasks() {
      return this.tasksList.filter(item => item.done);
    },
    getNewTasks() {
      return this.tasksList.filter(item => !item.done);
    },
    addTodo(todo) {
      this.tasksList.push(todo);
    },
    completeTask(task) {
      let index = this.tasksList.findIndex((el) => el === task);
      this.tasksList[index].done = !this.tasksList[index].done;
    }
  };
}]);

app.controller('todoListController', ['$scope', 'todoFactory', ($scope, todoFactory) => {
  todoFactory.getTasks().then(items => {
    todoFactory.tasksList = items;
    console.log('tasksList', todoFactory.tasksList);
    $scope.completedTasks = todoFactory.getCompletedTasks();
    $scope.newTasks = todoFactory.getNewTasks();
    console.log(todoFactory.getCompletedTasks());
    console.log(todoFactory.getNewTasks());
  });
  $scope.filter = -1;
  $scope.filteredText = '';

  $scope.completeTask = (task) => {
    todoFactory.completeTask(task);
    $scope.completedTasks = todoFactory.getCompletedTasks();
    $scope.newTasks = todoFactory.getNewTasks();
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


app.controller('addTodoController', ['$scope', '$http', '$location', function($scope, $http, $location) {
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


app.controller('editTodoController', ['$scope', '$http', '$location', '$routeParams',
  function($scope, $http, $location, $routeParams) {
    $scope.loading = true;
    $scope.currentTodo = {};

    $http.get(`https://sdubot.jsindev.party:1000/todos/${$routeParams.todoId}`)
      .then(res => {
        console.log(res);
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
