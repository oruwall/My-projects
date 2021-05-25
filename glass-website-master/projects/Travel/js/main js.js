
(function () {
	const content = document.querySelector('.content')
	window.onscroll = () => {
		if (window.pageYOffset > 50) {
			content.classList.add('content_active');
		} else {
			content.classList.remove('content_active');
		}
	};
}());

// Burger handler 

(function () {
	const burgerItem = document.querySelector('.burger');
	conole.log(burgerItem);

}());
