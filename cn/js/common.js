(function () {
	window.onload = function () {
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