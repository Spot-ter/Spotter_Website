document.addEventListener('DOMContentLoaded', function () {
    
    function angle(cx, cy, ex, ey) {
        const dy = ey - cy;
        const dx = ex - cx;
        const rad = Math.atan2(dy, dx);
        const degree = rad * 180 / Math.PI;
        return degree;
    }

    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const camera = document.getElementById('camera');
        const rekt = camera.getBoundingClientRect();
        const cameraX = rekt.left + rekt.width / 2;
        const cameraY = rekt.top + rekt.height / 2;

        const angledegree = angle(mouseX, mouseY, cameraX, cameraY);
        console.log(angledegree);

        document.getElementById('Circle2').style.transform = `rotate(${90 + angledegree}deg)`;


    });
});