let spin = document.querySelector('.spin-result-wrapper');
let closePop = document.querySelector('.close-popup');
let popBtn = document.querySelector('.pop-up-button');
let spinWrap = document.querySelector('.spin-wrapper');
let text = document.querySelectorAll('input[type="text"]');
let orderBlock = document.querySelector('.order_block');
var start, diff, minutes, seconds, oldProd, rand, count;

for (let a of text) {
	a.addEventListener('focus', () => a.value = "");
}

closePop.onclick = () => popupClose();
popBtn.onclick = () => popupClose();

function popupClose() {
	spin.style.display = 'none';
	spinWrap.style.display = 'none';
	orderBlock.style.display = 'block';
	timerOn();
}

document.querySelector('.active-spin').onclick = () => {
	document.querySelector('.wheel-img').classList.add('super-rotation')
	setTimeout(() => {
		spin.style.display = 'block'
		window.localStorage.setItem('wheel', true);
	}, 6350);

};

//============= href ==============
let ahref = document.getElementsByTagName('a');
if (window.localStorage.getItem('wheel')) {
	for (let i of ahref) {
		i.href = '#form';
		spinWrap.style.display = 'none';
		orderBlock.style.display = 'block';
	}
} else {
	for (let i of ahref) {
		i.href = '#wheel';
	}
}

// ================= timer ==============
function startTimer(duration, display, prod, a) {
	// decrease number
	function prodCount() {
		if (+a > 3 && a != 0) {
			rand = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
			a -= rand;
			prod.innerHTML = a;
			window.localStorage.setItem('count', a);
		} else {
			prod.innerHTML = 0;
		}
	}

	function timer() {
		diff = duration - (((Date.now() - start) / 1000) | 0);
		if (diff <= 0) {
			display.textContent = '0:00';
		} else {
			minutes = (diff / 60) | 0;
			seconds = (diff % 60) | 0;

			minutes = minutes < 10 ? "0" + minutes : minutes;
			seconds = seconds < 10 ? "0" + seconds : seconds;

			display.textContent = minutes + ":" + seconds;

			if (diff <= 0) {
				start = Date.now() + 1000;
			}
		}

	};

	timer();
	prodCount();
	setInterval(prodCount, 4000);
	setInterval(timer, 1000);
}

function timerOn() {
	let twentyMinutes = 60 * 20,
		display = document.querySelector('#time'),
		product = document.querySelector('#product');

	if (window.localStorage.getItem('start') !== null) {
		start = window.localStorage.getItem('start');
		count = window.localStorage.getItem('count');
		product.innerHTML = count;
		startTimer(twentyMinutes, display, product, count);
	} else {
		display.textContent = 0;
		start = Date.now();
		count = '54';
		window.localStorage.setItem('start', start);
		window.localStorage.setItem('count', count);
		startTimer(twentyMinutes, display, product, count);
	}

};

// =====================================
window.onload = function () {
	if (window.localStorage.getItem('wheel') !== null) timerOn();
};
