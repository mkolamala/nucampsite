$(function () {
    //alert('script is running')
    $(".carousel").carousel({ interval: 2000 });
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause"); 
        }
    });

    $('#loginButton').click(function(){
        $('#loginModal').modal('show');
    });
    $('#reserveCampsiteButton').click(function(){
        $('#reserveModal').modal('show');
    });
    


});