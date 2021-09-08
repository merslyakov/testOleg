$('.menuBtn').on('click', function (event) {
	event.preventDefault();
	$(this).toggleClass('menuToggled');
	$('.menuContainer').toggleClass('menuToggled');
});
var closeMenu = function () {
	$('.menuBtn').removeClass('menuToggled');
	$('.menuContainer').removeClass('menuToggled');
};
$('.menuContainer li a, .menuClose').on('click', function () {
	closeMenu();
});
$(document).on('click', function (event) {
	$target = $(event.target);
	if (!$target.closest('.menuContainer').length && !$target.closest('.menuBtn').length && $('.menuContainer').hasClass('menuToggled')) {
		closeMenu();
	}
});
$(document).on('keyup', function (event) {
	if (event.keyCode == 27 && $('.menuContainer').hasClass('menuToggled')) {
		closeMenu();
	}
});
$('a[href^="#"]').on('click', function (event) {
	if (this.hash !== '') {
		event.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 750, function () {
			window.location.hash = hash;
		});
	}
});

document.addEventListener("DOMContentLoaded", function (event) {

	//*Default settings (hidden params)*//
	var bp = $.urlParam('bp');
	var cb = $.urlParam('cb');
	var session = $.urlParam('session');
	var email = $.urlParam('email');
	var first_name = $.urlParam('first_name');
	var last_name = $.urlParam('last_name');
	var affiliate_id = $.urlParam('aff_id');
	var domain = $.urlParam('domain');


	if (affiliate_id) {
		$(".affiliate_id").val(affiliate_id);
	}
	if (email) {
		$(".emailcb").val(decodeURIComponent(email));
		$(".emailcb").each(function () {
			$(this).addClass('valid');
		});
	}
	if (first_name) {
		if (first_name.indexOf('+') == -1) {
			$(".first_nameInclude").val(decodeURIComponent(first_name));
		} else {
			$(".first_nameInclude").val(decodeURIComponent(first_name.replace(/\+/g, '%20')));
		}
		$(".first_nameInclude").each(function () {
			$(this).addClass('valid');
		});
	}
	if (last_name) {
		if (last_name.indexOf('+') == -1) {
			$(".last_nameInclude").val(decodeURIComponent(last_name));
		} else {
			$(".last_nameInclude").val(decodeURIComponent(last_name.replace(/\+/g, '%20')));
		}
		$(".last_nameInclude").each(function () {
			$(this).addClass('valid');
		});

	}
	if (session) {
		$(".session_id").val(session);
	}
	if (bp == 0) {
		$('.hover-modal').hide()
	}
	if (cb == 0) {
		exitpage = false;
	}


	function currency(isoCode) {
		let currency, currencyTable, currencyValue;
		var countryArr = ["AT", "CH", "DE", "LI", "LU", "BE", "CZ", "ES", "FR", "GR", "HU", "IT", "NL", "PL", "PT", "RO", "RS", "HR", "SK", "SL", "DK", "FI", "NO", "SE"]
		if (isoCode === "GB") {
			currency = "£";
			currencyTable = "GBP";
			currencyValue = "libras";
		} else if (countryArr.indexOf(isoCode) >= 0) {
			currency = "€";
			currencyTable = "EUR";
			currencyValue = "euros";
		} else {
			currency = "$";
			currencyTable = "USD";
			currencyValue = "dolares";
		}
		$(".currency").text(currency);
		$(".currency-value").text(currencyValue);
		$(".currency-table").text(currencyTable);
	}

	$.get("/geo", function () {
	}, "json").always(function (resp) {
		var countryCode = (resp && resp.country_code) ? resp.country_code : "";
		var city = (resp && resp.city) ? resp.city : "Sydney";
		if (city.length < 12) {
			$('u.scroll-to-form').addClass('nowrap');
		}
		if (city.length > 15) {
			$('.logo_wrapper-header').addClass('logo_wrapper-scale');
			$('.logo_wrapper').addClass('logo_wrapper-big');
		}
		if (city.length > 22 && city.length < 45) {
			$('.logo_wrapper').addClass('logo_wrapper-big');
			$('.city').addClass('city-brake');
		}
		else if (city.length >= 45) {
			$('.logo_wrapper').addClass('logo_wrapper-biggest');
		}

		$('.city').text(city);
		currency(resp.country_code);
		$('.page_preloader').hide();
	});

	//*Phone*//
	var telCode = document.getElementsByClassName("phone");
	var iti = [];
	jQuery.each(telCode, function (indx, value) {
		window.intlTelInput(value, {
			allowDropdown: true,
			autoHideDialCode: true,
			autoPlaceholder: "polite",

			formatOnDisplay: true,
			geoIpLookup: function (callback) {
				$.get("/geo", function () {
				}, "json").always(function (resp) {
					var countryCode = (resp && resp.country_code) ? resp.country_code : "";
					callback(countryCode);
					currency(resp.country_code);
				});

			},
			initialCountry: "cl",
			localizedCountries: { 'cl': 'Chile' },
			nationalMode: true,
			placeholderNumberType: "MOBILE",
			separateDialCode: true,
			utilsScript: "./js/utils.js",
		});

		iti[indx] = window.intlTelInputGlobals.getInstance(value);
		value.addEventListener("countrychange", function (elem) {
			if (iti[indx].getDialCode() != "") {
				$('.phonecc').val(iti[indx].getDialCode());
			}
			iti.forEach(function (instance) {
				var currCountry = iti[indx].getSelectedCountryData()
				instance.setCountry(currCountry.iso2);
				$('.phonecc')[indx].value = currCountry.dialCode;
			})
		})
	});

	$('body').on('DOMSubtreeModified', '.selected-dial-code', function () {
		if ($(this)[0].innerText != "") {
			for (var i = 0; i < $('.phonecc').length; i++) {
				$('.phonecc')[i].value = $(this)[0].innerText
			}
		}
	})

	$('form input').on("focus blur select", function () {
		if ($(this).hasClass('error') === true) {
			$('form label.error').hide();
			$(this).parent().find("label.error").show();
		}
	})

	function forceNumeric() {
		var $input = $(this);
		$input.val($input.val().replace(/[^\d -]+/g, ''));
	}

	$('.phone').on('input', forceNumeric);

	//*Password*//
	$('.password').click(function () {
		$('.valid-block').fadeIn(300)
	})
	$('.password').blur(function () {
		$('.valid-block').fadeOut(300)
	})
	$('.password').on("input click", function validatePass() {
		var password = $(this).val();
		var checkAZ = $(this).parent().parent().find($(".valid-check-A-Z"))
		var checkaz = $(this).parent().parent().find($(".valid-check-a-z"))
		var checkNum = $(this).parent().parent().find($(".valid-check-1-9"))
		var checkLeng = $(this).parent().parent().find($(".valid-check-length"))
		var checkAlph = $(this).parent().parent().find($(".valid-check-alphanumeric"))
		// $('.password').val(password)

		if (password.match(/[A-Z]/) != null) {
			$(checkAZ).addClass('check')
		}
		if (password.match(/[A-Z]/) === null) {
			$(checkAZ).removeClass('check')
		}
		if (password.match(/[a-z]/) != null) {
			$(checkaz).addClass('check')
		}
		if (password.match(/[a-z]/) === null) {
			$(checkaz).removeClass('check')
		}
		if (password.match(/[1-9]/) != null) {
			$(checkNum).addClass('check')
		}
		if (password.match(/[1-9]/) === null) {
			$(checkNum).removeClass('check')
		}
		if (password.length > 7) {
			$(checkLeng).addClass('check')
		}
		if (password.length < 8 || password.length > 12) {
			$(checkLeng).removeClass('check')
		}
		if (password.match(/^[0-9A-Za-z]+$/) != null) {
			$(checkAlph).addClass('check')
		}
		if (password.match(/^[0-9A-Za-z]+$/) === null) {
			$(checkAlph).removeClass('check')
		}
		if (password.match(/[A-Z]/) != null && password.match(/[a-z]/) != null && password.match(/[1-9]/) != null && password.length > 7 && password.match(/^[0-9A-Za-z]+$/) != null && password.length < 13) {
			$('.valid-block').hide();
		}
		else {
			$('.valid-block').show();
		}

	})

	function randString(id) {
		var dataSet = $(id).attr('data-character-set').split(',');
		var possible = '';
		if ($.inArray('0-9', dataSet) >= 0) {
			possible += '0123456789';
		}
		if ($.inArray('a-z', dataSet) >= 0) {
			possible += 'abcdefghijklmnopqrstuvwxyz';
		}
		if ($.inArray('A-Z', dataSet) >= 0) {
			possible += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		}
		var text = '';
		for (var i = 0; i < $(id).attr('data-size'); i++) {
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		}
		return text;
	}
	$('input[rel="gp"]').each(function () {
		var number = Math.floor(Math.random() * (1 - 9) + 9);
		$(this).val(randString($(this)) + number + "Db");
	});
	var number = Math.floor(Math.random() * (1 - 9) + 9);
	$(".getNewPass").click(function () {
		var number = Math.floor(Math.random() * (1 - 9) + 9);
		var field = $(".getNewPass").closest('div').find('input[rel="gp"]');
		field.val(randString(field) + number + "Db");

		field.valid();
		$(this).parent().parent().find('.phone').select();
	});

	//timer
	function initCountdown() {
		let countdownSpan = $('.timer');
		let countdownSpanVal = countdownSpan.text();
		let mmSsArray = countdownSpanVal.split(":");
		let mm = parseInt(mmSsArray[0]);
		let ss = parseInt(mmSsArray[1]);
		if (mm === 0 && ss === 0) {
			redirectToPage2();
			showPopup()
			return;
		}
		if (ss === 0) {
			mm--;
			ss = 59;
		} else
			ss--;
		let isSecondsSingleDigit = Math.floor(ss / 10) === 0 ? true : false;

		if (isSecondsSingleDigit) {
			let newCountdownSpanVal = "0" + mm.toString() + " : " + "0" + ss.toString();
			countdownSpan.text(newCountdownSpanVal);
		} else {
			let newCountdownSpanVal = "0" + mm.toString() + " : " + ss.toString();
			countdownSpan.text(newCountdownSpanVal);
		}

		setTimeout(function () {
			initCountdown();
		}, 1000)
	}
	initCountdown();
	//timer

	$(".scrollLink").on('click', function (e) {
		e.preventDefault();
		$([document.documentElement, document.body]).animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 500);
	})


})

