	window.onload = function() {
	let newColor = localStorage.getItem('color');
	$('.bg').css('background', newColor);
	layoutLoader();
};
	// sa download
	$(document).ready(function () {
		// body...
		$('#downloadCode').click(function () {
			// body...
			$('.downloadMessage').toggleClass("downloadHide");
		})

	})

	(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
	function showSideMenu () {
		$('.side_menu').toggleClass('show-side-menu');
	}

	function showSecondMenu () {
		$('#second-list-menu').toggleClass('left-0');
	}

	function yeah () {
		console.log('rodnie hitsuraan');
	}

	// changeColor
	function changeColor(bgColor ) {

		let oldColor = bgColor;
		localStorage.setItem('color',oldColor);
		let newColor = localStorage.getItem('color');
		$('.bg').css('background', newColor);

}

	function twirl(action) {
			// let position = $("#"+action)
			console.log(action)
			
				if (action === "front" )  {
					$("#front").css({"transform":"rotateY(90deg)", "transition":" .5s  ease-in"});
					$("#back").css({'transform': 'rotateY(0deg)', "transition":" .5s .5s ease-in"});
				}

				else  {
					console.log('na click');
					$("#back").css({"transform":"rotateY(90deg)", "transition":" .5s  ease-in"});
					$("#front").css({'transform': 'rotateY(0deg)', "transition":" .5s .5s ease-in"});
				}

				console.log(action)


			// $(".").toggleClass('twirl');
			// $(".flip-card-back").toggleClass('twirl-reverse');
		}
		function secondTwirl(action) {
			// let position = $("#"+action)
			console.log(action)
			
				if (action === "front" )  {
					$("#secondFront").css({"transform":"rotateY(90deg)", "transition":" .5s  ease-in"});
					$("#secondBack").css({'transform': 'rotateY(0deg)', "transition":" .5s .5s ease-in"});
				}

				else  {
					console.log('na click');
					$("#secondBack").css({"transform":"rotateY(90deg)", "transition":" .5s  ease-in"});
					$("#secondFront").css({'transform': 'rotateY(0deg)', "transition":" .5s .5s ease-in"});
				}

				console.log(action)


			// $(".").toggleClass('twirl');
			// $(".flip-card-back").toggleClass('twirl-reverse');
		}
		function showLayout (layout) {
			localStorage.setItem('layout',layout);
			localStorage.getItem('layout');
			if (layout === 'first') {
				$('#first').show();
				$('#second').hide()
			}
			else {
				$('#second').show();
				$('#first').hide();
			}

		}
		function layoutLoader () {
			let newLayout =  localStorage.getItem('layout');
			if (newLayout === 'first') {
				$('#first').show();
				$('#second').hide()
			}
			if (newLayout === 'second') {
				$('#second').show();
				$('#first').hide();
			}

		}
		function showMobileButton () {
			$('#mobileMenu').toggleClass('d-block');
		}
		let lastScrollTop = 0;
		let arrowUp = $('.arrow-up');
		window.addEventListener('scroll', function () {
			var scrollTop = window.pageOffset || document.documentElement.scrollTop;
			if (scrollTop > lastScrollTop) {
				arrowUp.show();
			}
			else {
				arrowUp.hide();
			}
		});
		