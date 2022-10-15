// getting canvas context
canvas = document.getElementById("PingPong")
ctx = canvas.getContext("2d")

// declaring object variables
// then adding those objects to an array "objects"
const ball = new Ball(150, 150, 6)
const paddle = new Paddle(20,150,10,100)
const objects = [ball, paddle]

// setting ctx fill color

// takes each object in "objects" and draws it
// function draw(objects) {
//     ctx.fillStyle = "white"
//     objects.forEach(o => {
//         if (o.hasOwnProperty('radius')) {
//         ctx.beginPath();
//         ctx.arc(
//             o.x,
//             o.y,
//             o.radius,
//             0,
//             2 * Math.PI
//         )
//         ctx.fill();
//     } else {
//         ctx.beginPath();
//         ctx.rect(
//             o.x - o.width/2,
//             o.y - o.height/2 ,
//             o.width,
//             o.height
//         )
//         ctx.fill();
//     }
//   })
// }

// function update(objects) {
//     objects.forEach(o => {
//         o.update();
//     });
// }

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
    draw(ball);
    draw(paddle);
    requestAnimationFrame(animate);
}