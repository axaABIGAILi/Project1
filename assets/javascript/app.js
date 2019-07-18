//document ready
//apply api and queryURL
//performing an ajax get request to our queryurl
//display weather on left side of page


//cocktail api
var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink";

//apply api and queryURL
//performing an ajax get request to our queryurl
$.ajax({
  url:queryURL,
  method: "GET"
}).then(function(response){

  var weather = ["clear", "cold", "sunny", "foggy", "cloud"];

  var currentWeather = Math.floor(Math.random() * weather.length);

  //remove later
  console.log(weather[currentWeather]);


  //promises to get the result of ajax request
  var results=response.data
  $("#drinksMenu").empty();
  // looping through array of the drinks in a variable

 for (var i = 0; i < length.array; i++ ){

  }

});
//place if statements into .then function so it can pull all arrays and vars
var weather
//pull weather and tell computer
// if else statements and or for creating list on weather?
//if weather === clear or sunny pull array ice drinks if (condition1) {}
if (Weather === "clear", "sunny");
return 
  //  block of code to be executed if condition1 is true
//if weather === cold or iced pull array of ciders/ spiced drinks/ warm drinks if (condition2) {}
  //  block of code to be executed if condition1 is true
 
//if weather === cloudy or foggy pull array of specialty drinks, like cool unique drinks if (condition3) {}
  //  block of code to be executed if condition1 is true
//display drinks according to weather 