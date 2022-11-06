$(document).ready(function() {
    $("#f").click(function() {
    $("#inp").append("<input type='text' id='i1' value='Hello'> <br><br>");
})
$("#input").click(function() {
// let data = prompt("Enter Content: ");
    data = 'dynamic';
    $("#i1").val(data);
    })
    $("#at").click(function() {
        $("#txt").append(" <b>Appended text</b>.");
    });
    $("#al").click(function() {
        $("#lst").append("<li class='list-group-item'>Appended Item</li>");
    });
    $("#pt").click(function() {
        $("#txt").prepend(" <b>Prepended text</b>.");
    });
    $("#pl").click(function() {
        $("#lst").prepend("<li class='list-group-item'>Prepended Item</li>");
    });
    $("#rl").click(function() {
        location.reload(true);
    });
    $("#gc").click(function() {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        var color = "#" + randomColor;
        $(".trapezoid").css("border-bottom-color", color);
    });
    $("#bc").click(function() {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        var color = "#" + randomColor;
        $(".rectangle").css("background-color", color);
    });
    $("#ti").click(function() {
        $(".circle").css("width", "+=10");
        $(".circle").css("height", "+=10");
    });
    $("#td").click(function() {
        $(".circle").css("width", "-=10");
        $(".circle").css("height", "-=10");
    });
    $("#rl1").click(function() {
        location.reload(true);
    });
})
