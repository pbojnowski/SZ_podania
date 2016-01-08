'use strict';
angular.module('clash-of-clans-calculator')
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
            // For any unmatched url, redirect to /state1
            $urlRouterProvider.otherwise("/login");
            // Now set up the states
            $stateProvider
                    .state('Login panel', {
                        url: "/login",
                        templateUrl: "views/login.html"
                    })
                    .state('User Panel', {
                        url: "/panel",
                        templateUrl: "views/panel.html"
                    })
                    // Children of User Panel
                    .state('Strona główna', {
                        parent: 'User Panel',
                        url: "/main",
                        templateUrl: "views/main.html"
                    })
                    // Student
                    .state('Złóż podanie', {
                        parent: 'User Panel',
                        url: "/send",
                        templateUrl: "views/student/send.html"
                    })
                    .state('Status podań', {
                        parent: 'User Panel',
                        url: "/status",
                        templateUrl: "views/student/status.html"
                    })
                    // Worker
                    .state('Status podań worker', {
                        parent: 'User Panel',
                        url: "/status-w",
                        templateUrl: "views/worker/status.html"
                    })
                    .state('Edytuj regulamin worker', {
                        parent: 'User Panel',
                        url: "/edit",
                        templateUrl: "views/worker/edit.html"
                    });
        }]);