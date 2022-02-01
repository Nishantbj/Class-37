class Game {
  constructor() {}

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  update(state){
    database.ref("/").update({
      gameState:state
    })
  }

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();
    car1 = createSprite(200,300)
    car1.addImage(car1_img)
    car1.scale = 0.1
    car2 = createSprite(400,300)
    car2.addImage(car2_img)
    car2.scale = 0.1
  }

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  play() {
    this.handleElements()
    image(track,0,-height*5,width,height*6)
    drawSprites()
  }
  handlePlayerControls(){
    if (keyIsDown(UP_ARROW)){
      
    }
  }
}
