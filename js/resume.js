(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-68958693-1', 'auto');
ga('send', 'pageview');

$(function() {
    $('._trackOutboundLink').on('click', function(e){
        e.preventDefault();
        var url = this.getAttribute('href');
        ga('send', 'event', 'outbound', 'click', url, $('a').index($(this)), {'hitCallback':
            function () {
                document.location = url;
            }
        });
    });
    $.scrollDepth({
        eventHandler: function(data) {
            if (data.event == "ScrollTiming") {
                ga('send', 'event', 'scroll depth', 'scroll', data.eventLabel, parseInt(data.eventLabel));
            }
        }
    });
});

