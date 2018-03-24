import 'angular-route';
import './index.scss';
import moment from 'moment';
import uuid from 'uuid';
const app = angular.module('todoApp', ['ngRoute']);
import './controllers/todoListController';
import './controllers/addTodoController';
import './controllers/editTodoController';

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
        templateUrl: require('./views/addTodo.html'),
        controller: 'addTodoController'
      })
      .when('/todos/:todoId/edit', {
        templateUrl: require('./views/editTodo.html'),
        controller: 'editTodoController'
      })
      .when('/todos', {
        templateUrl: require('./views/todoList.html'),
        controller: 'todoListController'
      })
      .otherwise('/', {
        template: '<div>Home</div>'
      });
}]);


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
      this.tasksList[index].loading = true;
      return $http.put(`https://sdubot.jsindev.party:1000/todos/${this.tasksList[index]._id}`, { done: !this.tasksList[index].done })
        .then(res => {
          this.tasksList[index] = res.data;
          return res;
        });
    }
  };
}]);
