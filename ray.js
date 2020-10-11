class Ray {
  constructor(source, angle) {
    this.pos = source;
    this.a = angle;
    this.dir = createVector(1, 0);
    this.dir.rotate(this.a);
  }

  draw() {
    stroke(255);
    strokeWeight(2);
    push();
    translate(this.pos.x, this.pos.y);
    line(0, 0, this.dir.x, this.dir.y);
    pop();
  }

  cast(Block) {
    const x1 = Block.start.x;
    const y1 = Block.start.y;
    const x2 = Block.end.x;
    const y2 = Block.end.y

    const x3 = this.pos.x;
    const y3 = this.pos.y;
    const x4 = this.pos.x + this.dir.x;
    const y4 = this.pos.y + this.dir.y;

    const tt = (x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4);
    const tb = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

    const t = tt / tb;

    const ut = (x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3);

    const u = -ut / tb;

    if (t >= 0 && t <= 1 && u >= 0) {
      const px = x1 + t * (x2 - x1);
      const py = y1 + t * (y2 - y1);
      return createVector(px, py, u); //get intersect + distance
    } else {
      return;
    }
  }

  hitClosest(blocks) {
    let mini = 1000;
    let mindex = 0;
    for (let i = 0; i < blocks.length; i++) {
      let data = this.cast(blocks[i]);
      if (data) {
        let u = data.z;
        if (u < mini) {
          mini = u
          mindex = i;
        }
      }
    }
    if (this.cast(blocks[mindex])) {
      let Px = this.cast(blocks[mindex]).x;
      let Py = this.cast(blocks[mindex]).y;
      line(this.pos.x, this.pos.y, Px, Py);
      return this.cast(blocks[mindex]).z;
    }
  }
}
