// javascript
let canvas = document.getElementById('Canvas');
let ctx = canvas.getContext('2d');

ctx.fillStyle = "#FFFFFF";



const square = new Square(150, 150, 10, 12);



animate();

function animate(){
    square.update();
    canvas.height = canvas.height
    square.draw(ctx);
    requestAnimationFrame(animate);
}

max = (Math.sin(45 * (Math.PI/180)) * 5 + 0.15).toFixed(1);

max2 = max

console.log(max)

// rad * (PI/180) = deg