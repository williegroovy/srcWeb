(function() {
    "use strict"

    angular
        .module("pageManagement")

        .factory("toggleData", function() {
            return {
                openRight: false
            };
        })

        .factory("toggleManager", function(toggleData) {
            return {
                toggleRight: function() {
                    toggleData.openRight = !toggleData.openRight;
                    console.log(toggleData.openRight);
                }
            };
        });
}());