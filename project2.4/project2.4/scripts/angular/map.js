//var url = UriBuilder.BuildUrl("ProfileInfo", { 'id': !null });
//httpRequestService.getRequest(url, function success(response) {
//    $scope.ProfileInfo = response.data;
//    $scope.places = [response.data.Hometown];
//    var url = UriBuilder.BuildUrl("Feed", { 'id': null });
//    httpRequestService.getRequest(url, function success(response) {
//        $scope.Feed = response.data;
//    }, function fail(response) {
//        console.log("Ging iets fout bij het ophalen van de Feed");
//    });
//}, function fail(response) {
//    console.log("Ging iets fout bij het ophalen van het Profile");
//});

//geocoder = new google.maps.Geocoder();

//function getCoordinates(address) {
//    geocoder.geocode({ address: address }, function (results, status) {
//        coords_obj = results[0].geometry.bounds;
//        coordinates = [coords_obj.b.b, Coordinates.f.b];
//        console.log(coordinates);
//    })
//        return coordinates;
    
//};

//var cities = [
//    {
//        place: 'Marnick',
//        desc: 'Hier woont Marnick',
//        lat: 53.211085,
//        long: 6.577578
//    }
//];

////var cities = [];
////var users = [];

////users.forEach(function (element) {
////    cities.push(place: {{ username }}, desc: 'Here lives ' + {{ username }} lat: getCoordinates("Hometown"), long: "Hometown");
////});



//////var cities = [
//////    {
//////        place: 'Marnick',
//////        desc: 'Hier woont Marnick',
//////        lat: 53.211085,
//////        long: 6.577578
//////    },
//////    {
//////        place: 'Wesley',
//////        desc: 'Hier woont Wesley',
//////        lat: 52.728616,
//////        long: 6.490100
//////    },
//////    {
//////        place: 'Miguel',
//////        desc: 'Hier woont Miguel',
//////        lat: 53.233848,
//////        long: 6.566509
//////    },
//////    {
//////        place: 'Arjen',
//////        desc: 'Hier woont Arjen',
//////        lat: 53.233245,
//////        long: 6.568590
//////    },
//////];