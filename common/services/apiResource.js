(function() {
    "use strict"

    angular
        .module("common.services")
        .factory("apiResource",
                [
                    "$resource",
                    apiResource
                ]);

    function apiResource($resource) {
        return $resource("/api/");
    }
}());