var musicFlag = false;

function toggleMusic(){
	var music = document.getElementById('music');
	var button = document.getElementById('btnMusic');
	if(musicFlag){
		musicFlag = false;
		music.pause();
		button.style.background = "url(\"media/play.png\")";
	}
	else {
		musicFlag = true;
		music.play();
		button.style.background = "url(\"media/pause.png\")";
	}
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function myAnimation(){
	document.getElementById("btnRysuj").disabled = true;
	document.getElementById("btnCzysc").disabled = true;

	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	
	/*pryzmat*/
	ctx.beginPath();
	ctx.fillStyle = "aqua";
	ctx.lineTo(500,300);
	ctx.lineTo(400,100);
	ctx.lineTo(300,300);
	ctx.fill();

	for(var i=0; i<=400; i+=1){
		ctx.fillStyle = "rgba(255,255,255)";
		ctx.fillRect(i,150,2,2);
		await sleep(1);
	}

	/*promien rozszczepiony*/
	var CX = 400;
	var CY = 150;
	var sx = 400;
	var sy = 200;

	var color = 0;
	for(var i=0; i<=60; i+=0.05){
    var rad = (i+330)* (2*Math.PI) / 360;
	    ctx.strokeStyle = "hsla("+color+", 100%, 50%, 1.0)";   
	    ctx.beginPath();
	    ctx.moveTo(CX, CY);
	    ctx.lineTo(CX + sx * Math.cos(rad), CY + sy * Math.sin(rad));
	    ctx.stroke();
	    color += 0.25;
	    await sleep(1);
	}

	document.getElementById("btnCzysc").disabled = false;
}

function clearCanvas(){
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	document.getElementById("btnRysuj").disabled = false; 
}

function changeColor(color){

	var el = document.getElementById("colortxt");

	switch(color){
		case 1:
			el.innerHTML = "380 - 436 nm";
			el.style.color = "#551A8B";
			break;
		case 2:
			el.innerHTML = "436 - 470 nm";
			el.style.color = "#0000FF";
			break;
		case 3:
			el.innerHTML = "470 - 500 nm";
			el.style.color = "#21B6A8";
			break;
		case 4:
			el.innerHTML = "500 - 530 nm";
			el.style.color = "#00FF00";
			break;
		case 5:
			el.innerHTML = "530 - 566 nm";
			el.style.color = "#ADFF2F";
			break;
		case 6:
			el.innerHTML = "566 - 589 nm";
			el.style.color = "#FFFF00";
			break;
		case 7:
			el.innerHTML = "589 - 620 nm";
			el.style.color = "#FFA500";
			break;
		case 8:
			el.innerHTML = "620 - 780 nm";
			el.style.color = "#FF0000";
			break;

	}
}
