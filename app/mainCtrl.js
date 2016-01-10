(function() {
    "use strict"
    angular
        .module("pageManagement")
        .controller("MainCtrl",
        ["$scope", MainCtrl]);

    function MainCtrl() {
        var vm = this;

        vm.wakka = "wakka flakka";
    }
}());