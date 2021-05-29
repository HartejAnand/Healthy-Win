var screen="home";

var home;
var heartBeat, beat;
var foodB,exerciseB,rewardsB;
var apple,dumbbell,trophy;
var status="Good";
var statusr,statusg,statusb;
var score=0;
var message;

var clickT=0;
var up,down;
var back;
var backg, ground;

var food;
var healthy=0;
var healthyU,healthyD;
var unhealthy=0;
var unhealthyU,unhealthyD;
var dessert=0;
var dessertU,dessertD;
var drinks=0;
var drinksU,drinksD;
var liquids=0;
var liquidsU,liquidsD;
var Fback;

var exercise;
var cardio=0;
var cardioU;
var cardioD;
var muscular=0;
var muscularU;
var muscularD;
var sleep=0;
var sleepU;
var sleepD;
var nothing=0;
var nothingU;
var nothingD;
var Eback;

var rewards;
var foodTrophy, exerciseTrophy, blankTrophy;
var healthyBite;
var marathon;
var hydrated;
var ripvanwinkle;
var Rback;

var mouse;

function setup() {
  createCanvas(windowWidth,windowHeight);
  home=new Home;
  food=new Food;
  exercise=new Exercise;
  rewards=new Rewards;

  mouse=createSprite(mouseX,mouseY,windowWidth/150,windowHeight/150);
  mouse.visible=false;
}

function preload(){
  heartBeat=loadAnimation("heartBeat1.png","heartBeat2.png","heartBeat3.png","heartBeat4.png","heartBeat5.png","heartBeat6.png"
  ,"heartBeat7.png","heartBeat8.png","heartBeat9.png","heartBeat10.png","heartBeat11.png","heartBeat12.png","heartBeat13.png",
  "heartBeat14.png","heartBeat15.png","heartBeat16.png","heartBeat17.png","heartBeat18.png","heartBeat19.png","heartBeat20.png",
  "heartBeat21.png");
  apple=loadImage("apple.png");
  dumbbell=loadImage("dumbbell.png");
  trophy=loadImage("trophy.png");

  back=loadImage("home.png");
  backg=loadImage("background.png");

  up=loadImage("up.png");
  down=loadImage("down.png");

  foodTrophy=loadImage("foodTrophy.png");
  exerciseTrophy=loadImage("exerciseTrophy.png");
  blankTrophy=loadImage("blankTrophy.png");
}

function draw() {
  console.log(screen)
  mouse.x=mouseX;
  mouse.y=mouseY;
  background(255,255,255);

  /*SCORING SYSTEM=
  Healthy foods = plus 2 points
  Unhealthy foods = minus 2 point
  Dessert =  minus 2 points
  Healthy Drinks = plus 1 point
  Unhealthy Drinks = minus 1 point
  Cardio exersize = plus 1 point  \_________________________________
  Muscular exersze = plus 1 point /  (because measered per 15 mins)
  Sleep = plus 1 point per 8 (recomended sleep time)
  Nothing = minus 1 points*/
  score=(healthy*2)-(unhealthy*2)-(dessert*2)+(drinks)-(liquids)+(cardio)+(muscular)+(sleep/8)-(nothing);
  
  if(score>=10 && score<15){
    status="Good";
    statusr=0;
    statusg=255;
    statusb=0;
  }
  if(score>=7 && score<10){
    status="Ok";
    statusr=255;
    statusg=255;
    statusb=0;
  }
  if(score>3 && score<7){
    status="Bad";
    statusr=255;
    statusg=155;
    statusb=0;
  }
  if(score<=3){
    status="Really bad";
    statusr=255;
    statusg=0;
    statusb=0;
  }
  if(score>=15){
    status="Super good";
    statusr=0;
    statusg=0;
    statusb=255;
  }
  if(healthy+unhealthy+dessert+liquids+drinks/2>=10){
    score=score-(healthy+unhealthy+dessert+liquids+drinks/2)/2;
  }
  if(drinks<5){
    message="Drink more water";
  }else{
  if(healthy-unhealthy<0){
    message="Eat more fruits and veggies";
  }else{
  if(sleep<5){
    message="Get a good night's rest";
  }
  else{
    message="Keep up the healthy schedule";
  }}}
  drawSprites();

  if(screen==="home"){
    home.display();

    food.hide();
    exercise.hide();
    rewards.hide();
  }

  if(screen==="food"){
    food.display();

    home.hide();
    exercise.hide();
    rewards.hide();
  }
  
  if(screen==="exercise"){
    exercise.display();

    home.hide();
    food.hide();
    rewards.hide();
  }
  
  if(screen==="rewards"){
    rewards.display();

    home.hide();
    food.hide();
    exercise.hide();
  }
}