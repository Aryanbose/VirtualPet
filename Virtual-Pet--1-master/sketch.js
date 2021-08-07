//Create variables here
var dog,happyDog,database,foodS,foodStock,dogImage,happyDogImage;
function preload()
{
	//load images here
  dogImage = loadImage ('images/dogImg.png')
  happyDogImage = loadImage('images/dogImg1.png')
}

function setup() {
  database = firebase.database();
  foodStock=database.ref('Food');
  foodStock.on('value',readStock);
	createCanvas(500,500);
  dog = createSprite(225,225,10,10);
  dog.addImage(dogImage);
  dog.scale=0.5;  
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDogImage)


}


  drawSprites();
  //add styles here
  textSize(59);
  fill("Red")
  text(foodS,120,80);
  console.log (foodS)

}
//food s function
function readStock(data){
  foodS=data.val();
}
//values function
function writeStock(x){


  database.ref('/').update({
    Food:x
  })
}






