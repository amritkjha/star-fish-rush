score = 0;
cross = true;

audiogo = new Audio('gameover-sound.wav');
audio1 = new Audio('default-song.mp3');

setTimeout(() => {
			audio1.play()
		}, 1000);

document.onkeydown = function(e) {
	if(e.keyCode == 38) {
		starFish = document.querySelector('.star-fish');
		starFish.classList.add('animate-star-fish');
		setTimeout(() => {
			starFish.classList.remove('animate-star-fish');
		}, 700);
	}
	if(e.keyCode == 39) {
		starFish = document.querySelector('.star-fish');
		sFishX = parseInt(window.getComputedStyle(starFish, null).getPropertyValue('left'));
		starFish.style.left = sFishX + 240 + "px";
	}
	if(e.keyCode == 37) {
		starFish = document.querySelector('.star-fish');
		sFishX = parseInt(window.getComputedStyle(starFish, null).getPropertyValue('left'));
		starFish.style.left = (sFishX - 240) + "px";
	}
}

setInterval(() => {
	starFish = document.querySelector('.star-fish');
	obstacle = document.querySelector('.obstacle');
	gameover = document.querySelector('.gameOver');
	bg = document.querySelector('.gameContainer');
	scoree = document.querySelector('#scoreCont');

	sx = parseInt(window.getComputedStyle(starFish, null).getPropertyValue('left'));
	sy = parseInt(window.getComputedStyle(starFish, null).getPropertyValue('bottom'));

	ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
	oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('bottom'));

	diffX = Math.abs(sx-ox);
	diffY = Math.abs(sy-oy);
	if(diffX < 125 && diffY < 80) {
		gameover.innerHTML = "Game Over";
		gameover.style.left = '35vw';
		obstacle.classList.remove('animate-obstacle');
		starFish.style.visibility = 'hidden';
		obstacle.style.visibility = 'hidden';
		bg.style.opacity = '0.5';
		scoree.style.top = '60vh';
		scoree.style.right = '45vw';
		audiogo.play();
		audio1.pause();
	}
	else if(diffX < 150 && cross) {
		score += 1;
		updateScore(score);
		cross = false;
		setTimeout(() => {
			cross = true;
		}, 1000);
		setTimeout(() => {
			aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
			newDur = aniDur - 0.05;
			obstacle.style.animationDuration = newDur + 's';
		}, 500);
		
	}
}, 100);

function updateScore(score) {
	scoreCont.innerHTML = "Score: " + score
}