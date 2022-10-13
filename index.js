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

function censorToggle(){
    alert("button not coded yet! sorry dad!!")
}