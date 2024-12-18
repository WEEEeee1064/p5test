//方塊隨機生成

let x =0;
let y =0;

let rad =0,step =0;

function setup() {
  createCanvas(400, 400);
  background(220,100)
  frameRate(60)
}

function draw() {
  
     if(frameCount%3 == 0){
        fill(220,45)
        rect(0,0,400,400)
    }
  
  fill('blue')
  change(41)
  fill('yellow')
  change(13)
  fill('black')
  change(53)
  
}

function change(fram){

	if(frameCount%fram == 0){
		x = random(-50,350)
		y = random(-50,350)
		rad = random(30,100)
		step =random(0,2)
	}else{
		drawsquare(x, y ,rad,step)
	}
}


function drawsquare(x, y, rad, step) {
  if (step > 0) {
    rect(x, y, rad, rad); // 正確畫出矩形
    drawsquare(x + rad, y + rad, rad, step - 1); // 正確傳遞 step - 1
  }
}