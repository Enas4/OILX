window.setTimeout("zoomOut();", 1000);
		function zoomOut() {
			document.getElementById("zoomOut").style.cssText = "transform: scale(2.2); opacity: .4";
		}
		window.setTimeout("zoomOut1();", 1000);
		function zoomOut1() {
			document.getElementById("zoomOut1").style.cssText = "transform: scale(2.2); opacity: .4";
		}
		window.setTimeout("blurDiv();", 2000);
		function blurDiv() {
			document.getElementById("blurDiv").style.cssText = "display:none";
		}

		// -------------------------------------------------------

		var cursor = document.getElementById('cursor');
		document.addEventListener('mousemove', function (e) {
			var x = e.clientX;
			var y = e.clientY;
			cursor.style.left = x + "px";
			cursor.style.top = y + "px";
		});

		// -------------------------------------------------------

		const menuBtn = document.querySelector('.menu-btn');
		let menuOpen = false;
		menuBtn.addEventListener('click', () => {
			if (!menuOpen) {
				menuBtn.classList.add('open');
				menuOpen = true;
				document.getElementById("menu-bg").classList.toggle("change-bg");
				document.getElementById("same").classList.toggle("change");
				document.getElementById("same1").classList.toggle("change-1");
				document.getElementById("same2").classList.toggle("change-2");
				document.getElementById("same3").classList.toggle("change-3");
				document.getElementById("same4").classList.toggle("change-4");

				document.getElementById("same").classList.remove("changes");
				document.getElementById("same1").classList.remove("changes-1");
				document.getElementById("same2").classList.remove("changes-2");
				document.getElementById("same3").classList.remove("changes-3");
				document.getElementById("same4").classList.remove("changes-4");
			} else {
				menuBtn.classList.remove('open');
				menuOpen = false;
				document.getElementById("menu-bg").classList.remove("change-bg");


				document.getElementById("same").classList.remove("change");
				document.getElementById("same1").classList.remove("change-1");
				document.getElementById("same2").classList.remove("change-2");
				document.getElementById("same3").classList.remove("change-3");
				document.getElementById("same4").classList.remove("change-4");


				document.getElementById("same").classList.toggle("changes");
				document.getElementById("same1").classList.toggle("changes-1");
				document.getElementById("same2").classList.toggle("changes-2");
				document.getElementById("same3").classList.toggle("changes-3");
				document.getElementById("same4").classList.toggle("changes-4");
			}
		});




		// -------------------------------------------------------
		(function () {

			const link = document.querySelectorAll('nav > .hover-this');
			const cursor = document.querySelector('.cursor');

			const animateit = function (e) {
				const span = this.querySelector('h1');
				const { offsetX: x, offsetY: y } = e,
					{ offsetWidth: width, offsetHeight: height } = this,

					move = 25,
					xMove = x / width * (move * 2) - move,
					yMove = y / height * (move * 2) - move;

				span.style.transform = `translate(${xMove}px, ${yMove}px)`;

				if (e.type === 'mouseleave') span.style.transform = '';
			};

			const editCursor = e => {
				const { clientX: x, clientY: y } = e;
				cursor.style.left = x + 'px';
				cursor.style.top = y + 'px';
			};

			link.forEach(b => b.addEventListener('mousemove', animateit));
			link.forEach(b => b.addEventListener('mouseleave', animateit));
			window.addEventListener('mousemove', editCursor);

		})();

		// -------------------------------------------------------
		function scrollValue() {
			var navbar = document.getElementById("nav-bar");
			var scroll = window.scrollY;
			if (scroll < 200) {
				navbar.classList.remove('BgColour');
			} else {
				navbar.classList.add('BgColour');
			}
		}
		window.addEventListener('scroll', scrollValue);

		// -------------------------------------------------------

		var button = document.getElementById('same');
		button.onclick = function () {
			var div = document.getElementById('same-list');
			if (div.style.display !== 'none') {
				div.style.display = 'none';
			}
			else {
				div.style.display = 'block';
			}
		};
		// -------------------------------------------------------
		$("fas").click(function () {
			//$(this) refer to the h3 clicked, so we find the .rotate (icon) and toggle the class "down"    
			$(this).find('.rotate-2').toggleClass("down-2");
			//we remove the class down from all the .rotate icons
			$('.rotate-2').removeClass("down-2");
		})

		$(".rotate-2").click(function () {
			$(this).toggleClass("down-2");
		})

    //  ---------------------------------------------------------

    $(document).ready(function(){
      $(window).scroll(function(){
        if($(this).scrollTop() > 500){
			$(".p-1").css({"opacity" : "0"})
		}
		else{
			$(".p-1").css({"opacity" : "1"})
		}
      })
    })

	$(document).ready(function(){
      $(window).scroll(function(){
        if($(this).scrollTop() <  600){
			$(".p-2").css({"opacity" : "0"})
		}
		else{
			$(".p-2").css({"opacity" : "1"})
		}
      })
    })



