// load buttons with animal name
var animals = ["aardvark", "lemer", "cockatiel", "duck", "otter", "loon", "beaver", "terrier", "gopher"];

function displayButtons() {
    $("#animal-div").empty();
    for (var i = 0; i < animals.length; i++) {
        var newButton = $("<button>");
        newButton.attr("class", "animal-button");
        newButton.data("name", animals[i]);
        newButton.text(animals[i]);
        $("#animal-div").append(newButton);
    }
}
displayButtons();



// when button is clicked, 10 gifs of that animal apper
var animalName;

// $("#find-animal").on("click", function(animal){
//     event.preventDefault();

//     var animal = $("#animal-input").val();
//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=5LCGKiln2CYkrYWGgqJS7gbm25PsNcg2";

// $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).done(function(response) {
//     console.log(response);
//   });
// });

// $(".city").html("<h1>" + response.name + " Weather Details</h1>");
//         $(".wind").text("Wind Speed: " + response.wind.speed);
//         $(".humidity").text("Humidity: " + response.main.humidity);
//         $(".temp").text("Temperature (F) " + response.main.temp);

// user can add a new button using search box 

