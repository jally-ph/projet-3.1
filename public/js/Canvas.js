class Canvas {

  constructor(canvas, mousePos, lastPos){
    console.log(this);
  



    // this.drawLoop();

    
    this.canvas = canvas;
    this.rect = canvas.getBoundingClientRect();
    this.mousePos = mousePos;
    this.lastPos = lastPos;

  }
 
  
  drawLoop(drawing) {
        requestAnimFrame(this.drawLoop);
        this.renderCanvas(drawing);
        // console.log("hey A!");
  };



  getMousePos(canvasDom, mouseEvent) {
    
    return {
      x: mouseEvent.clientX - this.rect.left,
      y: mouseEvent.clientY - this.rect.top
    }
  }

  getTouchPos(canvasDom, touchEvent) {
    return {
      x: touchEvent.touches[0].clientX - this.rect.left,
      y: touchEvent.touches[0].clientY - this.rect.top
    }
  }

  renderCanvas(drawing) {
    // console.log("hey C1!");
    console.log(drawing);
    // console.log(this.rect);
    if (drawing) {
      ctx.moveTo(this.lastPos.x, this.lastPos.y);
      ctx.lineTo(this.mousePos.x, this.mousePos.y);
      ctx.stroke();
      this.lastPos = this.mousePos;
      // console.log("drawing there!!!!");
    }
  }

  clearCanvas() {
    this.canvas.width = this.canvas.width;
  }

  


}

		
