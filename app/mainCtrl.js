(function() {
    "use strict"
    angular
        .module("pageManagement")
        .controller("MainCtrl",
        ["$scope", "toggleService", MainCtrl]);

    function MainCtrl($scope, toggleService) {
        var vm = this;

        var ts = toggleService;

        vm.wakka = "wakka flakka";
        vm.openRight = false;
        $scope.openRight = false;

        vm.toggleRight = function() {
            toggleService.right();
            vm.openRight = toggleService.openRight;
            $scope.openRight = toggleService.openRight;
        }
    }
}());