const app = angular.module('aurora', ['ngRoute']);

app.config(($routeProvider, $locationProvider) => {
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/home', {
        templateUrl: 'search.html'
      })
      .when('/search-customer', {
        templateUrl: 'search-customer.html'
      })
      .when('/new-order', {
        templateUrl: 'new-order.html'
      })
      .when('/all-reports', {
        templateUrl: 'all-reports.html'
      })
      .when('/debts-payments', {
        templateUrl: 'debts-payments.html'
      })
  });

  