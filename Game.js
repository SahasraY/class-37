class Game {
  constructor(){
    
  }
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }

  play(){
    var y=100;
    form.greeting.hide();
    Player.getPlayerInfo();
    text("Game Start",300,400)
    if(allPlayers!==undefined){
    for(var plr in allPlayers){
      y=y+20;
    text(allPlayers[plr].name+":"+allPlayers[plr].distance,100,y)
    
    if(plr==="player"+player.index){
      fill("red")
    }
    else{
      fill("black")
    }
     }
    }
if(keyDown(UP_ARROW) && (player.index!=null) ){
  player.distance=player.distance+30;
  player.update();
}
}
}
