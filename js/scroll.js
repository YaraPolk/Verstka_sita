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
            else if ($(this).scrollTop() < 4050) {
                ln1.style.width = '0%';
                bt1.style.opacity = '0';
            }
        }
    }
});

    $(window).scroll(function() {
        if ($(this).scrollTop() > 400) {
            $('.block2  #kb2').css('opacity', '1');
        }
        if ($(this).scrollTop() > 1700) {
            $('.block2  #kb2').css('opacity', '0');
        }
    });