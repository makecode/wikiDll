$(document).ready(function() {

  var $languageEl = $('.language__el'),
      $language = $('.language'),
      $tableDllHash = $('.table-dll__hash');

  $language.hover(function(){
    $(this).toggleClass('is-open');
  });

  $languageEl.click(function(){
    $languageEl.removeClass('is-active');
    $(this).toggleClass('is-active');
  });

  $tableDllHash.map(function () {
    $(this).on('click', function () {
      $(this).find('.hash').toggleClass('is-visible');
      console.log($(this).find('hash'));
    })
  });

  $('table.table').DataTable({
    paging: false,
    searching: false,
    info: false,
    autoWidth: false
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
