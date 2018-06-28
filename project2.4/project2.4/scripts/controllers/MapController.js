angular.module('mapApp')
    .controller('MapController', function ($scope, $route, $location, $timeout, UriBuilder, httpRequestService) {


        //Getting ProfileInfo
        var url = UriBuilder.BuildUrl("ProfileInfo", { 'id': null });
        httpRequestService.getRequest(url, function success(response) {
            $scope.ProfileInfo = response.data;
            $scope.places = [response.data.Hometown];
        }, function fail(response) {
            console.log("Ging iets fout bij het ophalen van het Profile");
        });


        var plaats = 'Groningen' 
        geocoder = new google.maps.Geocoder();
        function getCoordinates(address) {
            geocoder.geocode({ address: address }, function (results, status) {
                coords_obj = results[0].geometry.bounds;
                coordinates = [coords_obj.b.f, coords_obj.f.f];
                var latT = (coords_obj.f.f + coords_obj.f.b)/2;
                var longT = (coords_obj.b.f + coords_obj.b.b)/2;
                console.log(longT, latT);
                var cities = [];
                console.log(cities);
                //Idee:

                //foreach user
                //cities.push(
                //    {
                //        place: {{username}},
                //        lat: longT,
                //        long: latT
                //    },
                //);


                cities.push(
                    {
                        place: 'user',
                        desc: 'Hier woont user',
                        lat: latT,
                        long: longT
                    },
                    {
                        place: 'User2',
                        desc: 'En user2',
                        lat: latT,
                        long: longT
                    },
                );
                console.log(cities[0]);
                console.log(cities[1]);
                console.log("lengte: " + cities.length);

                var createMarker = function (info) {
                    
                    var marker = new google.maps.Marker({
                        map: $scope.map,
                        position: new google.maps.LatLng(info.lat, info.long),
                        title: info.place
                    });
                    
                    marker.content = '<div class="infoWindowContent">' + info.desc + '<br />' + info.lat + ' E,' + info.long + ' N, </div>';

                    google.maps.event.addListener(marker, 'click', function () {
                        infoWindow.setContent('<h2>' + marker.title + '</h2>' +
                            marker.content);
                        infoWindow.open($scope.map, marker);

                    });
                    $scope.markers.push(marker);

                };

                for (i = 0; i < cities.length; i++) {
                    createMarker(cities[i]);
                }
                //cities.push(
                //    {
                //        place: 'user2',
                //        desc: 'Hier woont user2',
                //        lat: 53.212,
                //        long: 6.59
                //    },
                //);
                //console.log(cities);
            })
            //return coordinates;
        };

        getCoordinates(plaats);

        var plaats = 'Groningen'
        var mapOptions = {
            zoom: 12,
            center: new google.maps.LatLng(53.219383, 6.566502),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var cities = [];
        
        
       
        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

        $scope.markers = [];
        var infoWindow = new google.maps.InfoWindow();
        var addToArray = function () {
            cities.push('place: "Test", desc: "Hier woont Test", lat: 53.9, long: 6.6');
        };
        //var createMarker = function (info) {
        //    getCoordinates(plaats);
        //    var marker = new google.maps.Marker({
        //        map: $scope.map,
        //        position: new google.maps.LatLng(info.lat, info.long),
        //        title: info.place
        //    });
        //    marker.content = '<div class="infoWindowContent">' + info.desc + '<br />' + info.lat + ' E,' + info.long + ' N, </div>';

        //    google.maps.event.addListener(marker, 'click', function () {
        //        infoWindow.setContent('<h2>' + marker.title + '</h2>' +
        //            marker.content);
        //        infoWindow.open($scope.map, marker);
        //    });

        //    $scope.markers.push(marker);

        //};

        //var cities = [];
        //var users = [];

        //users.forEach(function (element) {
        //    cities.push(place: {{ username }}, desc: 'Here lives ' + {{ username }} lat: getCoordinates("Hometown"), long: "Hometown");
        //});
        //var cities = [
        //    {
        //        place: 'Marnick',
        //        desc: 'Hier woont Marnick',
        //        lat: 53.211085,
        //        long: 6.577578
        //    }
        //];
        
        for (i = 0; i < cities.length; i++) {
            console.log("lengte: " + cities.length);
            createMarker(cities[i]);
        }

        

        $scope.openInfoWindow = function (e, selectedMarker) {
            e.preventDefault();
            google.maps.event.trigger(selectedMarker, 'click');
        }

});