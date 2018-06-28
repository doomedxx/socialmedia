angular.module('Friends')
    .controller('FriendsController', function ($scope, $route, $location, $timeout, UriBuilder, httpRequestService) {


        //Getting ProfileInfo and Feed 
        var url = UriBuilder.BuildUrl("ProfileInfo", { 'id': !null });
        httpRequestService.getRequest(url, function success(response) {
            $scope.ProfileInfo = response.data;
            $scope.places = [response.data.Hometown];
            var url = UriBuilder.BuildUrl("Feed", { 'id': null });
            httpRequestService.getRequest(url, function success(response) {
                $scope.Feed = response.data;
            }, function fail(response) {
                console.log("Ging iets fout bij het ophalen van de Feed");
            });
        }, function fail(response) {
            console.log("Ging iets fout bij het ophalen van het Profile");
        });


        $scope.redirectFeed = function (e) {
            $location.path("/Feed");
            $location.replace();
        };

        $scope.redirectProfile = function (e) {
            $location.path("/Profile");
            $location.replace();
        };

        $scope.redirectOptions = function (e) {
            $location.path("/Options");
            $location.replace();
        };

        $scope.redirectPrivacy = function (e) {
            $location.path("/Privacy");
            $location.replace();
        };

        $scope.redirectFriends = function (e) {
            $location.path("/Friends");
            $location.replace();
        };

        $scope.redirectLogin = function () {
            $location.path("/");
            $location.replace();
        };
    });
