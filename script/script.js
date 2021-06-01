

/* Demo purposes only */
$(".hover").mouseleave(
    function () {
        $(this).removeClass("hover");
    }
);


const scrollProgress = document.getElementById('scroll-progress');
const height =
    document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', () => {
    const scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
    scrollProgress.style.width = `${(scrollTop / height) * 100}%`;
});


var a = 0
$(window).scroll(function () {
    var oTop = $("#projectFacts").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $.fn.jQuerySimpleCounter = function (options) {
            var settings = $.extend({
                start: 0,
                end: 100,
                easing: 'swing',
                duration: 4000,
                complete: ''
            }, options);

            var thisElement = $(this);

            $({ count: settings.start }).animate({ count: settings.end }, {
                duration: settings.duration,
                easing: settings.easing,
                step: function () {
                    var mathCount = Math.ceil(this.count);
                    thisElement.text(mathCount);
                },
                complete: settings.complete
            });
        };


        $('#number1').jQuerySimpleCounter({ end: 12, duration: 3000 });
        $('#number2').jQuerySimpleCounter({ end: 55, duration: 3000 });
        $('#number3').jQuerySimpleCounter({ end: 359, duration: 2000 });
        $('#number4').jQuerySimpleCounter({ end: 246, duration: 2500 });




        a = 1;
    }
})