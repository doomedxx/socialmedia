angular.module('Login')
    .controller('LoginController', function ($scope, $route, $location, UriBuilder, AuthorizationService, TokenService) {

        $scope.loginUser = function (e) {
            var username = $scope.username;
            var password = $scope.password;

            //Sloop deze eruit dan werkt login weer
            //$location.path("/Feed");
            //$location.replace();           
            //TODO server bende.
            AuthorizationService.Authorize(username, password).then((Response) => {
                TokenService.SetAccessToken(Response.data.access_token);
                $location.path("/Feed");
                $location.replace();
            }).catch((Response) => {
                $scope.loginErrors = ["Failed to log in, please check your username or password"];
                console.log("Niet ingelogd");
            });
        };

        $scope.redirectRegister = function (e) {
            $location.path("/Register");
            $location.replace();
        };
    });