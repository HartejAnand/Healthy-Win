class Rewards{
    constructor(){
        background(0,0,0);

        healthyBite=createSprite(windowWidth*1/5,windowHeight/3);
        healthyBite.addImage(foodTrophy);
        healthyBite.scale=windowWidth/5000;
        healthyBite.setCollider("rectangle",0,windowHeight/18,windowWidth/2.3,windowHeight/1.2);

        hydrated=createSprite(windowWidth*2/5,windowHeight/3);
        hydrated.addImage(blankTrophy);
        hydrated.scale=windowWidth/5000;
        hydrated.setCollider("rectangle",0,windowHeight/18,windowWidth/2.3,windowHeight/1.2);

        marathon=createSprite(windowWidth*3/5,windowHeight/3);
        marathon.addImage(exerciseTrophy);
        marathon.scale=windowWidth/5000;
        marathon.setCollider("rectangle",0,windowHeight/18,windowWidth/2.3,windowHeight/1.2);

        ripvanwinkle=createSprite(windowWidth*4/5,windowHeight/3);
        ripvanwinkle.addImage(exerciseTrophy);
        ripvanwinkle.scale=windowWidth/5000;
        ripvanwinkle.setCollider("rectangle",0,windowHeight/18,windowWidth/2.3,windowHeight/1.2);

        Rback=createSprite(windowWidth/20,windowHeight*14/15,windowWidth/20,windowHeight/15);
        Rback.addImage(back);
        Rback.scale=windowWidth/10000;
        Rback.setCollider("rectangle",0,0,windowWidth*2.25/4,windowHeight*3.5/4);
            
    }
    display(){

        healthyBite.visible=true;
        hydrated.visible=true;
        marathon.visible=true;
        ripvanwinkle.visible=true;
        Rback.visible=true;
        
        
        noStroke();
        textSize(windowWidth/15);
        fill(255,255,0);
        text("REWARDS",windowWidth*1/3,windowHeight/6);

        textSize(windowWidth/50);

        text("Healthy Bite",windowWidth*0.75/5,windowHeight*1/2);
        text("Hyderated",windowWidth*1.75/5,windowHeight*1/2);
        text("Marathon",windowWidth*2.775/5,windowHeight*1/2);
        text("Rip Van Winkle",windowWidth*3.65/5,windowHeight*1/2);

        textSize(windowWidth/75);
        fill(100,100,255);

        if(mouse.isTouching(healthyBite)){
            text("Eat healthy for a week",mouseX,mouseY);
        }

        if(mouse.isTouching(hydrated)){
            text("Locked",mouseX,mouseY);
        }

        if(mouse.isTouching(marathon)){
            text("Run a mile a day",mouseX,mouseY);
        }

        if(mouse.isTouching(ripvanwinkle)){
            text("Get 8 hours of sleep for a month",mouseX,mouseY);
        }

        fill(150,150,150);
        rect(windowWidth*0.8/3,windowHeight*1.8/3,windowWidth/6,windowWidth/6);
        fill(100,100,100);
        textSize(windowWidth/25);
        text("LOCKED",windowWidth*0.8/3,windowHeight*2.3/3);

        textSize(windowWidth/50);
        fill(random(100,150));
        text("Note:\nRewards will have to be unlocked, they are unlocked\nfor the prototype as all rewards will have to be unlocked\nover periods of time when the app is completed\nGames can be unlocked through the same process",windowWidth*2/4,windowHeight*2/3);

        if(mouseIsPressed && mouse.isTouching(Rback)){
            screen="home";
        }

    }
    hide(){
        healthyBite.visible=false;
        hydrated.visible=false;
        marathon.visible=false;
        ripvanwinkle.visible=false;
        Rback.visible=false;
    }
}