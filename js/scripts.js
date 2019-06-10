$(document).ready(function () {
  $('#form-one').submit(function (event) {
    event.preventDefault();

    var favorites = ["food1", "food2", "vaca1", "vaca2", "portland1", "portland2", "entertainment1", "entertainment2"];

    var favArray = [];
    favorites.forEach(function(favorite){
      var userInput = $("input#" + favorite).val();
      favArray.push(userInput);
      console.log(favArray);
    });

  });
});
