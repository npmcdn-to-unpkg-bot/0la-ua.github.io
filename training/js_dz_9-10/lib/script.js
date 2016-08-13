(function($) {

    var params = {
        changedEl: "#cusel",
        visRows: 4,
        scrollArrows: true
    }
    cuSel(params);

    var connector = function(itemNavigation, carouselStage) { 
        return carouselStage.jcarousel('carousel-item').eq(itemNavigation.index());
    };

    $(function() {

        var carouselStage      = $('.carousel-stage').jcarousel();
        var carouselNavigation = $('.carousel-navigation').jcarousel();


        $('.jcarousel').jcarousel({
            animation: {
                duration: 800,
                easing:   'linear',
                complete: function() {}
            }
        });

        $('.jcarousel-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();
            


        $('.next-navigation')
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        $('.prev-navigation')
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });
    });

$( "li.menu-items" )
  .mouseover(function() {
   $(this).animate({
            backgroundColor: "#FD7B7B"
    }, 150 );
  })
  .mouseout(function() {
   $(this).animate({
            backgroundColor: "#FF6464"
    }, 100 );
  });

$( ".sub-menu li" )
  .mouseover(function() {
   $(this).animate({
            backgroundColor: "#FF6464"
    }, 150 );
  })
  .mouseout(function() {
   $(this).animate({
            backgroundColor: "#DE5757"
    }, 130 );
  });

})(jQuery);




