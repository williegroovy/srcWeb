(function() {
    "use strict"

    angular
        .module("toggle.service")
        .factory('toggleRightService', toggle);

    function toggle(data) {

        return !data;
    }
}());