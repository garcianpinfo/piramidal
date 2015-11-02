//rolagem automatica da pagina entra os menus
$(document).ready(function () {
    $(".nhome").click(function () {
        $("html,body").animate({scrollTop:
                    $(".home").offset().top}, 2000);
        return false;
    });

    $(".nacademia").click(function () {
        $("html,body").animate({scrollTop:
                    $(".academia").offset().top}, 2000);
        return false;
    });

    $(".ntreinos").click(function () {
        $("html,body").animate({scrollTop:
                    $(".treinos").offset().top}, 2000);
        return false;
    });

    $(".nplanos").click(function () {
        $("html,body").animate({scrollTop:
                    $(".planos").offset().top}, 2000);
        return false;
    });

    $(".nfotos").click(function () {
        $("html,body").animate({scrollTop:
                    $(".fotos").offset().top}, 2000);
        return false;
    });

    $(".ncontatos").click(function () {
        $("html,body").animate({scrollTop:
                    $(".contatos").offset().top}, 2000);
        return false;
    });

    $(".ulmenu").hover(function () {
        $(".submenu").toggle();
        return false;
    });

    $('.debug').each(function () {
        $(this).after('<p style="color: #fff; background: #333; padding: 10px">' + $(this).width() + 'px</p>');
    });

    $('.btnmobile').click(function () {
        $('.main_navmo').toggle();
    });

});
//#################################################################################################################################



$(function () {
    $('.small-img img').hover(function () {
        var imgSrc = $(this).attr('src');
        $('.large-img img').attr('src', imgSrc);
    });

    $(function () {
        var slideAuto = setInterval(slideGo, 7000);
        $('.slide_nav_item.g').click(function () {
            slideGo();
            clearInterval(slideAuto);
        });
        $('.slide_nav_item.b').click(function () {
            slideBack();
            clearInterval(slideAuto);
        });
        $('.slide_nav_item.g').dblclick(function () {
            slideAuto = setInterval(slideGo, 7000);
        });
        function slideGo() {
            if ($('.slide_item.first').next().size()) {
                $('.slide_item.first').fadeOut(400, function () {
                    $(this).removeClass('first').next().fadeIn().addClass('first');
                });
            } else {
                $('.slide_item.first').fadeOut(400, function () {
                    $('.slide_item').removeClass('first');
                    $('.slide_item:eq(0)').fadeIn().addClass('first');
                });
            }
        }
        function slideBack() {
            if ($('.slide_item.first').index() > 1) {
                $('.slide_item.first').fadeOut(400, function () {
                    $(this).removeClass('first').prev().fadeIn().addClass('first');
                });
            } else {
                $('.slide_item.first').fadeOut(400, function () {
                    $('.slide_item').removeClass('first');
                    $('.slide_item:last-of-type').fadeIn().addClass('first');
                });
            }
        }
    });



});
//####################################################################################################################################
