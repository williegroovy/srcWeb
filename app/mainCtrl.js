(function() {
    "use strict"
    angular
        .module("pageManagement")
        .controller("MainCtrl",
        ["$scope", "toggleRightService", MainCtrl]);

    function MainCtrl($scope, toggleService) {
        $scope.wakka = "wakka flakka";

        $scope.toggleRight = function() {
            console.log("Toggle");
            toggleService.toggle($scope.toggleRight);
        }
    }
}());