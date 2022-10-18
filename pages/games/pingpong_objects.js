class Game {
    constructor() {
        this.myScore = 0
        this.cpuScore = 0
    }

    
    update() {
        if (ball.score != 0) {
            if (ball.score === -1) {
                this.cpuScore += 1
            } else {
                this.myScore += 1
            }
        } 

    }
 
}


class Ball {
    constructor(x, y, radius) {
        this.x = x
        this.y = y
        this.radius = radius
        
        this.bounce = "none";
        
        this.vx = Math.ceil(Math.random() * 2) * (Math.round(Math.random()) ? 1 : -1)
        this.vy = Math.ceil(Math.random() * 2) * (Math.round(Math.random()) ? 1 : -1)

        this.score = 0
    }
    
    update() {
        if (this.x-this.radius/2 <= paddle.x+paddle.width/2 && this.bounce != "paddle") {
            if (this.y >= paddle.y - paddle.height/2 && this.y <= paddle.y + paddle.height/2) {


                if (this.vx < 0) {
                    this.vx -= 0.25
                } else {
                    this.vx += 0.25
                }


                this.vx -= this.vx*2
                this.vy = (Math.random() + 0.25) * Math.abs(this.vx) * Math.sign(this.vy)

                console.log(this.vy)
                

                this.bounce = "paddle";
            }
        }

        if (this.x+this.radius/2 >= cpu.x-cpu.width/2 && this.bounce != "cpu") {
            if (this.y >= cpu.y - cpu.height/2 && this.y <= cpu.y + cpu.height/2) {


                if (this.vx < 0) {
                    this.vx -= 0.25
                } else {
                    this.vx += 0.25
                }


                this.vx -= this.vx*2
                this.vy = (Math.random() + 0.25) * Math.abs(this.vx) * Math.sign(this.vy)

                console.log(this.vy)
                

                this.bounce = "cpu";
            }
        }
        
        // change Y randomly each bounce, so it wont stay the same
        
        if (this.x-this.radius <= 10) {
            this.vx = Math.ceil(Math.random() * 2) * (Math.round(Math.random()) ? 1 : -1)
            this.vy = Math.ceil(Math.random() * 2) * (Math.round(Math.random()) ? 1 : -1)
            this.y = 150
            this.x = 150
            this.bounce = "none";

            this.score = -1
        }
        
        if (this.x+this.radius >= 290) {
            this.vx = Math.ceil(Math.random() * 2) * (Math.round(Math.random()) ? 1 : -1)
            this.vy = Math.ceil(Math.random() * 2) * (Math.round(Math.random()) ? 1 : -1)
            this.y = 150
            this.x = 150
            this.bounce = "none";

            this.score = 1
        }

        if (this.y <= 0 && this.bounce != "top") {
            this.vy -= this.vy*2
            this.bounce = "top";
        }
        if (this.y >= 300 && this.bounce != "bottom") {
            this.vy -= this.vy*2
            this.bounce = "bottom";
        }
        
        
        this.x -= this.vx
        this.y -= this.vy
    }
}

class Paddle {
    constructor(x, y, width, height) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        
        // this.lowerBound = this.y + this.height/2
        // this.upperBound = this.y - this.height/2
        
        this.v = 4
        
        this.controls = new PaddleControls();
    }
    
    update() {
        if (ball.score != 0) {
            this.y = 150
        }

        if (this.controls.up && this.y >= 0 + this.height/2) {
            this.y -= this.v
        }
        if (this.controls.down  && this.y <= 300 - this.height/2) {
            this.y += this.v
        }
        // this.upperBound = this.y - this.height/2 - 5
        // this.lowerBound = this.y + this.height/2 + 5
    }
}

class CPU {
    constructor(x, y, width, height) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        
        this.turn = false;
        this.ballX
        this.ballY
        this.goal
    }
    
    update() {
        
        if (ball.score != 0) {
            this.y = 150

            ball.score = 0
        }

        // use vx * 150 and vy to find triangle of movement
        
       if (!this.turn && ball.x >= 150) {
            this.ballX = ball.x
            this.ballY = ball.y

            this.goal = ((280 - this.ballX)/ball.vx) * ball.vy + this.ballY
            if (this.goal < 0) {
                this.goal = Math.abs(this.goal)
            }
            if (this.goal > 300) {
                this.goal = 300 - Math.abs(300 - this.goal)
            }

            this.turn = true;
       }
       if (this.y < this.goal && this.turn === true && this.y <= 300 - this.height/2) {
            this.y += 4
       }
       if (this.y > this.goal && this.turn === true && this.y >= 0 + this.height/2) {
            this.y -= 4
       }

       if (ball.x < 150) {
        this.turn = false;
       }
    }
}