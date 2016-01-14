(function() {
    "use strict"
    angular
        .module("pageManagement")
        .controller("MainCtrl",
        ["$scope", "toggleData", "toggleManager", MainCtrl]);

    function MainCtrl($scope, toggleData, toggleManager) {
        var vm = this;

        vm.wakka = "wakka flakka";

        $scope.td = toggleData;

        vm.toggleRight = toggleManager.toggleRight;
    }
}());