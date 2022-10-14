let counterVX = document.getElementById('CountVX')
let counterVY = document.getElementById('CountVY')
let counterDiff = document.getElementById('CountDiff')

class Square{
    constructor(x,y,width,height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.vx = 0;
        this.vy = 0;
        this.max = 5;
        this.f = 0.15;
        this.maxD = (Math.sin(45 * (Math.PI/180)) * this.max + this.f).toFixed(1);
        this.a = 0.75;
        // this.vd = Math.sin(45*(Math.PI/180)) * this.v
        
        this.controls=new Controls();
    }
    
    update() {
        let max = this.max + this.f
        if (Object.keys(this.controls).filter(key => this.controls[key]).length === 2) {
            max = this.maxD;
        }
        
        if(this.controls.up){
            this.vy += this.a
        }
        
        if(this.controls.down){
            this.vy -= this.a
        }
         
        if(this.controls.left){
            this.vx += this.a
        }
            // change velocity
        
        if(this.controls.right){
            this.vx -= this.a
        } 
        
        if (this.vx > max){
            this.vx = max}

        if (this.vx < -max){
            this.vx = -max}
        
        if (this.vy > max){
            this.vy = max}

        if (this.vy < -max){
            this.vy = -max}

        if ((this.vy + this.vx))


            // set max speed
        
        if(this.vx>0){
            this.vx -= this.f}

        if(this.vx<0){
            this.vx += this.f}

        if(this.vy>0){
            this.vy -= this.f}

        if(this.vy<0){
            this.vy += this.f}

            // friction

        if(this.x > 300-this.width/2){
            this.x = 300-this.width/2
            this.vx = 0
        }
        if(this.x < this.width/2){
            this.x = this.width/2
            this.vx = 0
        }
        if(this.y > 300-this.width/2){
            this.y = 300-this.width/2
            this.vy = 0
        }
        if(this.y < this.width/2){
            this.y = this.width/2
            this.vy = 0
        }
            

        if(Math.abs(this.vx)<this.f){
            this.vx = 0
        }
        if(Math.abs(this.vy)<this.f){
            this.vy = 0
        }


        this.y -= this.vy/2
        this.x -= this.vx/2
    }
          
    draw(ctx) {
        ctx.beginPath();
        ctx.rect(
            this.x-this.width/2,
            this.y-this.height/2,
            this.width,
            this.height
        );
        counterVX.textContent = `vx: ${this.vx.toFixed(2)}`
        counterVY.textContent = `vy: ${this.vy.toFixed(2)}`
        counterDiff.textContent = `diff: ${(Math.abs(this.vy)+Math.abs(this.vx)).toFixed(2)}`
        ctx.fillStyle = "#FFFFFF";
        ctx.fill();
    }
    
}