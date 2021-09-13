// (function () {
// 	let count = 0;
// 	let bl = document.querySelectorAll(".slider_item");
// 	startSlide();
// 	function startSlide() {
// 		bl[count].classList.add('blue');
// 		bl[count].classList.remove('blue_op');
// 		nextSlide();
// 	}

// 	function nextSlide() {
// 		if (count <= 2) {
// 			count++;
// 			bl[count].classList.remove('blue');
// 			bl[count].classList.add('blue_op');
// 		} else {
// 			count = 0
// 			bl[count].classList.remove('blue');
// 		}
// 		setTimeout(startSlide, 5000);
// 	}
// }).call(this);


const sliderBox = document.querySelector('.slider__line');
const elem = document.querySelectorAll('.slider_item');
const btn = document.querySelectorAll('.btn__slide');
let count = 0;
let width;

init();
window.addEventListener('resize', init);

function init() {
	if (window.innerWidth < 1199) {
		sliderBox.style.display = "flex";
		btn[0].style.opacity = .75;
		btn[1].style.opacity = .75;
		width = document.querySelector('#box').offsetWidth;
		sliderBox.style.width = width * elem.length + 'px';
		elem.forEach(item => {
			item.style.width = width + 'px';
			item.style.height = 'auto';
		});
		move();
		// startSlide();
	}

}

function move() {
	sliderBox.style.transform = 'translate(-' + count * width + 'px)';
}

function nextSlide() {
	count++;
	if (count >= elem.length) {
		count = 0;
	}
	move();
}


document.querySelector('.slider-prev').addEventListener('click', function () {
	count--;
	if (count < 0) {
		count = elem.length - 1;
	}
	move();
});

document.querySelector('.slider-next').addEventListener('click', () => {
	nextSlide();
});

// function startSlide() {
// 	setTimeout(nextSlide, 3000);
// }
