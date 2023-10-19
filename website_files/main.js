var mouseX = 0, mouseY = 0;
    var container = document.querySelector('.container');
    var containerRect = container.getBoundingClientRect();
    var containerRadius = containerRect.width / 2;

    window.addEventListener('mousemove', function(e) {
        var containerCenterX = containerRect.left + containerRadius;
        var containerCenterY = containerRect.top + containerRadius;
        mouseX = e.pageX - containerCenterX;
        mouseY = e.pageY - containerCenterY;

        var distance = Math.sqrt(mouseX * mouseX + mouseY * mouseY);

        if (distance > containerRadius) {
            var angle = Math.atan2(mouseY, mouseX);
            mouseX = Math.cos(angle) * containerRadius;
            mouseY = Math.sin(angle) * containerRadius;
        }
    });

    var circle = document.getElementById('circle');
    var xp = 0, yp = 0;
    var loop = setInterval(function() {
        xp += (mouseX - xp) / 12;
        yp += (mouseY - yp) / 12;
        circle.style.left = xp + containerRadius + 'px';
        circle.style.top = yp + containerRadius + 'px';
    }, 30);