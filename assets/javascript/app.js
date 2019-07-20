$(document).ready(function () {
   // declare temp variables
   var tempF;
   var tempC;
   // create an empty array to store the call
   var weatherCall = [];
   var currentWeather;

   //temperature converter function for fahrenheit
   function tempConvertF(int) {
      var F = ((int - 273.15) * 1.8) + 32
      return F.toFixed(0)
   }
   //temperature converter function for celsius
   function tempConvertC(int) {
      var C = (int - 273.15)
      return C.toFixed(0)
   }
   // function to push ajax response into an array
   function storeWeather(data) {
      window.weatherCall = Object.entries(data);
   }

   // get zipcode from user input
   $('#zipbutton').on('click', function (event) {

      event.preventDefault();

         // empty weather div
         $('#weather').empty();

         // variable to store zipcode based on user input
         var zip = $('#zip').val();
         console.log(zip);
         // open weather API Key
         var openWeatherAPI = 'af04984d9a409670d1445bb7bbfa4f4b';

         // queryURL utilizing input zipcode
         var weatherQueryUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=' + zip + ',us&APPID=' + openWeatherAPI;
         console.log(weatherQueryUrl);
         // ajax call to get the weather data
         $.ajax({
            method: 'GET',
            // url: "https://api.openweathermap.org/data/2.5/weather?zip=78758,us&APPID=af04984d9a409670d1445bb7bbfa4f4b"
            url: weatherQueryUrl,
         }).then(function (response) {
            // push response into an array for later use/reference
            storeWeather(response);
            // get current weather and store in a variable
            currentWeather = $.trim(response.weather[0].main);
            console.log(currentWeather);
            // convert temperature from response into Fahrenheit and append to div
            tempF = tempConvertF(response.main.temp);
            tempC = tempConvertC(response.main.temp);
            // console log temperatures for tracking
            console.log(tempF + 'F');
            console.log(tempC + 'C');
            // append data from our response to the HTML
            // weather icon
            $('#weather').append('<div id="weathericon"><img src="http://openweathermap.org/img/wn/' + response.weather[0].icon + '@2x.png"></div>');
            $('#weather').append('<p><b>Current Temperature:</b> ' + tempF + '&#176;F</p><p><b>Current Conditions: </b>' + response.weather[0].main + '</p><p>Today will be ' + response.weather[0].description + ' with a high of ' + tempConvertF(response.main.temp_max) + '&#176;F and a low of ' + tempConvertF(response.main.temp_min) + '&#176;F .</p><button id="celsius" class="btn btn-info">ºC</button>');

            loadDrinks(currentWeather.toLowerCase());
            // display the celsius button
         }) //.catch(function(error){console.log(error);});

         // closing zipcode button onclick function
      });

      // add a button to convert temperatures to celsius
      $(document).on('click','#celsius', function () {
         tempC = tempConvertC(window.weatherCall[3][1].temp);
         $('#weather').html('<div id="weathericon"><img src="http://openweathermap.org/img/wn/' + window.weatherCall[1][1][0].icon + '@2x.png"></div><p><b>Current Temperature:</b> ' + tempC + '&#176;C</p><p><b>Current Conditions: </b>' + window.weatherCall[1][1][0].main + '</p><p>Today will be ' + window.weatherCall[1][1][0].description +
            ' with a high of ' + tempConvertC(window.weatherCall[3][1].temp_max) + '&#176;F and a low of ' + tempConvertC(window.weatherCall[3][1].temp_min) + '&#176;C .</p><button id="fahrenheit" class="btn btn-info">ºF</button>');
      });
      // button to revert back to fahrenheit
      $(document).on('click','#fahrenheit', function () {
         $('weather').html('<div id="weathericon"><img src="http://openweathermap.org/img/wn/' + window.weatherCall[1][1][0].icon + '@2x.png"></div><p><b>Current Temperature:</b> ' + tempF + '&#176;C</p><p><b>Current Conditions: </b>' + window.weatherCall[1][1][0].main + '</p><p>Today will be ' + window.weatherCall[1][1][0].description +
         ' with a high of ' + tempConvertF(window.weatherCall[3][1].temp_max) + '&#176;F and a low of ' + tempConvertF(window.weatherCall[3][1].temp_min) + '&#176;C .</p><button id="fahrenheit" class="btn btn-info">ºF</button>');
      });
         //console.log(weatherList[weather]);
         //var currentWeather= weatherList[weather];

         //promises to get the result of ajax request
         //var results=response.data
         // closing doc.ready function

      function loadDrinks(currentWeather) {
         //cocktail api
         var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink";

         //apply api and queryURL
         //performing an ajax get request to our queryurl
         $.ajax({
            url: queryURL,
            method: "GET"
         }).then(function (response) {
            var currDrink = response.drinks;
            console.log("this is the response" + currDrink[0].strDrink);
            console.log("this is the response" + currDrink[0].strDrinkThumb);
            //$("#drink").html("<img class='drinkImage' src='"+ response.drinks[0].strDrinkThumb + "'/>");
            switch (currentWeather) {
               case 'clear':
                  $("#drink").html("<img class='drinkImage' src='" + response.drinks[0].strDrinkThumb + "'/><p><h5>"+response.drinks[0].strDrink+"</h5></p>");
                  break;
               case 'scatteredclouds':
                  $("#drink").html("<img class='drinkImage' src='" + response.drinks[64].strDrinkThumb + "'/><p><h5>"+response.drinks[64].strDrink+"</h5></p>");
                  break;

               case 'brokenclouds':
                  $("#drink").html("<img class='drinkImage' src='" + response.drinks[35].strDrinkThumb + "'/><p><h5>"+response.drinks[35].strDrink+"</h5></p>");
                  break;

               case 'showerrain':
                  $("#drink").html("<img class='drinkImage' src='" + response.drinks[63].strDrinkThumb + "'/><p><h5>"+response.drinks[63].strDrink+"</h5></p>");
                  break;

               case 'rain':
                  $("#drink").html("<img class='drinkImage' src='" + response.drinks[28].strDrinkThumb + "'/><p><h5>"+response.drinks[28].strDrink+"</h5></p>");
                  break;

               case 'thunderstorm':
                  $("#drink").html("<img class='drinkImage' src='" + response.drinks[32].strDrinkThumb + "'/><p><h5>"+response.drinks[32].strDrink+"</h5></p>");
                  break;

               case 'mist':
                  $("#drink").html("<img class='drinkImage' src='" + response.drinks[4].strDrinkThumb + "'/><p><h5>"+response.drinks[4].strDrink+"</h5></p>");
                  break;

               case 'snow':
                  $("#drink").html("<img class='drinkImage' src='" + response.drinks[101].strDrinkThumb + "'/><p><h5>"+response.drinks[101].strDrink+"</h5></p>");
                  break;
            }
         });
      }
});