(function() {
    "use strict"

    angular
        .module("pageManagement")
        .factory("toggleService", ToggleService);

    function ToggleService() {

        var toggle = {};

        toggle.openRight = false;

        toggle.right = function() {
            console.log(toggle.openRight);
            toggle.openRight = !toggle.openRight;
            console.log(toggle.openRight);
        }

        return toggle;
    }
}());