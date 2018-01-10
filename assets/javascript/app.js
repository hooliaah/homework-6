// load buttons with animal name
var animals = ["aardvark", "lemur", "cockatiel", "duck", "otter", "beaver", "terrier", "gopher"];

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
$("#animal-div").on("click", ".animal-button", function (event) {
    event.preventDefault();
    $("#animal-gif").empty();

    var animalName = $(this).data("name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animalName + "&api_key=5LCGKiln2CYkrYWGgqJS7gbm25PsNcg2&limit=10&rating=pg-13";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (response) {
        console.log(response);
        
        $("#instructions-div").text("Click on an image below to animate");
        
        var results = response.data;

        for (var j = 0; j < results.length; j++) {
            var gifDiv = $("<div>");
            gifDiv.attr("class", "gif-div");
            var showRating = $("<p>").text("Rating: " + results[j].rating);
            var imageTag = $("<img>");
            imageTag.attr("src", results[j].images.fixed_height_still.url);
            imageTag.attr("class", "gif-image");
            imageTag.attr("data-still", results[j].images.fixed_height_still.url);
            imageTag.attr("data-animate", results[j].images.fixed_height.url)
            imageTag.attr("data-state", "still");
            gifDiv.append(imageTag, showRating);
            $("#animal-gif").append(gifDiv);
        }
    });
});

// when GIF is clicked, change to still or animate state
$("div").on("click", ".gif-image", function (event) {
    var state = $(this).attr("data-state");
    
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    }
    else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});