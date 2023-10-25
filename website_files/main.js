var mouseX = 0, mouseY = 0;
var container = document.querySelector('.container');
var containerRect = container.getBoundingClientRect();
var containerRadius = containerRect.width / 2;


var boundaryFactor = 8; 

window.addEventListener('mousemove', function(e) {
    var containerCenterX = containerRect.left + containerRadius;
    var containerCenterY = containerRect.top + containerRadius;

    mouseX = e.pageX - containerCenterX;
    mouseY = e.pageY - containerCenterY;

    var distance = Math.sqrt(mouseX * mouseX + mouseY * mouseY);

    if (distance > containerRadius) {
        var angle = Math.atan2(mouseY, mouseX);
        mouseX = Math.cos(angle) * containerRadius * boundaryFactor;
        mouseY = Math.sin(angle) * containerRadius * boundaryFactor;
    }
});

var circle = document.getElementById('circle');
var loop = setInterval(function() {
    var xp = mouseX / 12;
    var yp = mouseY / 12;

    
    var maxX = containerRadius * boundaryFactor - circle.clientWidth / 2;
    var maxY = containerRadius * boundaryFactor - circle.clientHeight / 2;

    
    xp = Math.min(maxX, Math.max(-maxX, xp));
    yp = Math.min(maxY, Math.max(-maxY, yp));

    circle.style.left = xp + containerRadius - circle.clientWidth / 2 + 'px';
    circle.style.top = yp + containerRadius - circle.clientHeight / 2 + 'px';
}, 30);
