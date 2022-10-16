// getting canvas context
canvas = document.getElementById("PingPong")
ctx = canvas.getContext("2d")

// declaring object variables
// then adding those objects to an array "objects"
const ball = new Ball(150, 150, 6)
const paddle = new Paddle(20,150,10,60)

function draw(o) {
    ctx.fillStyle = "white"
        if (o.hasOwnProperty('radius')) {
            ctx.beginPath();
            ctx.arc(
                o.x,
                o.y,
                o.radius,
                0,
                2 * Math.PI
            )
            ctx.fill();
        } else {
            ctx.beginPath();
            ctx.rect(
                o.x - o.width/2,
                o.y - o.height/2 ,
                o.width,
                o.height
            )
            ctx.fill();
        }
}

function divider() {
    if (ctx.setLineDash !== undefined) {
        ctx.setLineDash([40, 25]);
        }
    //   if (ctx.mozDash !== undefined) {
    //     ctx.mozDash = [5, 10];
    //   }
        ctx.beginPath();
        ctx.lineWidth = "4";
        ctx.strokeStyle = "rgba(73, 73, 73, 0.8)";
        ctx.moveTo(150, 0);
        ctx.lineTo(150, 300);
        ctx.stroke();
        ctx.fill();
}

animate();

function animate(){
    ball.update();
    paddle.update();
    canvas.height = canvas.height
    // ctx.beginPath();
    // ctx.moveTo(0, paddle.upperBound);
    // ctx.lineTo(300, paddle.upperBound);
    // ctx.stroke();
    // ctx.beginPath();
    // ctx.moveTo(0, paddle.lowerBound);
    // ctx.lineTo(300, paddle.lowerBound);
    // ctx.stroke();
    divider();
    draw(ball);
    draw(paddle);
    requestAnimationFrame(animate);
}