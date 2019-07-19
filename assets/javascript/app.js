//temperature converter function for fahrenheit
function tempConvertF (int) {
  var F = ((int-273.15)*1.8)+32
  return F.toFixed(0)
}
//temperature converter function for celsius
function tempConvertC (int) {
 var C = (int-273.15)
 return C.toFixed(0)
}

// declare temp variables
var tempF;
var tempC;
// create an empty array to store the call
var weatherCall = [];
var currentWeather;

// get zipcode from user input
$('#zipbutton').on('click', function () {

// empty weather div
$('#weather').empty();

// variable to store zipcode based on user input
var zip = $('#zip').val();
// open weather API Key
var openWeatherAPI = 'af04984d9a409670d1445bb7bbfa4f4b';

// queryURL utilizing input zipcode
var weatherQueryUrl = 'https://api.openweathermap.org/data/2.5/weather?zip='+zip+',us&APPID='+openWeatherAPI;

// ajax call to get the weather data
$.ajax({
  method: 'GET',
  url: weatherQueryUrl
}).then(function(response){
  // push response into an array for later use/reference
  function storeWeather (data) {
      weatherCall = Object.entries(data);
  };
  storeWeather(response);
  // get current weather and store in a variable
      currentWeather = $.trim(response.weather[0].main);
  console.log(currentWeather);
  // convert temperature from response into Fahrenheit and append to div
  tempF = tempConvertF(response.main.temp);
  tempC = tempConvertC(response.main.temp);
  // console log temperatures for tracking
  console.log(tempF+'F');
  console.log(tempC+'C');
  // append data from our response to the HTML
  // weather icon
  $('#weather').append('<div id="weathericon"><img src="http://openweathermap.org/img/wn/'+response.weather[0].icon+'@2x.png"></div>');
  $('#weather').append('<p><b>Current Temperature:</b> '+tempF+'&#176;F</p><p><b>Current Conditions: </b>'+response.weather[0].main+'</p><p>Today will be '+response.weather[0].description+' with a high of '+tempConvertF(response.main.temp_max)+'&#176;F and a low of '+tempConvertF(response.main.temp_min)+'&#176;F .</p>');
  // display the celsius button
  $('#celsius').css('display', 'inline');

});

// closing zipcode button onclick function
});

// add a button to convert temperatures to celsius
$('#celsius').on('click', function(){
  tempC = tempConvertC(weatherCall[3][1].temp);
  $('#weather').html('<div id="weathericon"><img src="http://openweathermap.org/img/wn/'+weatherCall[1][1][0].icon+'@2x.png"></div><p><b>Current Temperature:</b> '+tempC+'&#176;C</p><p><b>Current Conditions: </b>'+weatherCall[1][1][0].main+'</p><p>Today will be '+weatherCall[1][1][0].description
  +' with a high of '+tempConvertC(weatherCall[3][1].temp_max)+'&#176;F and a low of '+tempConvertC(weatherCall[3][1].temp_min)+'&#176;C .</p>');
});





//cocktail api
var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink";

//apply api and queryURL
//performing an ajax get request to our queryurl
$.ajax({
  url:queryURL,
  method: "GET"
}).then(function(response){
  var currDrink = response.drinks;
console.log("this is the response"+ currDrink[0].strDrink);
console.log("this is the response"+ currDrink[0].strDrinkThumb);
//$("#drink").html("<img class='drinkImage' src='"+ response.drinks[0].strDrinkThumb + "'/>");

 
 

  console.log(weatherList[weather]);
  var currentWeather= weatherList[weather];

  //promises to get the result of ajax request
  //var results=response.data
  
 /*
    if ( currentWeather === "clear") { 
       display(clearDrinks);
      
      
      console.log("the weather is clear drink something fun like tequila")
      
    }
    else if ( currentWeather === "brokenclouds" ||                          currentWeather === "scatteredclouds") {
      display(cloudyDrinks);
      console.log ("the weather is cloudy lets drink something creamy")

    }
    else if (currentWeather === "mist" ||  //or statement (look up and statement &&)
             currentWeather === "showerrain" ||
             currentWeather === "rain" ||
             currentWeather === "thunderstorm") {
      display(rainyDrinks);
          console.log("the weather is wet and cold out lets drink something with rum or whisky")
    }

    else if (currentWeather === "snow") {
      display(snowDrinks);
    console.log("it's so cold lets get drunk on cider or something")
    }
}); */

function display(drinkArray){ 
  $("#drink").empty();
   for (var i = 0; i < drinkArray.length; i++){
    var ptag = $("<p>"); //assigned to the var
    ptag.addClass("drinkSpot");
    ptag.text(drinkArray[i]); //put i because it is going through multiple of the arrays
    $( "#drink" ).append( ptag );
  }

}
//place if statements into .then function so it can pull all arrays and vars

//pull weather and tell computer
// if else statements and or for creating list on weather?
//if weather === clear or sunny pull array ice drinks if (condition1) {}

  //  block of code to be executed if condition1 is true
//if weather === cold or iced pull array of ciders/ spiced drinks/ warm drinks if (condition2) {}
  //  block of code to be executed if condition1 is true
 
//if weather === cloudy or foggy pull array of specialty drinks, like cool unique drinks if (condition3) {}
  //  block of code to be executed if condition1 is true
//display drinks according to weather 

//apply api and queryURL
//performing an ajax get request to our queryurl
//display cocktails on right side
//pull weather and tell computer
//display drinks according to weather
