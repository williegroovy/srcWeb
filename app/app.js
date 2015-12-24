(function () {
    "use strict";

    var app = angular.module('pageManagement',
                            [   "ui.router",
                                "ui.mask",
                                "ui.bootstrap"
                            ]);

    app.config(["$stateProvider",
                "$urlRouterProvider",
                function($stateProvider, $urlRouterProvider) {

                    $urlRouterProvider.otherwise("/");

                    $stateProvider

                    //Landing Page
                    .state("home", {
                        url: "/",
                        templateUrl: "app/landing.html"
                    })

                        .state("login", {
                            url: "/login",
                            templateUrl: "app/login.html"
                        })
                }]
    );
}());