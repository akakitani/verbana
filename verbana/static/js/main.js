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
         minFont   : 12,
         maxFont   : 60,
         fontRatio : 70,
         lineRatio : 1.6,
    });
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-46751148-1', 'verbanamusic.com');
ga('send', 'pageview');
