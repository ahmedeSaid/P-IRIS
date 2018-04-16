
$(document).ready(function() {
	
	  
	
		/*******Nice Scroll******/	  
		$("html").niceScroll();  // The document page (body)
		$(".scroller").getNiceScroll().resize()
		

  		<!--flexs lider--> 	
		 $('.flexslider').flexslider({
		        animation: "fade",
		        start: function(slider){
		          $('body').removeClass('loading');
		        }
			});

		
     /****Smooth Scrolling***/  
        $('a[href*=#]:not([href=#])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
            || location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top
              }, 700);
              return false;
            }
          }
        });
		
		<!--Portfolio--> 
    $('#gallery').least();
		
		
		/******client slider*******/
		 $(".client_slider").owlCarousel({
        autoPlay : 3000,
        stopOnHover : true,
        navigation:false,
        paginationSpeed : 1000,
        goToFirstSpeed : 2000,
        singleItem : true,
        autoHeight : true,
        transitionStyle:"fade"
      });
	  
		
	  
	  /******blog Hover******/
	   $('.img-thumb').on('mouseover', function()
    {
        var overlay = $(this).find('.overlay-wrp');
        var content = $(this).find('.overlay-content');
        var top = parseInt(overlay.height() * 0.5 - 4);
        overlay.stop(true,true).fadeIn(300);
        content.stop().animate({'top': top}, 400);        
    }).on('mouseleave', function()
    {
        var overlay = $(this).find('.overlay-wrp');
        var content = $(this).find('.overlay-content');
        var top = parseInt(overlay.height() * 0.2);        
        content.stop().animate({'top': top}, 100);
        overlay.fadeOut(200);
    });
	  
	  
    <!--contact page validator--> 	
	$("#passion_form").validate();	
	
	
	/* Style Switch sliding-panel  */
  	$(".trigger").click(function(){
		$(".panel").toggle("fast");
		return false;
	}); 
		  
	
			  
    /*****google map*****/
	  var map;
      map = new GMaps({
        el: '#map',
        lat: -12.043333,
        lng: -77.028333,
        zoomControl : true,
        zoomControlOpt: {
            style : 'SMALL',
            position: 'TOP_LEFT'
        },
        panControl : true,
        streetViewControl : false,
        mapTypeControl: true,
        overviewMapControl: false
      });
	  

	  
	  

});

