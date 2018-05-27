<<<<<<< HEAD
$(document).ready(function(){
    $(window).on('scroll', function(){
        var scrollBar = $(window).scrollTop();
        if(scrollBar > 80){
            $(".navbar").addClass("activeBar");
        }else{
            $(".navbar").removeClass("activeBar");
        }
    });
    $(".tombol").click(function(){
        $(".navbar").css("z-index", 1);
    });
    $(".tutup").click(function(){
        $(".modal").fadeOut(300);
        $(".navbar").css("z-index", 4);
    });
    $(".toggle").click(function(){
        $(".navbarMobile").toggleClass('active');
    });
    $('a[href^="#"]').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop : $(this.hash).offset().top
        }, 600);
    });
=======
$(document).ready(function(){
    $(window).on('scroll', function(){
        var scrollBar = $(window).scrollTop();
        if(scrollBar > 80){
            $(".navbar").addClass("activeBar");
        }else{
            $(".navbar").removeClass("activeBar");
        }
    });
    $(".tombol").click(function(){
        $(".navbar").css("z-index", 1);
    });
    $(".tutup").click(function(){
        $(".modal").fadeOut(300);
        $(".navbar").css("z-index", 4);
    });
    $(".toggle").click(function(){
        $(".navbarMobile").toggleClass('active');
    });
    $('a[href^="#"]').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop : $(this.hash).offset().top
        }, 600);
    });
>>>>>>> ec2906d838f4b3c6841e65468710e4c43b5d36b5
});