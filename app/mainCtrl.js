(function() {
    "use strict"
    angular
        .module("pageManagement")
        .controller("MainCtrl",
        ["$scope", "toggleRightService", MainCtrl]);

    function MainCtrl($scope, toggleRightService) {
        var vm = this;

        vm.getOpenRight = toggleRightService.getOpenRight();

        vm.wakka = "wakka flakka";

        vm.toggleRight = function() {
            toggleRightService.toggle();
        }
    }
}());