// Запрос номера телефона в окошке
function InputPhone(){
	let phone = prompt('Ваш номер телефона');
	if (phone != '') alert('Спасибо! Мы вам перезвоним в рабочее время.');
	return false;
}


$(document).ready(function(e) {

	// МЕНЮ для мобильных открытие / закрытие
	$('.mob_menu').click(function(){
		$('BODY').toggleClass('open_menu');
		$('body,html').animate({scrollTop: 0}, 100);
	});

	// Листание фотографий на мобильном
	var PhotosCount = $('.photos .okno DIV').length;
	var PhotosActive = 1;
	$('#butDown').click(function(){
		PhotosActive--;
		if (PhotosActive<1) PhotosActive = PhotosCount;
		$('.photos .okno DIV').hide();
		$('.photos .okno DIV').eq(PhotosActive-1).show();
	});
	$('#butUp').click(function(){
		PhotosActive++;
		if (PhotosActive>PhotosCount) PhotosActive = 1;
		$('.photos .okno DIV').hide();
		$('.photos .okno DIV').eq(PhotosActive-1).show();
	});
	function initPhotos(){
		// Инициализация
		if ($('BODY').width() < 800) {
			// Сделаем активным 2-ое фото
			PhotosActive = 1;
			$('#butUp').click();
		} else {
			// Покажем все
			$('.photos .okno DIV').show();
		}
	}
	// Событие при изменении ширины окна браузера
	$(window).resize(initPhotos);
});
