$( document ).ready(function() {
    // Navigation scrolling transition
    $('[data-trigger="scroll"]').click(function(event) {
      event.preventDefault();

      var $this = $(this),
        $target = $($this.attr('href')),
        topPos = $target.offset().top - 20;

      $('html, body').animate({'scrollTop': topPos}, 618);
    });

    // Flowtype setup
    $('body').flowtype({
         minimum   : 400,
         maximum   : 1200,
         minFont   : 14,
         maxFont   : 60,
         fontRatio : 65,
         lineRatio : 1.6,
    });
});
