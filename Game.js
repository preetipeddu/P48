class Game {
 constructor(){

 }

 getGameState(){
     var gameStateRef = database.ref('gameState');
     gameStateRef.on("value", function(data){
         gameState = data.val();
     })
 }

 update(state){
     database.ref('/').update({
         gameState: state
     });
     }

async start(){
  if(gameState == 0){
      player = new Player();
      var playerCountRef = await database.ref("playerCount").once("value");
      if(playerCountRef.exists()){
       playerCount = playerCountRef.val();
       player.getPlayerCount();
      }
      form = new Form();
      form.display();
      
      
  }


}


displayQuestion(currentQuestion){
    
    if(currentQuestion === 1){
        form.hide();
        question1 = createSprite(215,100,100,10);
        question1.addImage(question1Image);
        console.log(currentQuestion);

        yes = createSprite(130,485,60,10);
        yes.addImage(yesImage);
        no = createSprite(330,485,60,10);
        no.addImage(noImage);
        next = createSprite(600,570,40,40);
        next.addImage(nextImage);

    }

    if(mousePressedOver(next)){
        currentQuestion = currentQuestion + 1;
        question1.destroy();
        console.log(currentQuestion);

        question2 = createSprite(215,100,100,10);
        question2.addImage(question2Image);
        next.destroy();
        next2 = createSprite(600,570,40,40);
        next2.addImage(nextImage2); 

        // if(currentQuestion === 2){
        //  console.log(currentQuestion);
            

        // }
    }
    
    if(mousePressedOver(next2)){
        currentQuestion = currentQuestion + 1;
        question2.destroy();
        console.log(currentQuestion);

        question3 = createSprite(215,200,100,10);
        question3.addImage(question3Image);
        next2.destroy();
        next3 = createSprite(600,570,40,40);
        next3.addImage(nextImage3); 
    }


    drawSprites();
}


}
