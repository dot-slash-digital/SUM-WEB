// Smooth scrolling for navbar links
$("nav a").on('click', function(e) {
    e.preventDefault();
    var hash = this.hash;

    $('html, body').animate({
        scrollTop: ($(hash).offset().top)
    }, 800, function() {
        window.location.hash = hash;
    });
});