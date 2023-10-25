var mouseX = 0, mouseY = 0;
    var container = document.querySelector('.container');
    var containerRect = container.getBoundingClientRect();
    var containerRadius = containerRect.width / 2;

    window.addEventListener('mousemove', function(e) {
        var containerCenterX = containerRect.left + containerRadius;
        var containerCenterY = containerRect.top + containerRadius;
        // var containerCenternegX = containerRect.left + containerRadius;
        // var containerCenterposY = containerRect.top + containerRadius;
        // var containerCenterposX = containerRect.right + containerRadius;
        // var containerCenternegY = containerRect.bottom + containerRadius;
        mouseX = e.pageX - containerCenterX;
        mouseY = e.pageY - containerCenterY;
        // mousenegX = e.pageX - containerCenternegX;
        // mouseposY = e.pageY - containerCenterposY;
        // mouseposX = e.pageX - containerCenterposX;
        // mousenegY = e.pageY - containerCenternegY;

        var distance = Math.sqrt(mouseX * mouseX + mouseY * mouseY);
        // var distance1 = Math.sqrt(mousenegX * mousenegX + mouseposY * mouseposY);
        // var distance2 = Math.sqrt(mouseposX * mouseposX + mousenegY * mousenegY);

        if (distance > containerRadius) {
            var angle = Math.atan2(mouseY, mouseX);
            mouseX = Math.cos(angle) * containerRadius;
            mouseY = Math.sin(angle) * containerRadius;
        }
        // if (distance1 > containerRadius) {
        //     var angle = Math.atan2(mouseposY, mousenegX);
        //     mousenegX = Math.cos(angle) * containerRadius;
        //     mouseposY = Math.sin(angle) * containerRadius;
        // }
        // if (distance2 > containerRadius) {
        //     var angle = Math.atan2(mousenegY, mouseposX);
        //     mouseposX = Math.cos(angle) * containerRadius;
        //     mousenegY = Math.sin(angle) * containerRadius;
        // }
    });

    var circle = document.getElementById('circle');
    var xp = 0, yp = 0;
    // var xn = 0, yn = 0;
    var loop = setInterval(function() {
        xp += (mouseX - xp) / 12;
        yp += (mouseY - yp) / 12;
        // xn += (mouseposX + xn) / 12;
        // yn += (mousenegY + yn) / 12;
        circle.style.left = xp + containerRadius + 'px';
        circle.style.top = yp + containerRadius + 'px';
        // circle.style.right = xp - containerRadius + 'px';
        // circle.style.bottom = yp - containerRadius + 'px';
        
    }, 30);