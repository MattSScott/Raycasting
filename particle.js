class Particle {
  constructor(x, y, rayNum) {
    this.pos = createVector(x, y);
    this.num = rayNum;
    this.rays = [];
    for (let i = 0; i < rayNum; i++) {
      let ang = map(i, 0, rayNum, -0.4, 0.4);
      this.rays.push(new Ray(this.pos, ang));
    }
  }
  show() {
    ellipse(this.pos.x, this.pos.y, 20, 20);
  }
  update() {
    let mouse = createVector(mouseX, mouseY);
    this.pos.set(mouse);
  }
}
