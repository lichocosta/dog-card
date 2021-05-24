$(document).ready(function(){
    var banner = {
        father: $('#banner'),
        numeroSlides: $('#banner').children('.slide').length,
        position: 1
    }

    var info = {
        father: $('#info'),
        numeroSlides: $('#info').children('.slide').length,
        position: 1
    }

    banner.father.children('.slide').first().css({
        'left': 0
    });

    info.father.children('.slide').first().css({
        'left': 0
    });

    var heightBanner = function(){
        var height = banner.father.children('.slide').outerHeight();

        banner.father.css({
            'height': height + 'px'
        });
    }

    var heightInfo = function(){
        var height = info.father.children('.active').outerHeight();

        info.father.animate({
            'height': height + 'px'
        });
    }

    var heightContainer = function(){
        var heightWindow = $(window).height();

        if (heightWindow <= $('#container').outerHeight() + 200){
            $('#container').css({
                'height': ''
            });
        } else {
            $('#container').css({
                'height': heightWindow + 'px'
            });
        }
    }

    heightBanner();
    heightInfo();
    heightContainer();

    $(window).resize(function(){
        heightBanner();
        heightInfo();
        heightContainer();
    });

    $('#info').children('.slide').each(function(){
        $('#buttons').append('<span>');
    });

    $('#buttons').children('span').first().addClass('active');


    //------------------------------//
    //------------BANNER------------//
    //------------------------------//

    //--------BUTTON "NEXT"---------//
    $('#banner-next').on('click', function(e){
        e.preventDefault();

        if(banner.position < banner.numeroSlides){

            banner.father.children().not('.active').css({
                'left': '100%'
            });

            $('#banner .active').removeClass('active').next().addClass('active').animate({
                'left': '0'
            });

            $('#banner .active').prev().animate({
                'left': '-100%'
            });

            banner.position = banner.position + 1;
        } else {
            $('#banner .active').animate({
                'left': '-100%'
            });

            banner.father.children().not('active').css ({
                'left': '100%'
            });

            $('#banner .active').removeClass('active');
            banner.father.children('.slide').first().addClass('active').animate({
                'left': 0
            });

            banner.position = 1;
        }

    });

    //--------BUTTON "PREV"---------//
    $('#banner-prev').on('click', function(e){
        e.preventDefault();

        if(banner.position > 1){

            banner.father.children().not('.active').css({
                'left': '-100%'
            });

            $('#banner .active').animate({
                'left': '100%'
            });

            $('#banner .active').removeClass('active').prev().addClass('active').animate({
                'left': '0'
            });

            banner.position = banner.position - 1;

        } else {
            banner.father.children().not('.active').css({
                'left': '-100%'
            });

            $('#banner .active').animate({
                'left': '100%'
            });

            $('#banner .active').removeClass('active');
            banner.father.children().last().addClass('active').animate({
                'left': 0
            });

            banner.position = banner.numeroSlides;
        }

    });

    //------------------------------//
    //----------SLIDER INFO---------//
    //------------------------------//

    //--------BUTTON "NEXT"---------//
    $('#info-next').on('click', function(e){
        e.preventDefault();
        if(info.position < info.numeroSlides){


            info.father.children().not('.active').css({
                'left': '100%'
            });

            $('#info .active').removeClass('active').next().addClass('active').animate({
                'left': '0'
            });

            $('#info .active').prev().animate({
                'left': '-100%'
            });

            $('#buttons').children('.active').removeClass('active').next().addClass('active');

            info.position = info.position + 1;
        } else {
            $('#info .active').animate({
                'left': '-100%'
            });

            info.father.children().not('active').css ({
                'left': '100%'
            });

            $('#info .active').removeClass('active');
            info.father.children('.slide').first().addClass('active').animate({
                'left': 0
            });

            $('#buttons').children('.active').removeClass('active');
            $('#buttons').children('span').first().addClass('active');

            info.position = 1;
        }

        heightInfo();

    });

    //--------BUTTON "PREV"---------//
    $('#info-prev').on('click', function(e){
        e.preventDefault();

        if(info.position > 1){

            info.father.children().not('.active').css({
                'left': '-100%'
            });

            $('#info .active').animate({
                'left': '100%'
            });

            $('#info .active').removeClass('active').prev().addClass('active').animate({
                'left': '0'
            });

            $('#buttons').children('.active').removeClass('active').prev().addClass('active');

            info.position = info.position - 1;

        } else {
            info.father.children().not('.active').css({
                'left': '-100%'
            });

            $('#info .active').animate({
                'left': '100%'
            });

            $('#info .active').removeClass('active');
            info.father.children().last().addClass('active').animate({
                'left': 0
            });

            $('#buttons').children('.active').removeClass('active');
            $('#buttons').children('span').last().addClass('active');

            info.position = info.numeroSlides;
        }

        heightInfo();

    });

});

