
(function($){	
	$.justifyLabels = function (form) {
		var max = 0;
    var base = this;
        
    // Access to jQuery and DOM versions of each element
    base.$form = $(form);
  	base.$labels = base.$form.find("label")

  	base.$labels.each(function(){
  		if ($(this).width() > max)
    		max = $(this).width();    
  	});
  	base.$labels.width(max);
  }
})(jQuery);