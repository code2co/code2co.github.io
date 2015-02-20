var googleMap = function () {

    function renderMap() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions

        var myLatlng = new google.maps.LatLng(40.222452, 28.86723);

        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 16,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.SMALL
            },
            streetViewControl: false,

            scrollwheel: false,

            // The latitude and longitude to center the map (always required)
            center: myLatlng, // Bursa

            // How you would like to style the map. 
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{"featureType":"water","stylers":[{"visibility":"on"},{"color":"#b5cbe4"}]},{"featureType":"landscape","stylers":[{"color":"#efefef"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#83a5b0"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#bdcdd3"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e3eed3"}]},{"featureType":"administrative","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"road"},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{},{"featureType":"road","stylers":[{"lightness":20}]}]
        };

        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map_canvas" seen below in the <body>
        var mapElement = document.getElementById('map_canvas');

        // Create the Google Map using out element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: 'Our Offices',
            options: {
                icon: "img/marker.png"
            },
        });
    }

    return {
        init: function () {
            $(window).on("load", renderMap);
        }
    };
}();

$(function () {
    "use strict";
    googleMap.init();
});