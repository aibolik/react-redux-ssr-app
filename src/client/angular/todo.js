import 'angular-route';
import './index.scss';
import moment from 'moment';
// const app = angular.module('todoApp', [require('angular-route')]);
const app = angular.module('todoApp', ['ngRoute']);

app.filter('customDate', function() {
    return function(d) {
      return moment(d).format('DD/MM/YYYY hh:mm');
    };
});

// app.config(['$locationProvider', '$routeProvider',
// function config($locationProvider, $routeProvider) {
//     $locationProvider.hashPrefix('!');
//     $routeProvider.
//       when('/todos', {
//         template: `<div ng-controller='todoController'>
//           <h3>This is Todo app</h3>
//           <ul>
//             <li ng-repeat='task in tasks'>
//               {{task}}
//             </li>
//           </ul>
//         </div>`,
//         controller: 'todoController'
//       })
//       .otherwise('/', {
//         template: '<div>Home</div>'
//       });
// }]
// );

app.factory('todoFactory', () => {
  const tasksList = [
    {
      id: 0,
      text: 'Clean desk',
      done: false,
      createdAt: moment.unix(1521523754)
    },
    {
      id: 1,
      text: 'Do task',
      done: true,
      createdAt: moment.unix(1521523754)
    }
  ];

  return {
    getTasks() {
      return tasksList;
    },
    getCompletedTasks() {
      return tasksList.filter(item => item.done);
    },
    getNewTasks() {
      return tasksList.filter(item => !item.done);
    },
    addTask(text) {
      tasksList.push(text);
    },
    completeTask(task) {
      let index = tasksList.findIndex((el) => el === task);
      console.log(tasksList[index]);
      tasksList[index].done = !tasksList[index].done;
      console.log(tasksList[index]);
    }
  };
});

app.controller('todoController', ['$scope', 'todoFactory', ($scope, todoFactory) => {
  console.log('it is called');
  $scope.completedTasks = todoFactory.getCompletedTasks();
  $scope.newTasks = todoFactory.getNewTasks();
  $scope.newTaskName = '';

  $scope.addTask = () => {
    todoFactory.addTask($scope.newTaskName);
    $scope.newTaskName = '';
  };

  $scope.completeTask = (task) => {
    todoFactory.completeTask(task);
    $scope.completedTasks = todoFactory.getCompletedTasks();
    $scope.newTasks = todoFactory.getNewTasks();
  };

}]);
