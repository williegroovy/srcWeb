(function() {
    "use strict"

    angular
        .module("pageManagement")
        .service('toggleRightService', TRService);

    function TRService() {

        this.openRight = false;

        this.toggle = function() {
            this.openRight =  !this.openRight;

        }

        this.getOpenRight = function() {
            return this.openRight;
        }
    }
}());