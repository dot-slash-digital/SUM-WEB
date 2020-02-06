// // Smooth scrolling for navbar links
// $("nav a").on('click', function(e) {
//     e.preventDefault();
//     var hash = this.hash;
//
//     $('html, body').animate({
//         scrollTop: $(hash).offset().top
//     }, 800, function() {
//         window.location.hash = hash;
//     });
// });

// Get the height of the header
var headerHeight = $("div#navbar").height();

// Attach the click event
$('a[href*=#]').bind("click", function(e) {

    var target = $(this).attr("href"); //Get the target
    var scrollToPosition = $(target).offset().top - headerHeight - 50;

    $('html').animate({ 'scrollTop': scrollToPosition }, 600, function(target){
        window.location.hash = target;
    });

    e.preventDefault();
});


//
// $('.scroll').on('click',function(e) {
// 	e.preventDefault();
// 	var offset = 0;
// 	var target = this.hash;
// 	if ($(this).data('offset') != undefined) offset = $(this).data('offset');
// 	$('html, body').stop().animate({
// 		'scrollTop': $(target).offset().top - offset
// 	}, 500, 'swing', function() {
// 		// window.location.hash = target;
// 	});
// });
// $("nav a").on('click', function(e) {
// 	e.preventDefault();
// 	var target = $(this).attr('href');
// 	var offset = 0;
// 	if ($(this).data('offset') != undefined) offset = $(this).data('offset');
// 	$.scrollTo(target, 300, { offset: -offset });
// });
