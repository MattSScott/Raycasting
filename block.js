class Block{
  constructor(stx, sty, fix, fiy){
    this.start = createVector(stx, sty);
    this.end = createVector(fix, fiy);
  }
  show(){
    fill(255);
    line(this.start.x, this.start.y, this.end.x, this.end.y);
  }
}
