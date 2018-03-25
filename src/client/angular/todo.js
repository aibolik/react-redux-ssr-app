import 'angular-route';
import './index.scss';
import moment from 'moment';
import uuid from 'uuid';
const app = angular.module('todoApp', ['ngRoute']);

app.filter('customDate', function() {
    return function(d) {
      return moment(d).format('DD/MM/YYYY hh:mm');
    };
});

app.config(['$locationProvider', '$routeProvider',
function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider
      .when('/articles', {
        templateUrl: require('./views/articles.html'),
        controller: 'articleController'
      })
      .when('/articles/add', {
        template: '<article-form action="ADD" article="article" on-add="addArticle(article)"></article-form>',
        controller: 'articleFormController'
      })
      .when('/articles/:articleId/edit', {
        template: '<article-form action="EDIT" article="article" on-edit="editArticle(article)"></article-form>',
        controller: 'articleFormController'
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

app.service('articleService', ['$http', function($http) {
  const API_ROOT = 'https://sdubot.jsindev.party:1000/';

  return {
    fetchArticles() {
      return $http.get(`${API_ROOT}blogs`)
        .then(res => {
          return res.data;
        });
    },
    addArticle(article) {
      return $http.post(`${API_ROOT}blogs`, article)
        .then(res => {
          console.log('Added article', res.data);
          return res.data;
        });
    },
    editArticle(article) {
      return $http.put(`${API_ROOT}blogs/${article._id}`, { text: article.text })
        .then(res => {
          console.log('Updated article', res.data);
          return res.data;
        });
    }
  };
}]);

app.factory('articleFactory', ['articleService', function(articleService) {

  return {
    articles: [],
    getArticles() {
      console.log('getarticles', this.articles);
      return this.articles.length === 0 ? articleService.fetchArticles().then(articles => {
        this.articles = articles.items;
        console.log('getarticles', this.articles);
        return this.articles;
      }) : Promise.resolve(this.articles);
    },
    getArticleById(articleId) {
      return this.getArticles().then(res => {
        return res.find((item) => item._id === articleId);
      })
    },
    addArticle(article) {
      return articleService.addArticle(article);
    },
    editArticle(article) {
      return articleService.editArticle(article);
    }
  };
}]);

app.controller('articleController', ['$scope', 'articleFactory', function($scope, articleFactory) {
  console.log('Ctrl init');
  articleFactory.getArticles().then(articles => {
    console.log('Articles retrieved', articles);
    $scope.articles = articles;
  });
}]);

app.controller('articleFormController', ['$scope', '$routeParams', 'articleFactory', '$location', function($scope, $routeParams, articleFactory, $location) {
  var $ctrl = this;
  let articleId = $routeParams.articleId;
  $scope.article = '';
  articleFactory.getArticleById(articleId).then(article => {
    $scope.article = article;
  });

  console.log('Article in form', $ctrl.article);

  $scope.addArticle = (article) => {
    articleFactory.addArticle(article).then(res => {
      $location.path('articles');
    });
  };
  $scope.editArticle = (article) => {
    articleFactory.editArticle(article).then(res => {
      $location.path('articles');
    })
  };

}]);

app.component('articleForm', {
  templateUrl: require('./views/articleForm.html'),
  bindings: {
    article: '=',
    action: '@',
    onEdit: '&',
    onAdd: '&'
  }
});

app.component('articlesList', {
  templateUrl: require('./views/articlesList.html'),
  bindings: {
    articles: '='
  }
});
