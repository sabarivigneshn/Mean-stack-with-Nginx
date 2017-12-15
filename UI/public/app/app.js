var app = angular.module('app', ['ui.router','ui.bootstrap','ngDialog','issueService']);

app.config(function($stateProvider,$urlRouterProvider){

  $urlRouterProvider.otherwise('/home');

  $stateProvider

  .state('home', {
    url: '/home',
    templateUrl: "app/views/home.html"
    // templateUrl: 'home.html'
  })

  .state('home.list',{
    url: '/list',
    templateUrl: 'app/views/list.html',
    controller: function($scope) {
      $scope.cars = ["Duster","i20","Rapid"];
    }
  })

  .state('home.paragraph',{
      url: '/paragraph',
      template: "<h3>This is paragraph rendered from nested view</h3>"
  })

  .state('about', {
    url: '/about',
    views: {
      //main template
          '': { templateUrl: 'app/views/about.html' },
      //child template
        'columnOne@about' : {template: "I am column one"},

        'columnTwo@about' : {
          templateUrl: 'app/views/table-data.html',
          controller: 'tabController'
        }

    }

  })

  .state('issues',{
    url: '/issues',
    templateUrl: 'app/views/issues.html',
    controller: 'issueController'
  })

  .state('new',{
    url: '/new',
    templateUrl: 'app/views/issues/new.html',
    controller: 'issueController'
  })

  .state('show',{
    url: '/show',
    templateUrl: 'app/views/issues/show.html',
    controller: 'issueController'
  })
  ;
});
