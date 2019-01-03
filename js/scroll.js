
$(window).scroll(function() {
    if ($(this).scrollTop() > 350) {
        $('.block2 #kb2').css('opacity', '1');
        $('.block2 .svg-tx').css('width', '15%');
        $('.block2 #bt1').css('opacity', '1');
        $('.block2 #line_1').css('width', '83%');
    }
    if ($(this).scrollTop() > 900) {
        $('.block2 #line_2').css('width', '63%');
        $('.block2 #line_3').css('width', '58%');
    }
    if ($(this).scrollTop() > 1700) {
        $('.block2  #kb2').css('opacity', '0');
        $('.block2 .svg-tx').css('width', '0');
        $('.block2 #bt1').css('opacity', '0');
        $('.block2 #line_1').css('width', '0');
        $('.block2 #line_2').css('width', '0');
        $('.block2 #line_3').css('width', '0');
    }

    if ($(this).scrollTop() < 300) {
        $('.block2 #kb2').css('opacity', '0');
        $('.block2 .svg-tx').css('width', '0');
        $('.block2 #bt1').css('opacity', '0');
        $('.block2 #line_1').css('width', '0');
        $('.block2 #line_2').css('width', '0');
        $('.block2 #line_3').css('width', '0');
    }
    if ($(this).scrollTop() > 1700) {
        $('.block3 #kb3').css('opacity', '1');
        $('.block3 #y_n_g').css('right', '0');
        $('.block3 #y_n_g').css('opacity', '1');
        $('.block3 #line_4').css('width', '59.9%');
        $('.block3 #line_5').css('width', '100%');
        $('.block3 #line_6').css('width', '100%');
    }
    if ($(this).scrollTop() > 2600) {
        $('.block3 #line_7').css('width', '100%');
    }
    if ($(this).scrollTop() > 3500) {
        $('.block3 #kb3').css('opacity', '0');
        $('.block3 #y_n_g').css('right', '40%');
        $('.block3 #y_n_g').css('opacity', '0');
        $('.block3 #line_4').css('width', '0');
        $('.block3 #line_5').css('width', '0');
        $('.block3 #line_6').css('width', '0'); 
        $('.block3 #line_7').css('width', '0');      
    }

    if ($(this).scrollTop() < 1400) {
        $('.block3 #kb3').css('opacity', '0');
        $('.block3 #y_n_g').css('right', '40%');
        $('.block3 #y_n_g').css('opacity', '0'); 
        $('.block3 #line_4').css('width', '0');
        $('.block3 #line_5').css('width', '0');
        $('.block3 #line_6').css('width', '0');
        $('.block3 #line_7').css('width', '0'); 
    }
    if ($(this).scrollTop() > 2800) {
        $('.block4 #kb4').css('opacity', '1');
        $('.block4 .peole-buy').css('left', '0');
        $('.block4 .peole-buy').css('opacity', '1');
        $('.block4 #line_8').css('width', '100%');
        $('.block4 #line_9').css('width', '100%');
        $('.block4 #line_10').css('width', '100%');
        $('.block4 #line_11').css('width', '100%');
        $('.block4 #line_12').css('width', '100%');
    }
    if ($(this).scrollTop() > 3500) {
        $('.block4 #line_13').css('width', '100%');
        $('.block4 #line_14').css('width', '100%');
        $('.block4 #line_15').css('width', '100%');
    }
    if ($(this).scrollTop() > 4000) {
        $('.block4 #kb4').css('opacity', '0');
        $('.block4 .peole-buy').css('left', '20%');
        $('.block4 .peole-buy').css('opacity', '0');
        $('.block4 #line_8').css('width', '0');
        $('.block4 #line_9').css('width', '0');
        $('.block4 #line_10').css('width', '0');
        $('.block4 #line_11').css('width', '0');
        $('.block4 #line_12').css('width', '0');
        $('.block4 #line_13').css('width', '0');
        $('.block4 #line_14').css('width', '0');
        $('.block4 #line_15').css('width', '0');
    }
    if ($(this).scrollTop() < 2600) {
        $('.block4 #kb4').css('opacity', '0');
        $('.block4 .peole-buy').css('left', '20%');
        $('.block4 .peole-buy').css('opacity', '0');
        $('.block4 #line_8').css('width', '0');
        $('.block4 #line_9').css('width', '0');
        $('.block4 #line_10').css('width', '0');
        $('.block4 #line_11').css('width', '0');
        $('.block4 #line_12').css('width', '0');
        $('.block4 #line_13').css('width', '0');
        $('.block4 #line_14').css('width', '0');
        $('.block4 #line_15').css('width', '0');
    }
    if ($(this).scrollTop() > 4050) {
        $('.block5 #liner').css('width', '100%');
    }
    if ($(this).scrollTop() > 4950) {
        $('.block5 #liner').css('width', '0');
    }
    if ($(this).scrollTop() < 4000) {
        $('.block5 #liner').css('width', '0');
    }
});
