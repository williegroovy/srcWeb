(function() {
    "use strict"
    angular
        .module("pageManagement")
        .controller("HomeCtrl",
                    ["$scope", HomeCtrl]);

    function HomeCtrl() {
        var vm = this;

        vm.wakka = "wakka flakka";
    }
}());