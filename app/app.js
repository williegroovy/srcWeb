(function () {
    "use strict";

    var app = angular.module('pageManagement',
                            [   "ui.router",
                                "ui.mask",
                                "ui.bootstrap"
                            ]);

    app.config(["$stateProvider",
                "$urlRouterProvider",
                "$locationProvider",
                function($stateProvider, $urlRouterProvider, $locationProvider) {

                    $urlRouterProvider.otherwise("/");

                    $stateProvider

                    //Landing Page
                    .state("home", {
                        url: "/",
                            views: {
                                'top': {
                                    templateUrl: "app/top.html"
                                },

                                'menu@home': {
                                    templateUrl: "app/static/navbar.html"
                                },

                                'right': {
                                    templateUrl: "app/static/right.html"
                                },

                                'bottom': {
                                    templateUrl: "app/static/bottom.html"
                                },

                                'footer': {
                                    templateUrl: "app/static/footer.html"
                                }
                            }

                    })

                        .state("archive", {
                            url: "/archive",
                                views: {
                                    'top': {
                                        templateUrl: "app/archiveTop.html"
                                    },

                                    'menu@archive': {
                                        templateUrl: "app/static/navbar.html"
                                    },

                                    'right': {
                                        templateUrl: "app/static/right.html"
                                    },

                                    'bottom': {
                                        templateUrl: "app/static/bottom.html"
                                    },

                                    'footer': {
                                        templateUrl: "app/static/footer.html"
                                    }
                                }
                        })

                    $locationProvider.html5Mode(true);
                }]
    );
}());