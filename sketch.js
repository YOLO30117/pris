var prisoner, pimg1, pimg2;
var f1, f2, fp1, fp2;
var w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11, w12, w13, w14, w15;
var jail, jb, jail2;
var police1, police2, police3, poimg1, poimg2, poimg3, poimg4;
var key1, key2, kimg1, kimg2;
var goldenkey, goldengate,gg,gk;

function preload() {
  pimg1 = loadImage("images/prisoner1.png");
  pimg2 = loadImage("images/prisoner2.png");
  fp1 = loadImage("images/pri1.png");
  fp2 = loadImage("images/pri2.png")
  jb = loadImage("images/bar.png")
  poimg1 = loadImage("images/g1.png");
  poimg2 = loadImage("images/gb1.png");
  poimg3 = loadImage("images/gr1.png");
  poimg4 = loadImage("images/gl1.png");
  kimg1 = loadImage("images/key1.png");
  gk = loadImage("images/key.png");
}

function setup() {
  createCanvas(600, 500);
  prisoner = createSprite(560, 40, 20, 20);
  prisoner.debug = false;
  prisoner.setCollider("circle", 0, 0, 250);
  prisoner.addImage('ps', pimg2);
  prisoner.scale = 0.09;

  f1 = createSprite(20, 30, 10, 10)
  f1.addImage('furendo', fp1);
  f1.scale = 0.15

  f2 = createSprite(570, 470, 10, 10)
  f2.addImage('furend', fp2);
  f2.scale = 0.15

  jail = createSprite(565, 470, 10, 10);
  jail.addImage('bacha', jb);
  jail.scale = 0.09

  jail2 = createSprite(30, 25, 10, 10);
  jail2.addImage('bachao', jb);
  jail2.scale = 0.09

  police1 = createSprite(460, 170, 10, 10)
  police1.addImage('danda', poimg1)
  police1.scale = 0.7
  police1.debug = false

  police2 = createSprite(230, 460, 10, 10)
  police2.addImage('police', poimg3)
  police2.scale = 0.7

  police1 = createSprite(205, 340, 10, 10)
  police1.addImage('poli', poimg4)
  police1.scale = 0.7

  key1 = createSprite(135, 430, 10, 10);
  key1.addImage('chabi',kimg1);
  key1.scale = 0.04

  key2 = createSprite(30, 110, 10, 10);
  key2.addImage('chab',kimg1);
  key2.scale = 0.04

  goldenkey = createSprite(560,40,10,10);
  goldenkey.addImage('sona',gk);
  goldenkey.scale = 0.06
  goldenkey.visible = false


  w1 = createSprite(510, 100, 10, 300)
  w2 = createSprite(510, 335, 175, 10)
  w3 = createSprite(420, 365, 10, 70)
  w4 = createSprite(380, 395, 70, 10)
  w5 = createSprite(340, 325, 10, 150)
  w6 = createSprite(375, 250, 80, 10)
  w7 = createSprite(410, 185, 10, 140)
  w8 = createSprite(330, 115, 170, 10)
  w9 = createSprite(30, 65, 80, 10)
  w10 = createSprite(90, 370, 10, 300)
  w11 = createSprite(140, 380, 100, 10)
  w12 = createSprite(190, 390, 10, 30)
  w13 = createSprite(170, 150, 10, 300)
  w14 = createSprite(240, 185, 150, 10)
  w15 = createSprite(565, 430, 70, 10)

}

function draw() {
  background(147, 146, 146);
  fill(255, 0, 0);
  text(mouseX + "," + mouseY, mouseX, mouseY)
  drawSprites();
  bounce();
  prisonerControls();
}
function bounce() {
  prisoner.bounceOff(w1)
  prisoner.bounceOff(w2)
  prisoner.bounceOff(w3)
  prisoner.bounceOff(w4)
  prisoner.bounceOff(w5)
  prisoner.bounceOff(w6)
  prisoner.bounceOff(w7)
  prisoner.bounceOff(w8)
  prisoner.bounceOff(w9)
  prisoner.bounceOff(w10)
  prisoner.bounceOff(w11)
  prisoner.bounceOff(w12)
  prisoner.bounceOff(w13)
  prisoner.bounceOff(w14)
  prisoner.bounceOff(w15)
  edges = createEdgeSprites()
  prisoner.bounceOff(edges)
}
function prisonerControls() {
  if (keyDown("w")) {
    prisoner.y -= 5
  }
  if (keyDown("s")) {
    prisoner.y += 5
  }
  if (keyDown("a")) {
    prisoner.x -= 5
    prisoner.addImage('ps', pimg2);
  }
  if (keyDown("d")) {
    prisoner.x += 5
    prisoner.addImage('ps', pimg1);
  }
}