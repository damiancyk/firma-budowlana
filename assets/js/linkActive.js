function setLink(linkClass){
	var links=$('ul.nav.navbar-nav.navbar-right');
	links.removeClass('active');
	links.find('li.'+linkClass).addClass('active');
}