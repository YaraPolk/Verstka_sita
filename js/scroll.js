var ln1 = document.getElementById('liner')
var bt1 = document.getElementById('bt2')

$(window).scroll(function() {
    if ($(this).width() > 992) {
        if ($(this).height() >= 768) {
            if ($(this).scrollTop() > 4050) {
                ln1.style.width = '100%';
                bt1.style.opacity = '1';
            }
            if ($(this).scrollTop() > 4950) {
                ln1.style.width = '0%';
                bt1.style.opacity = '0';
            }
            else if ($(this).scrollTop() < 4000) {
                ln1.style.width = '0%';
                bt1.style.opacity = '0';
            }
        }
    }
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 350) {
        $('.block2 #kb2').css('opacity', '1');
        $('.block2 .svg_tx').css('width', '15%');
        $('.block2 #bt1').css('opacity', '1');
    }
    if ($(this).scrollTop() > 1700) {
        $('.block2  #kb2').css('opacity', '0');
        $('.block2 .svg_tx').css('width', '0');
        $('.block2 #bt1').css('opacity', '0');
    }

    if ($(this).scrollTop() < 300) {
        $('.block2 #kb2').css('opacity', '0');
        $('.block2 .svg_tx').css('width', '0');
        $('.block2 #bt1').css('opacity', '0');
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
});
