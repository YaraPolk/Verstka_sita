$(document).ready(function() { // Ждём загрузки страницы
						   
	var slides = $("body, html").children(".block"); // Получаем массив всех слайдов
	var height = $(".block").height(); // Получаем ширину видимой области
	var i = slides.length; // Получаем количество слайдов
	var offset = i * height; // Задаем начальное смещение и ширину всех слайдов
	
	$("#body, html").css('height',offset); // Задаем блоку со слайдами ширину всех слайдов
	
	for (j=0; j < i; j++) {
		if (j==0) {
			$(".navigation").append("<div class='dot active' ></div>");
		}
		else {
			$(".navigation").append("<div class='dot'></div>");
		}
	}
	
	offset = 0; // Обнуляем смещение, так как показывается начала 1 слайд
	i = 0; // Обнуляем номер текущего слайда
	
	$('.navigation .dot').click(function(){
		$(".navigation .active").removeClass("active");								  
		$(this).addClass("active");
		i = $(this).index();
		offset = i * height;
		$("body, html").animate({"scrollTop":offset}, 500); // Смещаем блок со слайдами к следующему
	});

});