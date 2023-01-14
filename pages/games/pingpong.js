// getting canvas context
canvas = document.getElementById("PingPong")
ctx = canvas.getContext("2d")

// declaring object variables
// then adding those objects to an array "objects"
const game = new Game()
const ball = new Ball(150, 150, 6)
const paddle = new Paddle(20,150,10,60)
const cpu = new CPU(280,150,10,60)

let end = false;
let result
 

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

function endCheck() {
    if (game.myScore === 10 || game.cpuScore === 10) {
        end = true;
    }


    if (myScore === 10) {
        result = "WIN"
    } else {
        result = "LOSE"
    }
}

animate();

function animate(){
    ball.update();
    paddle.update();
    game.update();
    cpu.update();
    canvas.height = canvas.height
    ctx.textAlign = "center"
    ctx.fillStyle = "rgba(95, 90, 90, 0.9)"
    ctx.font = "25px Arvo";
    ctx.fillText(game.myScore, 23, 32,)
    ctx.fillText(game.cpuScore, 277, 32,)
    divider();
    draw(ball);
    draw(paddle);
    draw(cpu);
    if (!end) {
        requestAnimationFrame(animate);
    }
}