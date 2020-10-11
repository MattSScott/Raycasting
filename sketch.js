//Credit to Prof. Shiffman for the inspiration!
let blocks = [];
let doom = [];
let source;
let rayNum = 50;
let totalBlocks = 6;
let doomW = 400;
let doomH = 600;

function setup() {
  createCanvas(800, 600);
  source = new Particle(100, 200, rayNum);
  for (let i = 0; i < totalBlocks; i++) {
    let blockSx = random(0, width/2);
    let blockSy = random(0, height);
    let blockFx = random(0, width/2);
    let blockFy = random(0, height);
    blocks.push(new Block(blockSx, blockSy, blockFx, blockFy));
  }

}

function draw() {
 background(0);


  //for (let ray of source.rays) {
  for(let i=0; i<source.rays.length; i++){
    //for (let block of blocks) {
    for(let j=0; j<blocks.length; j++){
      blocks[j].show();
      source.rays[i].draw();
      let d = source.rays[i].hitClosest(blocks);
      drawScene(d, i);
    }
  }

  source.show();
  source.update();

}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    for (let ray of source.rays) {
      ray.dir.rotate(-0.5);
    }
  } else if (keyCode === DOWN_ARROW) {
    for (let ray of source.rays) {
      ray.dir.rotate(0.5);
    }
  }
}

function drawScene(d, i){
  if(d){
  const w = doomW / source.rays.length;
  push();
  translate(doomW, 0);
    noStroke();
    const sq = d * d;
    const wSq = doomW * doomW;
    const b = map(sq, 0, wSq, 255, 0);
    const h = map(d, 0, doomW, doomH, 0);
    fill(b);
    rectMode(CENTER);
    rect(i * w + w / 2, doomH / 2, w + 1, h);
  pop();
  }
}
