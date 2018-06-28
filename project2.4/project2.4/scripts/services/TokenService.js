angular
    .module('Token')
    .factory('TokenService', TokenService)

function TokenService()
{
    var AccessToken = "";

    function SetAccessToken(Token)
    {
        sessionStorage.setItem("AccessToken", Token);
        this.AccessToken = Token;
    }

    function GetAccessToken()
    {
        if (AccessToken == "")
            return sessionStorage.getItem("AccessToken");
        return this.AccessToken;
    }

    return {
        SetAccessToken,
        GetAccessToken,
    };
}

