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
                            views: {
                                'body': {
                                    templateUrl: "app/landing.html"
                                },

                                'right': {
                                    templateUrl: "app/right.html"
                                },

                                'bottom': {
                                    templateUrl: "app/bottom.html"
                                },

                                'footer': {
                                    templateUrl: "app/footer.html"
                                }
                            }

                    })

                    .state("login", {
                        url: "/login",
                        templateUrl: "app/login.html"
                    })
                }]
    );
}());