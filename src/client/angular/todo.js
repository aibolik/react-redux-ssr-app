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
//               {{task.text}}
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
      text: 'Yesterdays\' task',
      done: false,
      createdAt: moment().subtract(1, 'days')
    },
    {
      id: 1,
      text: 'A week ago',
      done: true,
      createdAt: moment().subtract(7, 'days')
    },
    {
      id: 2,
      text: 'Today\'s task',
      done: false,
      createdAt: moment()
    },
  ];

  return {
    getTasks() {
      return tasksList;
    },
    getFilteredTasks(minutesDiff) {
      return tasksList.filter(item => {
        return moment().diff(moment.unix(item.createdAt), 'minutes') < minutesDiff;
      });
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
  $scope.completedTasks = todoFactory.getCompletedTasks();
  $scope.newTasks = todoFactory.getNewTasks();
  $scope.newTaskName = '';
  $scope.filter = -1;

  $scope.addTask = () => {
    todoFactory.addTask($scope.newTaskName);
    $scope.newTaskName = '';
  };

  $scope.completeTask = (task) => {
    todoFactory.completeTask(task);
    $scope.completedTasks = todoFactory.getCompletedTasks();
    $scope.newTasks = todoFactory.getNewTasks();
  };

  $scope.dateFilter = task => {
    if($scope.filter === -1) return true;
    return Math.abs(moment(task.createdAt).diff(moment(), 'days')) <= $scope.filter;
  };

  $scope.changeFilter = filter => {
    $scope.filter = filter;
  };

}]);
