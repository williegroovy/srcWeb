(function () {
    "use strict";

    var app = angular.module('pageManagement',
                            [
                                "ui.router",
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
                                    templateUrl: "app/static/top.html",
                                    controller: "MainCtrl as vm"
                                },

                                'menu@home': {
                                    templateUrl: "app/static/navbar.html",
                                    controller: "MainCtrl as vm"
                                },

                                'right': {
                                    templateUrl: "app/static/right.html",
                                    controller: "MainCtrl as vm"
                                },

                                'bottom': {
                                    templateUrl: "app/static/bottom.html",
                                    controller: "MainCtrl as vm"
                                },

                                'footer': {
                                    templateUrl: "app/static/footer.html",
                                    controller: "MainCtrl as vm"
                                }
                            }
                    })

                        .state("archive", {
                            url: "/archive",
                                views: {
                                    'top': {
                                        templateUrl: "app/archive/archiveTop.html",
                                        controller: "MainCtrl as vm"
                                    },

                                    'menu@archive': {
                                        templateUrl: "app/static/navbar.html",
                                        controller: "MainCtrl as vm"
                                    },

                                    'right': {
                                        templateUrl: "app/static/right.html",
                                        controller: "MainCtrl as vm"
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