$(document).ready(function() {

  var $languageEl = $('.language__el'),
      $language = $('.language');

  $language.hover(function(){
    $(this).toggleClass('is-open');
  });

  $languageEl.click(function(){
    $languageEl.removeClass('is-active');
    $(this).toggleClass('is-active');
  });


  $('table.table').DataTable({
    paging: false,
    searching: false,
    info: false
  });

  $('#how').on("click","a", function (event) {
    var margin,
      id  = $(this).attr('href'),
      top = $(id).offset().top;

      margin = 10;

    event.preventDefault();

    $('body,html').animate({scrollTop: top - margin}, 1000);
  });

	var extension = $('.file-ext');

	extension.map(function(el) {
		if (el.length > 8) {
			el.addClass('is-shorted');
		}
	})


});
