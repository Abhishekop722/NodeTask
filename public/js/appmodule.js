const appModule = angular.module('app',['ngRoute']);
appModule.constant('SUBMIT_URL','http://localhost:1234/submit');
appModule.constant('HISTORY_URL','http://localhost:1234/history');
appModule.config(['$routeProvider','$locationProvider',($routeProvider,$locationProvider)=>{
    $locationProvider.hashPrefix('');
    $routeProvider.when('/',{
        templateUrl:'../views/home.html'
    }).when('/history',{
        templateUrl:'../views/history.html'
    }).when('/show',{
        templateUrl:'../views/show.html'
    }).otherwise({
        template:"<h1>Wrong Url<h1>"
    });
}])