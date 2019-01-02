
$(window).scroll(function() {
    if ($(this).scrollTop() > 350) {
        $('.block2 #kb2').css('opacity', '1');
        $('.block2 .svg_tx').css('width', '15%');
        $('.block2 #bt1').css('opacity', '1');
        $('.block2 #line_1').css('width', '83%');
        $('.block2 #line_2').css('width', '63%');
        $('.block2 #line_3').css('width', '58%');
    }
    if ($(this).scrollTop() > 1700) {
        $('.block2  #kb2').css('opacity', '0');
        $('.block2 .svg_tx').css('width', '0');
        $('.block2 #bt1').css('opacity', '0');
        $('.block2 #line_1').css('width', '0');
        $('.block2 #line_2').css('width', '0');
        $('.block2 #line_3').css('width', '0');
    }

    if ($(this).scrollTop() < 300) {
        $('.block2 #kb2').css('opacity', '0');
        $('.block2 .svg_tx').css('width', '0');
        $('.block2 #bt1').css('opacity', '0');
        $('.block2 #line_1').css('width', '0');
        $('.block2 #line_2').css('width', '0');
        $('.block2 #line_3').css('width', '0');
    }
    if ($(this).scrollTop() > 1700) {
        $('.block3 #kb3').css('opacity', '1');
        $('.block3 #y_n_g').css('right', '0');
        $('.block3 #y_n_g').css('opacity', '1');
    }
    if ($(this).scrollTop() > 3100) {
        $('.block3 #kb3').css('opacity', '0');
        $('.block3 #y_n_g').css('right', '40%');
        $('.block3 #y_n_g').css('opacity', '0');       
    }

    if ($(this).scrollTop() < 1400) {
        $('.block3 #kb3').css('opacity', '0');
        $('.block3 #y_n_g').css('right', '40%');
        $('.block3 #y_n_g').css('opacity', '0'); 
    }
    if ($(this).scrollTop() > 2800) {
        $('.block4 #kb4').css('opacity', '1');
        $('.block4 .peole_buy').css('left', '0');
        $('.block4 .peole_buy').css('opacity', '1');
    }
    if ($(this).scrollTop() > 4000) {
        $('.block4 #kb4').css('opacity', '0');
        $('.block4 .peole_buy').css('left', '20%');
        $('.block4 .peole_buy').css('opacity', '0');
    }
    if ($(this).scrollTop() < 2600) {
        $('.block4 #kb4').css('opacity', '0');
        $('.block4 .peole_buy').css('left', '20%');
        $('.block4 .peole_buy').css('opacity', '0');
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
