class Food{
    constructor(){
        background(0,0,0);

        healthyU=createSprite(windowWidth/10,windowHeight/3.1,windowWidth/50,windowWidth/50);
        healthyU.addImage(up);
        healthyU.scale=windowWidth/30000;
        healthyU.setCollider("rectangle",0,0,windowWidth/2,windowHeight/2);
        healthyD=createSprite(windowWidth/8,windowHeight/3.1,windowWidth/50,windowWidth/50);
        healthyD.addImage(down);
        healthyD.scale=windowWidth/30000;
        healthyD.setCollider("rectangle",0,0,windowWidth/2,windowHeight/2);

        unhealthyU=createSprite(windowWidth/10,windowHeight/2.4,windowWidth/50,windowWidth/50);
        unhealthyU.addImage(up);
        unhealthyU.scale=windowWidth/30000;
        unhealthyU.setCollider("rectangle",0,0,windowWidth/2,windowHeight/2);
        unhealthyD=createSprite(windowWidth/8,windowHeight/2.4,windowWidth/50,windowWidth/50);
        unhealthyD.addImage(down);
        unhealthyD.scale=windowWidth/30000;
        unhealthyD.setCollider("rectangle",0,0,windowWidth/2,windowHeight/2);
        
        dessertU=createSprite(windowWidth/10,windowHeight/1.95,windowWidth/50,windowWidth/50);
        dessertU.addImage(up);
        dessertU.scale=windowWidth/30000;
        dessertU.scale=windowWidth/30000;
        dessertU.setCollider("rectangle",0,0,windowWidth/2,windowHeight/2);
        dessertD=createSprite(windowWidth/8,windowHeight/1.95,windowWidth/50,windowWidth/50);
        dessertD.addImage(down);
        dessertD.scale=windowWidth/30000;
        dessertD.scale=windowWidth/30000;
        dessertD.setCollider("rectangle",0,0,windowWidth/2,windowHeight/2);
        
        drinksU=createSprite(windowWidth/10,windowHeight/1.63,windowWidth/50,windowWidth/50);
        drinksU.addImage(up);
        drinksU.scale=windowWidth/30000;
        drinksU.scale=windowWidth/30000;
        drinksU.setCollider("rectangle",0,0,windowWidth/2,windowHeight/2);
        drinksD=createSprite(windowWidth/8,windowHeight/1.63,windowWidth/50,windowWidth/50);
        drinksD.addImage(down);
        drinksD.scale=windowWidth/30000;
        drinksD.scale=windowWidth/30000;
        drinksD.setCollider("rectangle",0,0,windowWidth/2,windowHeight/2);
        
        liquidsU=createSprite(windowWidth/10,windowHeight/1.425,windowWidth/50,windowWidth/50);
        liquidsU.addImage(up);
        liquidsU.scale=windowWidth/30000;
        liquidsU.scale=windowWidth/30000;
        liquidsU.setCollider("rectangle",0,0,windowWidth/2,windowHeight/2);
        liquidsD=createSprite(windowWidth/8,windowHeight/1.425,windowWidth/50,windowWidth/50);
        liquidsD.addImage(down);
        liquidsD.scale=windowWidth/30000;
        liquidsD.scale=windowWidth/30000;
        liquidsD.setCollider("rectangle",0,0,windowWidth/2,windowHeight/2);
        
        Fback=createSprite(windowWidth/20,windowHeight*14/15,windowWidth/20,windowHeight/15);
        Fback.addImage(back);
        Fback.scale=windowWidth/10000;
        Fback.setCollider("rectangle",0,0,windowWidth*2.25/4,windowHeight*3.5/4);
    }
    display(){

        healthyD.visible=true;
        healthyU.visible=true;
        unhealthyD.visible=true;
        unhealthyU.visible=true;
        dessertD.visible=true;
        dessertU.visible=true;
        drinksD.visible=true;
        drinksU.visible=true;
        liquidsD.visible=true;
        liquidsU.visible=true;
        Fback.visible=true;

        clickT--;

        noStroke();
        textSize(windowWidth/15);
        fill(255,0,0);
        text("FOOD",windowWidth*1.2/3,windowHeight/6);

        textSize(windowWidth/50);
        strokeWeight(10);
        stroke(255,255,255);
        line(windowWidth/2.2,windowHeight/4,windowWidth/2.2,windowHeight);

        noStroke();

        fill(0,200,0);
        text("Healthy foods: "+healthy,windowWidth/7,windowHeight*1/3);
        text("Foods like fruits, vegtables, salads...",windowWidth/2.1,windowHeight*1/3);
        if(mouseIsPressed && mouse.isTouching(healthyU) && clickT<0){
            healthy+=1;
            clickT=10;
        }
        if(mouseIsPressed && mouse.isTouching(healthyD) && clickT<0){
            healthy-=1;
            clickT=10;
        }
        if(healthy<0){
            healthy=0;
        }

        fill(200,100,0);
        text("Unhealthy foods: "+unhealthy,windowWidth/7,windowHeight*1/2.3);
        text("Foods like chips, burgers, pizza...",windowWidth/2.1,windowHeight*1/2.3);
        if(mouseIsPressed && mouse.isTouching(unhealthyU) && clickT<0){
            unhealthy+=1;
            clickT=10;
        }
        if(mouseIsPressed && mouse.isTouching(unhealthyD) && clickT<0){
            unhealthy-=1;
            clickT=10;
        }
        if(unhealthy<0){
            unhealthy=0;
        }

        fill(255,100,100);
        text("Desserts: "+dessert,windowWidth/7,windowHeight*1/1.9);
        text("Foods like candy, chocolate, ice cream...",windowWidth/2.1,windowHeight*1/1.9);
        if(mouseIsPressed && mouse.isTouching(dessertU) && clickT<0){
            dessert+=1;
            clickT=10;
        }
        if(mouseIsPressed && mouse.isTouching(dessertD) && clickT<0){
            dessert-=1;
            clickT=10;
        }
        if(dessert<0){
            dessert=0;
        }

        fill(0,0,255);
        text("Healthy drinks: "+drinks,windowWidth/7,windowHeight*1/1.6);
        text("Drinks like water, milk...",windowWidth/2.1,windowHeight*1/1.6);
        if(mouseIsPressed && mouse.isTouching(drinksU) && clickT<0){
            drinks+=1;
            clickT=10;
        }
        if(mouseIsPressed && mouse.isTouching(drinksD) && clickT<0){
            drinks-=1;
            clickT=10;
        }
        if(drinks<0){
            drinks=0;
        }

        fill(255,100,0);
        text("Unhealthy drinks: "+liquids,windowWidth/7,windowHeight*1/1.4);
        text("Drinks like juice, soda...",windowWidth/2.1,windowHeight*1/1.4);
        if(mouseIsPressed && mouse.isTouching(liquidsU) && clickT<0){
            liquids+=1;
            clickT=10;
        }
        if(mouseIsPressed && mouse.isTouching(liquidsD) && clickT<0){
            liquids-=1;
            clickT=10;
        }
        if(liquids<0){
            liquids=0;
        }

        if(mouseIsPressed && mouse.isTouching(Fback)){
            screen="home";
        }

    }
    hide(){
        healthyD.visible=false;
        healthyU.visible=false;
        unhealthyD.visible=false;
        unhealthyU.visible=false;
        dessertD.visible=false;
        dessertU.visible=false;
        drinksD.visible=false;
        drinksU.visible=false;
        liquidsD.visible=false;
        liquidsU.visible=false;
        Fback.visible=false;
    };
}