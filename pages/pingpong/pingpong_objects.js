class Ball {
    constructor(x, y, radius) {
        this.x = x
        this.y = y
        this.radius = radius
        
        this.bounce = "none";
        
        this.vx = Math.ceil(Math.random() * 2) * (Math.round(Math.random()) ? 1 : -1)
        this.vy = Math.ceil(Math.random() * 2) * (Math.round(Math.random()) ? 1 : -1)
    }
    
    update() {
        if (this.x-this.radius/2 <= paddle.x+paddle.width/2 && this.bounce != "paddle") {
            if (this.y >= paddle.y - paddle.height/2 && this.y <= paddle.y + paddle.height/2) {
                // if (this.y > paddle.y) {
                //     this.vy += 0.5
                // } else {
                //     this.vy -= 0.5
                // }
                this.vx -= this.vx*2
                this.bounce = "paddle";
            }
        }
        
        // change Y randomly each bounce, so it wont stay the same
        
        if (this.x < 0) {
            this.vx = Math.ceil(Math.random() * 2) * (Math.round(Math.random()) ? 1 : -1)
            this.vy = Math.ceil(Math.random() * 2) * (Math.round(Math.random()) ? 1 : -1)
            this.y = 150
            this.x = 150
            this.bounce = "none";
        }
        
        if (this.x+this.radius/2 >= 300 && this.bounce != "back") {
            this.vx -= this.vx*2
            if (this.vx < 0) {
                this.vx -= 0.5
                this.vy -= 0.25
            } else {
                this.vx += 0.5
                this.vy -= 0.25
            }
            this.bounce = "back"
        }
        if (this.y <= 0 && this.bounce != "top") {
            this.vy -= this.vy*2
            this.bounce = "top";
        }
        if (this.y >= 300 && this.bounce != "bottom") {
            this.vy -= this.vy*2
            this.bounce = "bottom";
        }
        
        document.getElementById("bounce").textContent = this.bounce
        
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
        
        this.v = 3
        
        this.controls = new PaddleControls();
    }
    
    update() {
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