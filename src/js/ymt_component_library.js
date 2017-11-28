(function (){
	window.onload = function () {
		document.getElementById('click_btn_web_one').onclick = function () {
			document.getElementById('click_btn_web_one_span').style.display = 'inline-block';
		};
		
		document.getElementById('click_btn_web_two').onclick = function () {
			document.getElementById('click_btn_web_two_span').style.display = 'inline-block';
		};
		
		document.getElementById('click_btn_web_three').onclick = function () {
			document.getElementsByClassName('action_div_first')[0].style.display = 'block';
		};
		
		document.getElementById('click_btn_web_four').onclick = function () {
			document.getElementsByClassName('action_div_first')[0].style.display = 'none';
		};
		
		document.getElementById('click_btn_web_five').onclick = function () {
			document.getElementsByClassName('action_div_first')[0].style.display = 'none';
		};
		
		document.getElementById('click_btn_web_six').onclick = function () {
			document.getElementsByClassName('web_confirm_toast')[0].style.display = 'block';
		};
		
		document.getElementsByClassName('web_confirm_cancel')[0].onclick = function () {
			document.getElementsByClassName('web_confirm_toast')[0].style.display = 'none';
		};
		
		document.getElementsByClassName('web_confirm_confirm')[0].onclick = function () {
			document.getElementsByClassName('web_confirm_toast')[0].style.display = 'none';
		};
		
		
		document.getElementById('click_btn_app_one').onclick = function () {
			document.getElementById('app_one_img_first').style.display = 'none';
			document.getElementById('app_one_img_second').style.display = 'block';
		};
		
		document.getElementById('click_btn_app_two').onclick = function () {
			document.getElementsByClassName('action_toast')[0].style.display = 'block';
			setTimeout(function () {
				document.getElementsByClassName('action_toast')[0].style.display = 'none';
			}, 3000)
		};
		
		document.getElementById('click_btn_app_three').onclick = function () {
			document.getElementsByClassName('action_toast_whole')[0].style.display = 'block';
		};
		
		document.getElementById('app_three_btn_cancel').onclick = function () {
			document.getElementsByClassName('action_toast_whole')[0].style.display = 'none';
		};
		
		document.getElementById('app_three_btn_confirm').onclick = function () {
			document.getElementsByClassName('action_toast_whole')[0].style.display = 'none';
		};
		
		document.getElementById('menu-icon').onclick = function () {
			document.getElementById('menu-icon').style.display = 'none';
			document.getElementById('cancel-icon').style.display = 'table-cell';
			document.getElementsByClassName('nav-dropdown')[0].style.display = 'block';
		};
		
		document.getElementById('cancel-icon').onclick = function () {
			document.getElementById('cancel-icon').style.display = 'none';
			document.getElementById('menu-icon').style.display = 'table-cell';
			document.getElementsByClassName('nav-dropdown')[0].style.display = 'none';
		};
		
		document.getElementsByClassName('top')[0].onclick = function () {
			window.scrollTo(0, 0);
		};
	};
})()