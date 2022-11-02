$("#change").click(function() {
  $("#change").html("BETA HAHAHAHAHAHA");
  $("#move").show();
});

$("#move").hover(function() {
  change();
});

function change()
{
    var i = Math.floor(Math.random()*500)+1;
    var j = Math.floor(Math.random()*100)+1;
    $("#move").css({top: j+'px',left: i+'px'});
}