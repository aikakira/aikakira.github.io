(function() {
    //document.onmousemove = handleMouseMove;
    //function handleMouseMove(event) {
    //    event = event || window.event; // IE-ism
    //    var height = document.body.clientHeight;
    //    var width = document.body.clientWidth;

    //    var x = event.clientX;
    //    var y = event.clientY;
    //    var traction = 1;

    //    // Render background
    //    var background = document.querySelector('.background');
    //   

    //    console.log(y);
    //    console.log(x);

    //    console.log(background);
    //}

    var lFollowX = 0,
        lFollowY = 0,
        x = 0,
        y = 0,
        friction = 1 / 30;

    function moveBackground() {
        x += (lFollowX - x) * friction;
        y += (lFollowY - y) * friction;

        translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

        $('.background').css({
            '-webit-transform': translate,
            '-moz-transform': translate,
            'transform': translate
        });

        window.requestAnimationFrame(moveBackground);
    }

    $(window).on('mousemove click', function(e) {

        var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
        var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
        lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
        lFollowY = (10 * lMouseY) / 100;

    });

    moveBackground();
})();


