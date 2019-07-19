//document ready
//apply api and queryURL
//performing an ajax get request to our queryurl
//display weather on left side of page


//cocktail api
var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list";

//apply api and queryURL
//performing an ajax get request to our queryurl
$.ajax({
  url:queryURL,
  method: "GET"
}).then(function(response){
 //TODO remove both vars later
  var weatherList = ["clear", "brokenclouds", "scatteredclouds", "mist", "showerrain","rain", "thunderstorm", "snow", ];

  var weather = Math.floor(Math.random() * weatherList.length);

  var clearDrinks = ["tequila", "vodka","Champagne", "Lemonade", "Orange juice","Ice"]
  var cloudyDrinks = ["Coffee brandy", "Red wine", "Heavy cream"]
  var rainyDrinks =["rum", "Jack Daniels", "Crown Royal","whisky","Absinthe"]
  var snowDrinks = ["Apple brandy","Apple cider" ,"Spiced rum", "Cider","Absinthe"]
 

  console.log(weatherList[weather]);
  var currentWeather= weatherList[weather];

  //promises to get the result of ajax request
  var results=response.data
  
 
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
});

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