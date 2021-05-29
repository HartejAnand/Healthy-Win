class Home{
    constructor(){
        background(0,0,0);

        ground=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
        ground.addImage(backg);
        ground.scale=2;

        beat=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
        beat.addAnimation("beat",heartBeat);
        beat.scale=1.21;
        
        foodB=createSprite(windowWidth*1/4,windowHeight/2.1);
        foodB.shapeColor=rgb(255,0,0);
        foodB.addImage(apple);
        foodB.scale=windowWidth/5000;
        foodB.setCollider("circle",0,0,windowWidth/5);

        exerciseB=createSprite(windowWidth*3/4,windowHeight/2.1);
        exerciseB.shapeColor=rgb(200,200,200);
        exerciseB.addImage(dumbbell);
        exerciseB.scale=windowWidth/5000;
        exerciseB.setCollider("rectangle",0,0,windowWidth/1.4,windowHeight/1.8)

        rewardsB=createSprite(windowWidth*1/4,windowHeight*3/4);
        rewardsB.shapeColor=rgb(255,255,0);
        rewardsB.addImage(trophy);
        rewardsB.scale=windowWidth/5000;
        rewardsB.setCollider("rectangle",0,windowHeight/18,windowWidth/2.3,windowHeight/1.4);

        
    }
    display(){

        foodB.visible=true;
        exerciseB.visible=true;
        rewardsB.visible=true;
        beat.visible=true;


        noStroke();
        textSize(windowWidth/15);
        fill(255,0,0);
        text("HEALTHY  WIN",windowWidth*1/4,windowHeight/6);

        // food button
        if(mouse.isTouching(foodB)){
            foodB.rotation=25;
            if(mouseIsPressed){
                screen="food";
            };
        }else{
            foodB.rotation=0;
        }
        fill(0,0,0);
        textSize(windowWidth/60);
        text("Food tracker",windowWidth/5,windowHeight/2);

        //exercise button
        if(mouse.isTouching(exerciseB)){
            exerciseB.y=windowHeight/2.3;
            if(mouseIsPressed){
                screen="exercise";
            };
        }else{
            exerciseB.y=windowHeight/2.1;
        }
        fill(255,255,255);
        textSize(windowWidth/60);
        text("Exercise tracker",windowWidth/1.45,windowHeight/2);

        //rewards button
        if(mouse.isTouching(rewardsB)){
            rewardsB.scale=windowWidth/4000;
            if(mouseIsPressed){
                screen="rewards";
            };
        }else{
            rewardsB.scale=windowWidth/5000;
        }
        fill(0,0,255);
        textSize(windowWidth/60);
        text("Rewards",windowWidth/4.65,windowHeight/1.3);

        //status
        fill(statusr,statusg,statusb);
        textSize(windowWidth/20);
        text("DAILY STATUS",windowWidth*2.8/5,windowHeight*3.5/5);
        textSize(windowWidth/50);
        text("Total Status: "+status+"\n"+message+"\n",windowWidth*1/1.6,windowHeight*3.9/5);
        
    }

    hide=function(){
        foodB.visible=false;
        exerciseB.visible=false;
        rewardsB.visible=false;
        beat.visible=false;
    };
}