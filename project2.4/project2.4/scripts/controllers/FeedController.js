angular.module('Feed')
    .controller('FeedController', function ($scope, $route, $location, $timeout, UriBuilder, $rootScope, httpRequestService) {
        $scope.NewComment = [];
        $scope.RespectGiven = [];

        var url = UriBuilder.BuildUrl("Account", { 'id': null });
        httpRequestService.getRequest(url, function success(response) {
            $scope.Account = response.data;
        }, function fail(response) {
            console.log("Ging iets fout bij het ophalen van het account");
        });

        
        var url = UriBuilder.BuildUrl("Feed", { 'id': null });
        httpRequestService.getRequest(url,function success (response) {
            $scope.Feed = response.data;
        }, function fail (response) {
            console.log("Ging iets fout bij het ophalen van de Feed");
        });


        $scope.PostFeed = function ()
        {
            //TODO Upload image or video to webserver

            var feedtext = $scope.NewPostText;
            var url = UriBuilder.BuildUrl("Feed", { 'Text': feedtext, 'imageurl': "", 'videourl': "" });
            httpRequestService.PostRequest(url, null, function success(response) {
                var url = UriBuilder.BuildUrl("Feed", { 'id': null });
                httpRequestService.getRequest(url, function success(response) {
                    $scope.Feed = response.data;
                }, function fail(response) {
                    console.log("Ging iets fout bij het ophalen van de Feed");
                });
            }, function fail(response)
            {
                console.log("niet helemaal");
            });
        }

        $scope.PostComment = function (FeedId, index)
        {
            var commentText = $scope.NewComment[index];
            var url = UriBuilder.BuildUrl("FeedDiscussion", { 'FeedId': FeedId, 'CommentText': commentText });
            httpRequestService.PostRequest(url, null, function success(response) {
                var url = UriBuilder.BuildUrl("Feed", { 'id': null });
                httpRequestService.getRequest(url,function success (response) {
                    $scope.Feed = response.data;
                }, function fail (response) {
                    console.log("Ging iets fout bij het ophalen van de Feed");
                });
            }, function fail(response) {
                console.log("Ging iets fout bij het opslaan van de comment");
            });
        }
        //Respect button
        $scope.GiveRespect = function (FeedId, index) {
            var upvote = true;
            if ($scope.RespectGiven[index] == 1) {
                upvote = false;
                $scope.RespectGiven[index] = 0;
            }
            else
            {
                $scope.RespectGiven[index] = 1;
            }

            var url = UriBuilder.BuildUrl("FeedRespect", { 'FeedId': FeedId, 'Upvote': upvote });
            httpRequestService.PostRequest(url, null, function success(response) {
                var url = UriBuilder.BuildUrl("Feed", { 'id': null });
                httpRequestService.getRequest(url, function success(response) {
                    $scope.Feed = response.data;
                }, function fail(response) {
                    console.log("Ging iets fout bij het ophalen van de Feed");
                });
            }, function fail(response) {
                console.log("Ging iets fout bij het opslaan van de respect");
            });
        };

        $scope.showInfo = function (profileId) {
            console.log(profileId);
            var url = UriBuilder.BuildUrl("ProfileInfo", { 'id': profileId });
            httpRequestService.getRequest(url, function success(response) {
                console.log(response.data);
            }, function fail(response) {
                console.log("Ging iets fout bij het ophalen van het account");
            });
        }


        $scope.redirectFeed = function (e) {
            $location.path("/Feed");
            $location.replace();
        };

        $scope.redirectProfile = function (passId) {
            console.log("Deze:" + passId);
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
    });