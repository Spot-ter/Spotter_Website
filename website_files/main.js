<<<<<<< HEAD
jQuery(document).ready(function() {
    var container = $(".container");
    var circle = $("#circle");

    container.mousemove(function(e){
        var containerCenterX = container.offset().left + container.width() / 2;
        var containerCenterY = container.offset().top + container.height() / 2;

        var mouseX = e.pageX - containerCenterX;
        var mouseY = e.pageY - containerCenterY;

        var distance = Math.sqrt(mouseX * mouseX + mouseY * mouseY);
        var containerRadius = container.width() / 2 - circle.width() / 2; // Adjust for circle size
=======
var mousenegX = 0, mouseposY = 0;
    var container = document.querySelector('.container');
    var containerRect = container.getBoundingClientRect();
    var containerRadius = containerRect.width / 2;

    window.addEventListener('mousemove', function(e) {
        var containerCenternegX = containerRect.left + containerRadius;
        var containerCenterposY = containerRect.top + containerRadius;
        var containerCenterposX = containerRect.right - containerRadius;
        var containerCenternegY = containerRect.bottom - containerRadius;
        mousenegX = e.pageX - containerCenternegX;
        mouseposY = e.pageY - containerCenterposY;
        mouseposX = e.pageX + containerCenterposX;
        mousenegY = e.pageY + containerCenternegY;

        var distance1 = Math.sqrt(mousenegX * mousenegX + mouseposY * mouseposY);
        var distance2 = Math.sqrt(mouseposX * mouseposX + mousenegY * mousenegY);
>>>>>>> ddb31bf9ebe006d8de4124de4865bc3faa25eb28

        if (distance1 > containerRadius) {
            var angle = Math.atan2(mouseposY, mousenegX);
            mousenegX = Math.cos(angle) * containerRadius;
            mouseposY = Math.sin(angle) * containerRadius;
        }
        if (distance2 > containerRadius) {
            var angle = Math.atan2(mousenegY, mouseposX);
            mouseposX = Math.sin(angle) * containerRadius;
            mousenegY = Math.cos(angle) * containerRadius;
        }

<<<<<<< HEAD
        circle.css({ left: mouseX + 'px', top: mouseY + 'px' });
    });
});
=======
    var circle = document.getElementById('circle');
    var xp = 0, yp = 0, xn = 0, yn = 0;
    var loop = setInterval(function() {
        xp += (mousenegX - xp) / 12;
        yp += (mouseposY - yp) / 12;
        xn += (mouseposX - xn) / 12;
        yn += (mousenegY - yn) / 12;
        circle.style.left = xp + containerRadius + 'px';
        circle.style.top = yp + containerRadius + 'px';
        circle.style.right = xn + containerRadius + 'px';
        circle.style.bottom = yn + containerRadius + 'px';
        
    }, 30);
>>>>>>> ddb31bf9ebe006d8de4124de4865bc3faa25eb28
