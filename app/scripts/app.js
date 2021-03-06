'use strict';

/**
 * @ngdoc overview
 * @name sigepodApp
 * @description
 * # sigepodApp
 *
 * Main module of the application.
 */
angular
  .module('sigepodApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html'
      })
      .state('dashboard',{
        url: '/dashboard',
        templateUrl: 'views/dashboard.html'
      })
      .state('dashboard.jefe',{
        url: '/jefe',
        views: {
          option: {
            templateUrl: 'views/jefe.html'
          }
        }
      })
      .state('dashboard.coordcentro',{
        url: '/coordcentro',
        views: {
          option: {
            templateUrl: 'views/coordcentro.html'
          }
        }
      })
      .state('dashboard.coordmateria',{
        url: '/coordmateria',
        views: {
          option: {
            templateUrl: 'views/coordmateria.html'
          }
        }
      })
      .state('dashboard.profesor',{
        url: '/profesor',
        views: {
          option: {
            templateUrl: 'views/profesor.html'
          }
        }
      })
      .state('dashboard.preparador',{
        url: '/preparador',
        views: {
          option: {
            templateUrl: 'views/preparador.html'
          }
        }
      })
      .state('dashboard.estudiante',{
        url: '/estudiante',
        views: {
          option: {
            templateUrl: 'views/estudiante.html'
          }
        }
      });
  });
