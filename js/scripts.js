$(document).ready(function () {
  $('#form-one').submit(function (event) {
    event.preventDefault();

    var favFood = [];
    favFood.push($("#food1").val());
    favFood.push($("#food2").val());
    console.log (favFood);

    var vacation = []
    vacation.push($("#vaca1").val());
    vacation.push($("#vaca2").val());
    console.log (vacation);

    var portland = []
    portland.push($('#portland1').val());
    portland.push($('#portland2').val());
    console.log (portland);

    var entertainment = []
    entertainment.push($("#entertainment1").val());
    entertainment.push($("#entertainment2").val());
    console.log (entertainment);
  });
});
