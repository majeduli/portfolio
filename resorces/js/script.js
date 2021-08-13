
// hamburger Menu//
function openMenu() {
	document.getElementById('navbar').style.height ="100vh";
}
function closeMenu() {
	document.getElementById('navbar').style.height="0";
}
	
//smooth scroll

$('.next-section a').on('click', function(){
    $('html, body').animate({
        scrollTop:$($.attr(this, 'href')).offset().top
    }, 1000 );
    return false;
});
//MIXIUP
var mixer = mixitup('.portfolio-grid');
