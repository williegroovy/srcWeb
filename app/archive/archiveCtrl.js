(function() {
    "use strict"
    angular
        .module("pageManagement")
        .controller("ArchiveCtrl",
        ["$scope", ArchiveCtrl]);

    function ArchiveCtrl() {
        var vm = this;

        vm.wakka = "wakka flakka";
    }
}());