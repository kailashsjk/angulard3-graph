var module = angular.module('designThinking', ['ui.router', 'angularUtils.directives.uiBreadcrumbs']);

module.config(function($stateProvider, $locationProvider) {
   // $locationProvider.html5Mode(true);

    $stateProvider
        .state('home', {
        url: '^',
        views: {
        'main@': {
            templateUrl: 'partials/home.html',
            controller: 'carRecordController'
            }
        },
      data: {// This data is breadcrumbs properties
        displayName: 'Home'
      }
    })
    .state('home.projects', {
        url: 'projects/',
        views: {
        'main@': {
            templateUrl: 'partials/projects.html',
            controller: 'projectController'
            }
        },
      data: {// This data is breadcrumbs properties
        displayName: 'Projects'
      }
    })
    .state('home.projects.details', {
        url: 'details/',
        views: {
        'main@': {
            templateUrl: 'partials/details.html',
            controller: 'menuController'
            }/*,
        'details@': {
            templateUrl: 'partials/media.html'
            }*/
        },
      data: {// This data is breadcrumbs properties
        displayName: 'details'
      }
    })
    .state('home.projects.details.media', {
        url: 'media/',
        views: {
            'details@': {
            templateUrl: 'partials/media.html'
            }
        },
      data: {// This data is breadcrumbs properties
        displayName: 'media'
      }
    })
    .state('home.projects.details.observation', {
        url: 'observation/',
        views: {
            'details@': {
            templateUrl: 'partials/observation.html'
            }
        },
      data: {// This data is breadcrumbs properties
        displayName: 'observation'
      }
    })
    .state('home.projects.details.empathy', {
        url: 'empathy/',
        views: {
            'details@': {
            templateUrl: 'partials/empathy.html'
            }
        },
      data: {// This data is breadcrumbs properties
        displayName: 'empathy'
      }
    })
    .state('home.projects.details.ideas', {
        url: 'ideas/',
        views: {
            'details@': {
            templateUrl: 'partials/ideas.html'
            }
        },
      data: {// This data is breadcrumbs properties
        displayName: 'ideas'
      }
    })
    .state('home.projects.details.idea_Feedback', {
        url: 'idea_Feedback/',
        views: {
            'details@': {
            templateUrl: 'partials/ideaFeedback.html'
            }
        },
      data: {// This data is breadcrumbs properties
        displayName: 'idea_Feedback'
      }
    })
    .state('home.projects.details.prototype', {
        url: 'prototype/',
        views: {
            'details@': {
            templateUrl: 'partials/prototyping.html'
            }
        },
      data: {// This data is breadcrumbs properties
        displayName: 'prototype'
      }
    })
    .state('home.projects.details.prototype_Feedback', {
        url: 'prototype_Feedback/',
        views: {
            'details@': {
            templateUrl: 'partials/prototypeFeedback.html'
            }
        },
      data: {// This data is breadcrumbs properties
        displayName: 'prototype_Feedback'
      }
    })
    /*.state('home.users', {
      // this is a demonstration of how abstract states can be handled by this
      // directive. See the docs for a detailed explanation.
      abstract: true,
      data: {
        proxy: 'home.users.list'
      }
    })*/
});


 /* module.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/', {
                    templateUrl: 'partials/home.html',
                    controller: 'homeController'
                }).
                when('/brainStorm', {
                    templateUrl: 'partials/brainStorm.html',
                    controller: 'brainStormController'
                }).
                when('/ideas', {
                    templateUrl: 'partials/ideas.html',
                    controller: 'ideasController'
                }).
                when('/ideaFeedback', {
                    templateUrl: 'partials/ideaFeedback.html',
                    controller: 'ideaFeedbackController'
                }).
                when('/prototyping', {
                    templateUrl: 'partials/prototyping.html',
                    controller: 'prototypingController'
                }). 
                when('/prototypeFeedback', {
                    templateUrl: 'partials/prototypeFeedback.html',
                    controller: 'prototypeFeedbackController'
                }).
                otherwise({
                    redirectTo: '/'
                });
        }]);
        */