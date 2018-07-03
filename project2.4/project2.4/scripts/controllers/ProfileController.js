angular.module('Profile')
    .controller('ProfileController', function ($scope, $route, $location, $timeout, $rootScope, UriBuilder, httpRequestService) {
        
        var url = UriBuilder.BuildUrl("Account", { 'id': null });
        httpRequestService.getRequest(url, function success(response) {
            $scope.Account = response.data;
        }, function fail(response) {
            console.log("Ging iets fout bij het ophalen van het account");
        });

        //Getting ProfileInfo and Feed 
        var profileId = $rootScope.UsId;
        if (profileId == null) {
            //Bij refresh moet hier id van ingelogde gebruiker komen te staan
            //profileId = 'Id'
            console.log("If " + profileId);
        }
        //console.log("Klopt deze?" + profileId);
        var url = UriBuilder.BuildUrl("ProfileInfo", { 'id': profileId });
        httpRequestService.getRequest(url, function success(response) {
            $scope.ProfileInfo = response.data;
            var url = UriBuilder.BuildUrl("Feed", { 'id': profileId });
            httpRequestService.getRequest(url, function success(response) {
                $scope.Feed = response.data;
            }, function fail(response) {
                console.log("Ging iets fout bij het ophalen van de Feed");
            });
        }, function fail(response) {
            console.log("Ging iets fout bij het ophalen van het Profile");
        });

        //Redirects
        $scope.profilePosts = false;
        $scope.profilePhotos = false;
        $scope.profileNotes = true;
        $scope.profileAbout = false;

        $scope.redirectFeed = function (e) {
            $location.path("/Feed");
            $location.replace();
        };

        $scope.redirectProfile = function (passId) {
            console.log("Deze?" + passId);
            $rootScope.UsId = passId;
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

        $scope.showProfilePosts = function () {
            $scope.profilePosts = true;
            $scope.profilePhotos = false;
            $scope.profileNotes = false;
            $scope.profileAbout = false;
        }

        $scope.showProfilePhotos = function () {
            $scope.profilePosts = false;
            $scope.profilePhotos = true;
            $scope.profileNotes = false;
            $scope.profileAbout = false;
        }

        $scope.showProfileNotes = function () {
            $scope.profilePosts = false;
            $scope.profilePhotos = false;
            $scope.profileNotes = true;
            $scope.profileAbout = false;
        }

        $scope.showProfileAbout = function () {
            $scope.profilePosts = false;
            $scope.profilePhotos = false;
            $scope.profileNotes = false;
            $scope.profileAbout = true;
        }

    });
