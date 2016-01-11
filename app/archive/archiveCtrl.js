(function() {
    "use strict"
    angular
        .module("pageManagement")
        .controller("ArchiveCtrl",
        ["$scope", "$http", "$sce", ArchiveCtrl]);

    function ArchiveCtrl($scope, $http, $sce){
        var vm = this;

        vm.wakka = "wakka flakka";


        //fetch();
        vm.vidSRC = "http://livestream.com/accounts/603102/events/4675609/videos/108984239/player?autoPlay=false&height=360&mute=false&width=640"
        vm.vidUrl = $sce.trustAsResourceUrl(vm.vidSRC);


        function fetch() {
            $http.get("https://new.livestream.com/api/accounts/srcbirmingham")
                .success(function(response) {
                    if(response) {
                        console.log("Success");
                        console.log(response);
                        var image = response.past_events.data[0].logo.url;
                        $('#video-list').prepend('<img src="' + image + '"/>');
                        $('#video-list').append('<h4>' + response.past_events.data[0].full_name + '</h4>')

                        //vm.vidSRC = "http://livestream.com/accounts/" +  response.past_events.data[0].owner_account_id + "/events/"+ response.past_events.data[0].id + "/videos/" + response.past_events.data[0].live_video_post_id + "/player?autoPlay=false&height=360&mute=false&width=640";
                    }else {
                        console.log("No data in response");
                    }
                });
        }
    }
}());