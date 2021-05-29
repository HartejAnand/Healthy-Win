class Exercise{
    constructor(){
        background(0,0,0);

        cardioU=createSprite(windowWidth/10,windowHeight/3.1,windowWidth/50,windowWidth/50);
        cardioU.addImage(up);
        cardioU.scale=windowWidth/30000;
        cardioU.setCollider("rectangle",0,0,windowWidth/2,windowHeight/2);
        cardioD=createSprite(windowWidth/8,windowHeight/3.1,windowWidth/50,windowWidth/50);
        cardioD.addImage(down);
        cardioD.scale=windowWidth/30000;
        cardioD.setCollider("rectangle",0,0,windowWidth/2,windowHeight/2);

        muscularU=createSprite(windowWidth/10,windowHeight/2.4,windowWidth/50,windowWidth/50);
        muscularU.addImage(up);
        muscularU.scale=windowWidth/30000;
        muscularU.setCollider("rectangle",0,0,windowWidth/2,windowHeight/2);
        muscularD=createSprite(windowWidth/8,windowHeight/2.4,windowWidth/50,windowWidth/50);
        muscularD.addImage(down);
        muscularD.scale=windowWidth/30000;
        muscularD.setCollider("rectangle",0,0,windowWidth/2,windowHeight/2);
        
        sleepU=createSprite(windowWidth/10,windowHeight/1.95,windowWidth/50,windowWidth/50);
        sleepU.addImage(up);
        sleepU.scale=windowWidth/30000;
        sleepU.scale=windowWidth/30000;
        sleepU.setCollider("rectangle",0,0,windowWidth/2,windowHeight/2);
        sleepD=createSprite(windowWidth/8,windowHeight/1.95,windowWidth/50,windowWidth/50);
        sleepD.addImage(down);
        sleepD.scale=windowWidth/30000;
        sleepD.scale=windowWidth/30000;
        sleepD.setCollider("rectangle",0,0,windowWidth/2,windowHeight/2);
        
        nothingU=createSprite(windowWidth/10,windowHeight/1.63,windowWidth/50,windowWidth/50);
        nothingU.addImage(up);
        nothingU.scale=windowWidth/30000;
        nothingU.scale=windowWidth/30000;
        nothingU.setCollider("rectangle",0,0,windowWidth/2,windowHeight/2);
        nothingD=createSprite(windowWidth/8,windowHeight/1.63,windowWidth/50,windowWidth/50);
        nothingD.addImage(down);
        nothingD.scale=windowWidth/30000;
        nothingD.scale=windowWidth/30000;
        nothingD.setCollider("rectangle",0,0,windowWidth/2,windowHeight/2);
        
        Eback=createSprite(windowWidth/20,windowHeight*14/15,windowWidth/20,windowHeight/15);
        Eback.addImage(back);
        Eback.scale=windowWidth/10000;
        Eback.setCollider("rectangle",0,0,windowWidth*2.25/4,windowHeight*3.5/4);
    }
    display(){

        cardioD.visible=true;
        cardioU.visible=true;
        muscularD.visible=true;
        muscularU.visible=true;
        sleepD.visible=true;
        sleepU.visible=true;
        nothingD.visible=true;
        nothingU.visible=true;
        Eback.visible=true;

        clickT--;

        noStroke();
        textSize(windowWidth/15);
        fill(200,200,200);
        text("EXERCISE",windowWidth*0.85/3,windowHeight/6);

        textSize(windowWidth/50);
        strokeWeight(10);
        stroke(255,255,255);
        line(windowWidth/2.2,windowHeight/4,windowWidth/2.2,windowHeight);

        noStroke();

        fill(255,0,0);
        text("Cardio exercise: "+cardio,windowWidth/7,windowHeight*1/3);
        text("Running, walking (quick, almost a jog)...",windowWidth/2.1,windowHeight*1/3);
        if(mouseIsPressed && mouse.isTouching(cardioU) && clickT<0){
            cardio+=1;
            clickT=10;
        }
        if(mouseIsPressed && mouse.isTouching(cardioD) && clickT<0){
            cardio-=1;
            clickT=10;
        }
        if(healthy<0){
            healthy=0;
        }

        fill(255,255,255);
        text("Muscular exercise: "+muscular,windowWidth/7,windowHeight*1/2.3);
        text("Pushups, jumping jacks, situps...",windowWidth/2.1,windowHeight*1/2.3);
        if(mouseIsPressed && mouse.isTouching(muscularU) && clickT<0){
            muscular+=1;
            clickT=10;
        }
        if(mouseIsPressed && mouse.isTouching(muscularD) && clickT<0){
            muscular-=1;
            clickT=10;
        }
        if(muscular<0){
            muscular=0;
        }

        fill(255,0,255);
        text("Sleep: "+sleep,windowWidth/7,windowHeight*1/1.9);
        text("🥱😴... (per hour)",windowWidth/2.1,windowHeight*1/1.9);
        if(mouseIsPressed && mouse.isTouching(sleepU) && clickT<0){
            sleep+=1;
            clickT=10;
        }
        if(mouseIsPressed && mouse.isTouching(sleepD) && clickT<0){
            sleep-=1;
            clickT=10;
        }
        if(sleep<0){
            sleep=0;
        }

        fill(0,155,155);
        text("Nothing: "+nothing,windowWidth/7,windowHeight*1/1.6);
        text("Lying down, watching TV, sitting infront of a computer...",windowWidth/2.1,windowHeight*1/1.6);
        if(mouseIsPressed && mouse.isTouching(nothingU) && clickT<0){
            nothing+=1;
            clickT=10;
        }
        if(mouseIsPressed && mouse.isTouching(nothingD) && clickT<0){
            nothing-=1;
            clickT=10;
        }
        if(nothing<0){
            nothing=0;
        }

        fill(155,155,155);
        text("Per 15 minutes",windowWidth*5/6,windowHeight*19/20);

        if(mouseIsPressed && mouse.isTouching(Fback)){
            screen="home";
        }

    }
    hide(){
        cardioD.visible=false;
        cardioU.visible=false;
        muscularD.visible=false;
        muscularU.visible=false;
        sleepD.visible=false;
        sleepU.visible=false;
        nothingD.visible=false;
        nothingU.visible=false;
        Eback.visible=false;
    };
}