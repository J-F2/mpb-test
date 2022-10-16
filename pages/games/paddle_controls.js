   class PaddleControls{
       constructor(){    
        this.up = false;
        this.down = false;
        
        this.#addKeyboardListeners();
    }
    
    #addKeyboardListeners(){
        document.onkeydown=(event)=>{
            switch(event.key){
                case 'w':
                    this.up = true;
                    break;
                case "s":
                    this.down = true;
                    break;
            }
        }
        document.onkeyup=(event)=>{
            switch(event.key){
                case "w":
                    this.up = false;
                    break;
                case "s":
                    this.down = false;
                    break;
            }
        }
    }
}