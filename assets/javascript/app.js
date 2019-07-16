//***/map! ***

//extracting 
//1! get userlocations
x = navigator.geolocation;
x.getCurrentPosition (success, failure);

function success(postion)
{
    var myLat = position.coords.latitude;
    var myLong= position.coords.longitude;

    var coords = new google.maps.Lating(myLat, myLong);
    var mapOptions = {
        zoom: 9,
        center: coords, 
        mapTypeId: google.maps.mapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    var marker = new gooogle.maps.Marker({map:map, position:coords});

}
function failure(){};
    
//2 tell the map the user location

//3 need map to display coffee shops in proximity of that location 


//figure out how to pull map with ajax and display map in middle div
//0vOLHKS0gJ-81Z5dKIbXRXliQELjeNq7z88b0xWQ339Hegj-44OfZ9ZXOUb_GrVDePR8WOYDz-xxiKgPvWu5eZNgchMbRdMS7OKAWF-voIAho8a9WJHRQdDJMEIlXXYx
//user selects amount of distance they are willing to travel ( milage range)


/* Geo coding    Geocoder.geocode()   
The types[] array in the GeocoderResult indicates the address type
**point_of_interest indicates a named point of interest. Typically, these "POI"s are prominent local entities that don't easily fit in another category, such as "Empire State Building" or "Eiffel Tower". street_address indicates a precise street address.
route indicates a named route (such as "US 101").
intersection indicates a major intersection, usually of two major roads.
political indicates a political entity. Usually, this type indicates a polygon of some civil administration.
country indicates the 8 political entity, and is typically the highest order type returned by the Geocoder.

{
 address: string,
 location: LatLng,
 placeId: string,
 bounds: LatLngBounds,
 componentRestrictions: GeocoderComponentRestrictions,
 region: string
}
results[]: {
 types[]: string,
 formatted_address: string,
 address_components[]: {
   short_name: string,
   long_name: string,
   postcode_localities[]: string,
   types[]: string
 },
 partial_match: boolean,
 place_id: string,
 postcode_localities[]: string,
 geometry: {
   location: LatLng,
   location_type: GeocoderLocationType
   viewport: LatLngBounds,
   bounds: LatLngBounds
 }
} 
*/

/*

/






// ***Shop info***
//figure out how to pull info with yelp api key ajax
//AIzaSyDvV8nn0xdQypUXijFA0eZ4xSRTZhMGVn8*/

$(document).ready(function(){
   
  $(document).on("click", "shop", function() {
    var queryURL = AIzaSyDvV8nn0xdQypUXijFA0eZ4xSRTZhMGVn8
    //preforming an ajax Get request to our query Url
    $.ajax({
      url:queryURL,
      method: "GET"
    })
    .then(function(response){
      //promises to get the result of ajax request
      var results=response.data
      $("#insertnamehere").empty();
    })
  })
})
//allow a list of shops to appear
$('document').ready(function(){
  $("#unqueued-request").click(function(){
     $('#response').empty();
     $.each[1,2,3,4,5,6,7,8,9,10], function (){
       $.get('server.php', {data: this }, function(data) {
         $("#response").append(data);
       });
     }
  });
}) 
//page 420 as refrence ^^^^^^
//allow user to click on a shop 
//$("shopname?").on("click",function(event){};
//pull shop info 