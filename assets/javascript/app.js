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

// user can add a new button using search box 
$("#add-animal").on("click", function (event) {
    event.preventDefault();
    var newAnimal = $("#animal-input").val().trim();
    console.log(newAnimal);
    animals.push(newAnimal);
    displayButtons();
})

// when button is clicked, 10 gifs of that animal apper
$("#animal-div").on("click", ".animal-button", function(animal){
    event.preventDefault();

    var animalName = $(this).data("name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animalName + "&api_key=5LCGKiln2CYkrYWGgqJS7gbm25PsNcg2&limit=10&rating=pg";

$.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
    console.log(response);

    var results = response.data;

    for (var j = 0; j < results.length; j++) {

        var gifDiv = $("<div>");
        var showRating = $("<p>").text("Rating: " + results[j].rating);
        var imageTag = $("<img>");
        imageTag.attr("src", results[j].images.fixed_height_still.url);

        gifDiv.append(showRating, imageTag);
        $("#animal-gif").append(gifDiv);
    }


  });
});