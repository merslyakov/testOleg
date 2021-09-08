(function () {
	let count = 0;
	let bl = document.querySelectorAll(".slider_item");
	startSlide();
	function startSlide() {
		bl[count].classList.add('blue');
		bl[count].classList.remove('blue_op');
		nextSlide();
	}

	function nextSlide() {
		if (count <= 2) {
			count++;
			bl[count].classList.remove('blue');
			bl[count].classList.add('blue_op');
		} else {
			count = 0
			bl[count].classList.remove('blue');
		}
		setTimeout(startSlide, 5000);
	}
}).call(this);
