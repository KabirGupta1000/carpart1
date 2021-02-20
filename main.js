canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car_width= 100;
car_height= 90;
car_x=10;
car_y=10;
background_image = "racing.jpg";
Car_image = "car1.png"
function add() {
    car_img_tag= new Image();
    car_img_tag.onload = upload_rover;
    car_img_tag=Car_image;
 backgroung_Img_tag = new Image();
    backgroung_Img_tag.onload = upload_background;
    backgroung_Img_tag.src= background_image;
}
function upload_background() {
    ctx.drawImage(backgroung_Img_tag,0,0,canvas.width,canvas.height);
}
function upload_rover() 
 {
     ctx.drawImage(car_img_tag,car_x,car_y,car_width,car_height);
 }
 window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
    var keypress = e.keyCode;
    console.log(keypress);
    if(keypress=='38'){
        up();
        console.log("up");
    }
    if(keypress=='40'){
       down();
       console.log("down");
   }
   if(keypress=='37'){
       left();
       console.log("left");
   }
   if(keypress=='39'){
       right();
       console.log("right");
   }
}
function up(){
   if(car_y >= 0){
       car_y = car_y - 10;
       upload_background();
       upload_car();
   }
}
function down(){
   if(car_y <= 500){
       car_y = car_y + 10;
       upload_background();
       upload_car();
   }
}
function left(){
   if(car_x >= 0){
       car_x = car_x - 10;
       upload_background();
       upload_car();
   }
}
function right(){
   if (car_x >= 0){
       car_x = car_x + 10;
       upload_background();
       upload_car();
   }
}
if(keypress=='87'){
    up();
    console.log("up");
}
if(keypress=='40'){
   down();
   console.log("83");
}
if(keypress=='65'){
   left();
   console.log("left");
}
if(keypress=='68'){
   right();
   console.log("right");
}


 