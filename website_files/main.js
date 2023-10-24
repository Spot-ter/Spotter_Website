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

        if (distance > containerRadius) {
            var angle = Math.atan2(mouseY, mouseX);
            mouseX = Math.cos(angle) * containerRadius;
            mouseY = Math.sin(angle) * containerRadius;
        }

        circle.css({ left: mouseX + 'px', top: mouseY + 'px' });
    });
});