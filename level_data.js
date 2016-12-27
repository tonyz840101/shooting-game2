function load_level(){
	switch(level){
		case 0:
			enemies[enemies.length] = {x: 300, y: 25, w: 20, dx: -3, dy: 0, t: 0, speed: 4, color: "#22ff22",
				x_upper_limit: 400, x_lower_limit: 150, y_upper_limit: 500, y_lower_limit: 0};
			enemies[enemies.length] = {x: 100, y: 25, w: 20, dx: 3, dy: 0, t: 0, speed: 4, color: "#22ff22",
				x_upper_limit: 250, x_lower_limit: 0, y_upper_limit: 500, y_lower_limit: 0};
			enemies[enemies.length] = {x: 275, y: 50, w: 20, dx: -2, dy: 0, t: 0, speed: 5, color: "#22ff22",
				x_upper_limit: 400, x_lower_limit: 150, y_upper_limit: 500, y_lower_limit: 0};
			enemies[enemies.length] = {x: 125, y: 50, w: 20, dx: 2, dy: 0, t: 0, speed: 5, color: "#22ff22",
				x_upper_limit: 250, x_lower_limit: 0, y_upper_limit: 500, y_lower_limit: 0};
			enemies[enemies.length] = {x: 250, y: 75, w: 20, dx: -1, dy: 0, t: 0, speed: 6, color: "#22ff22",
				x_upper_limit: 400, x_lower_limit: 150, y_upper_limit: 500, y_lower_limit: 0};
			enemies[enemies.length] = {x: 150, y: 75, w: 20, dx: 1, dy: 0, t: 0, speed: 6, color: "#22ff22",
				x_upper_limit: 250, x_lower_limit: 0, y_upper_limit: 500, y_lower_limit: 0};
			level_text = "1-2";
			break
		case 1:
			enemies[enemies.length] = {x: 300, y: 50, w: 20, dx: -3, dy: 1, t: 0, speed: 4, color: "#ff2222",
				x_upper_limit: 400, x_lower_limit: 150, y_upper_limit: 300, y_lower_limit: 0};
			enemies[enemies.length] = {x: 100, y: 50, w: 20, dx: 3, dy: 1, t: 0, speed: 4, color: "#ff2222",
				x_upper_limit: 250, x_lower_limit: 0, y_upper_limit: 300, y_lower_limit: 0};
			enemies[enemies.length] = {x: 275, y: 100, w: 20, dx: -2, dy: 2, t: 0, speed: 4, color: "#ff2222",
				x_upper_limit: 400, x_lower_limit: 150, y_upper_limit: 300, y_lower_limit: 0};
			enemies[enemies.length] = {x: 125, y: 100, w: 20, dx: 2, dy: 2, t: 0, speed: 4, color: "#ff2222",
				x_upper_limit: 250, x_lower_limit: 0, y_upper_limit: 300, y_lower_limit: 0};
			enemies[enemies.length] = {x: 250, y: 150, w: 20, dx: -1, dy: 3, t: 0, speed: 4, color: "#ff2222",
				x_upper_limit: 400, x_lower_limit: 150, y_upper_limit: 300, y_lower_limit: 0};
			enemies[enemies.length] = {x: 150, y: 150, w: 20, dx: 1, dy: 3, t: 0, speed: 4, color: "#ff2222",
				x_upper_limit: 250, x_lower_limit: 0, y_upper_limit: 300, y_lower_limit: 0};
			level_text = "1-3";
			break
		case 2:
			spawn_buff(true);
			enemies[enemies.length] = {x: 300, y: 50, w: 20, dx: -3, dy: 1, t: 0, speed: 4, color: "#ff2222",
				x_upper_limit: 400, x_lower_limit: 150, y_upper_limit: 500, y_lower_limit: 0};
			enemies[enemies.length] = {x: 100, y: 50, w: 20, dx: 3, dy: 1, t: 0, speed: 4, color: "#ff2222",
				x_upper_limit: 250, x_lower_limit: 0, y_upper_limit: 500, y_lower_limit: 0};
			enemies[enemies.length] = {x: 275, y: 100, w: 20, dx: -2, dy: 2, t: 0, speed: 4, color: "#ff2222",
				x_upper_limit: 400, x_lower_limit: 150, y_upper_limit: 500, y_lower_limit: 0};
			enemies[enemies.length] = {x: 125, y: 100, w: 20, dx: 2, dy: 2, t: 0, speed: 4, color: "#ff2222",
				x_upper_limit: 250, x_lower_limit: 0, y_upper_limit: 500, y_lower_limit: 0};
			enemies[enemies.length] = {x: 250, y: 150, w: 20, dx: -1, dy: 3, t: 0, speed: 4, color: "#ff2222",
				x_upper_limit: 400, x_lower_limit: 150, y_upper_limit: 500, y_lower_limit: 0};
			enemies[enemies.length] = {x: 150, y: 150, w: 20, dx: 1, dy: 3, t: 0, speed: 4, color: "#ff2222",
				x_upper_limit: 250, x_lower_limit: 0, y_upper_limit: 550, y_lower_limit: 50};
			enemies[enemies.length] = {x: 250, y: 150, w: 10, dx: 0, dy: 3, t: 1, speed: 4, color: "#22ffff",
				x_upper_limit: 400, x_lower_limit: 150, y_upper_limit: 500, y_lower_limit: 0};
			enemies[enemies.length] = {x: 150, y: 150, w: 10, dx: 0, dy: 3, t: 1, speed: 4, color: "#22ffff",
				x_upper_limit: 250, x_lower_limit: 0, y_upper_limit: 550, y_lower_limit: 50};
			level_text = "1-4";
			break
		case 3:
			spawn_buff(true);
			enemies[enemies.length] = {x: 300, y: 25, w: 20, dx: -3, dy: 1, t: 0, speed: 4, color: "#22ff22",
				x_upper_limit: 400, x_lower_limit: 150, y_upper_limit: 200, y_lower_limit: 0};
			enemies[enemies.length] = {x: 100, y: 25, w: 20, dx: 3, dy: 1, t: 0, speed: 4, color: "#22ff22",
				x_upper_limit: 250, x_lower_limit: 0, y_upper_limit: 200, y_lower_limit: 0};
			enemies[enemies.length] = {x: 300, y: 50, w: 16, dx: -3, dy: 1, t: 3, speed: 4, color: "#22ffff",
				x_upper_limit: 400, x_lower_limit: 150, y_upper_limit: 500, y_lower_limit: 0};
			enemies[enemies.length] = {x: 100, y: 50, w: 16, dx: 3, dy: 1, t: 3, speed: 4, color: "#22ffff",
				x_upper_limit: 250, x_lower_limit: 0, y_upper_limit: 500, y_lower_limit: 0};
			enemies[enemies.length] = {x: 275, y: 100, w: 16, dx: -2, dy: 2, t: 3, speed: 4, color: "#22ffff",
				x_upper_limit: 400, x_lower_limit: 150, y_upper_limit: 500, y_lower_limit: 0};
			enemies[enemies.length] = {x: 125, y: 100, w: 16, dx: 2, dy: 2, t: 3, speed: 4, color: "#22ffff",
				x_upper_limit: 250, x_lower_limit: 0, y_upper_limit: 500, y_lower_limit: 0};
			level_text = "1-5";
			break;
		case 4:
			for(i=1; i<40; i+=2.5){
				Bullets[1][Bullets[1].length] = { x: i*10, y: -150, d: 4 ,c: "#ff2222"};
				Bullets[1][Bullets[1].length] = { x: i*10, y: -100, d: 4 ,c: "#ff2222"};
				Bullets[1][Bullets[1].length] = { x: i*10, y: -50, d: 4 ,c: "#ff2222"};
				Bullets[1][Bullets[1].length] = { x: i*10, y: 0, d: 4 ,c: "#ff2222"};
			}
			enemies[enemies.length] = {x: 380, y: 20, w: 12, dx: -7, dy: 5, t: 3, speed: 2, color: "#9955FF",
				x_upper_limit: 400, x_lower_limit: 300, y_upper_limit: 700, y_lower_limit: 0};
			enemies[enemies.length] = {x: 20, y: 650, w: 12, dx: 7, dy: 5, t: 3, speed: 2, color: "#9955FF",
				x_upper_limit: 100, x_lower_limit: 0, y_upper_limit: 700, y_lower_limit: 0};
			enemies[enemies.length] = {x: 280, y: 120, w: 16, dx: -5, dy: 5, t: 3, speed: 2, color: "#33FFFF",
				x_upper_limit: 400, x_lower_limit: 250, y_upper_limit: 700, y_lower_limit: 0};
			enemies[enemies.length] = {x: 120, y: 550, w: 16, dx: 5, dy: 5, t: 3, speed: 2, color: "#33FFFF",
				x_upper_limit: 150, x_lower_limit: 0, y_upper_limit: 700, y_lower_limit: 0};
			enemies[enemies.length] = {x: 380, y: 650, w: 12, dx: -10, dy: 5, t: 3, speed: 2, color: "#ff2222",
				x_upper_limit: 400, x_lower_limit: 0, y_upper_limit: 700, y_lower_limit: 0};
			enemies[enemies.length] = {x: 20, y: 20, w: 12, dx: 10, dy: 5, t: 3, speed: 2, color: "#ff2222",
				x_upper_limit: 400, x_lower_limit: 0, y_upper_limit: 700, y_lower_limit: 0};
			level_text = "Final";
			break;
		case 5:
			enemies[enemies.length] = {x: 200, y: 50, w: 10, dx: 1, dy: 0, t: 2, speed: 2, color: "#5555FF", blood: 20,
				x_upper_limit: 350, x_lower_limit: 50, y_upper_limit: 500, y_lower_limit: 0, inv: false};
			break;
		default:
			break;
	}
	level ++;
/*
enemies[enemies.length] = {x: 300, y: 50, w: 10, dx: -2, dy: 3, t: 1, speed: 1, color: "#00FFFF"};
enemies[enemies.length] = {x: 100, y: 50, w: 10, dx: 2, dy: 3, t: 1, speed: 1, color: "#00FFFF"};
enemies[enemies.length] = {x: 300, y: 100, w: 20, dx: -1, dy: 0, t: 0, speed: 2, color: "#ff2222"};
enemies[enemies.length] = {x: 100, y: 100, w: 20, dx: 1, dy: 0, t: 0, speed: 2, color: "#ff2222"};
enemies[enemies.length] = {x: 300, y: 50, w: 10, dx: -2, dy: 3, t: 1, speed: 1, color: "#ffffff"};
enemies[enemies.length] = {x: 100, y: 50, w: 10, dx: 2, dy: 3, t: 1, speed: 1, color: "#ffffff"};
enemies[enemies.length] = {x: 300, y: 100, w: 20, dx: -1, dy: 0, t: 0, speed: 2, color: "#ffffff"};
enemies[enemies.length] = {x: 100, y: 100, w: 20, dx: 1, dy: 0, t: 0, speed: 2, color: "#ff2222"};*/
}
/*
function level2(){
enemies[enemies.length] = {x: 300, y: 50, w: 10, dx: -2, dy: 3, t: 1, speed: 1, color: "#2222ff"};
enemies[enemies.length] = {x: 100, y: 50, w: 10, dx: 2, dy: 3, t: 1, speed: 1, color: "#2222ff"};
enemies[enemies.length] = {x: 300, y: 100, w: 20, dx: -1, dy: 0, t: 0, speed: 2, color: "#ff2222"};
enemies[enemies.length] = {x: 100, y: 100, w: 20, dx: 1, dy: 0, t: 0, speed: 2, color: "#ff2222"};

}

function level3(){
enemies[enemies.length] = {x: 380, y: 100, w: 20, dx: -1, dy: 0, t: 0, speed: 2, color: "#ff2222"};
enemies[enemies.length] = {x: 20, y: 100, w: 20, dx: 1, dy: 0, t: 0, speed: 2, color: "#ff2222"};
enemies[enemies.length] = {x: 300, y: 70, w: 20, dx: -5, dy: 0, t: 0, speed: 1, color: "#22ff22"};
enemies[enemies.length] = {x: 100, y: 70, w: 20, dx: 5, dy: 0, t: 0, speed: 1, color: "#22ff22"};
}

function level4(){
enemies[enemies.length] = {x: 300, y: 50, w: 10, dx: -2, dy: 3, t: 1, speed: 1, color: "#2222ff"};
enemies[enemies.length] = {x: 100, y: 50, w: 10, dx: 2, dy: 3, t: 1, speed: 1, color: "#2222ff"};
enemies[enemies.length] = {x: 300, y: 100, w: 20, dx: -1, dy: 0, t: 0, speed: 2, color: "#ff2222"};
enemies[enemies.length] = {x: 100, y: 100, w: 20, dx: 1, dy: 0, t: 0, speed: 2, color: "#ff2222"};
}

function boss(){
}*/
