// Enable scrollspy
$('body').scrollspy({target: "#navbar-scrollspy", offset: 103});

// Smooth scrolling for navbar links
$("#navbar a, #jumbotron a, #jumbotron-carousel a").on('click', function(e) {
    e.preventDefault();
    
    var navbarHeight = $("#mobile-nav").hasClass("show")
        ? ($("#navbar").height() - $("#mobile-nav").height())
        : $("#navbar").height();

    $('html, body').animate({
        scrollTop: ($(this.hash).offset().top - navbarHeight)
    }, 800);
});

$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});

// Submission and input validation
$("form").submit(function() {
    // Full Name (required)
    if ($("#contact-full-name").val() == "") {
        $("#contact-full-name").removeClass("is-valid");
        $("#contact-full-name").addClass("is-invalid");
    } else {
        $("#contact-full-name").removeClass("is-invalid");
        $("#contact-full-name").addClass("is-valid");
    }

    // Company Name (required)
    if ($("#contact-company-name").val() == "") {
        $("#contact-company-name").removeClass("is-valid");
        $("#contact-company-name").addClass("is-invalid");
    } else {
        $("#contact-company-name").removeClass("is-invalid");
        $("#contact-company-name").addClass("is-valid");
    }

    // Phone Number (required)
    if ($("#contact-phone-number").val().replace(/\D/g,'').length != 10) {
        $("#contact-phone-number").removeClass("is-valid");
        $("#contact-phone-number").addClass("is-invalid");
    } else {
        $("#contact-phone-number").removeClass("is-invalid");
        $("#contact-phone-number").addClass("is-valid");
    }

    // Email Address (required)
    if ($("#contact-email-address").val() == "") {
        $("#contact-email-address").removeClass("is-valid");
        $("#contact-email-address").addClass("is-invalid");
    } else {
        $("#contact-email-address").removeClass("is-invalid");
        $("#contact-email-address").addClass("is-valid");
    }

    // Project Description (required)
    if ($("#contact-project-description").val() == "") {
        $("#contact-project-description").removeClass("is-valid");
        $("#contact-project-description").addClass("is-invalid");
    } else {
        $("#contact-project-description").removeClass("is-invalid");
        $("#contact-project-description").addClass("is-valid");
    }

    if ($("#contact-full-name").val() != "" &&
        $("#contact-company-name").val() != "" &&
        $("#contact-phone-number").val().replace(/\D/g,'').length == 10 &&
        $("#contact-email-address").val() != "" &&
        $("#contact-project-description").val() != "")
        return true;
    else
        return false;
});

// Remove form validity classes if a user edits the input
$("input").on('input', function() {
    $(this).removeClass("is-valid");
    $(this).removeClass("is-invalid");
});
$("textarea").on('input', function() {
    $(this).removeClass("is-valid");
    $(this).removeClass("is-invalid");
});

// Set submit button to disabled on page load
$(document).ready(function() {
    $("#contact-submit").addClass("disabled");
});

// Enable submit button when all required fields are valid
$(".form-control").keyup(function() {
    // When all required fields are valid
    if ($("#contact-full-name").val() != "" &&
        $("#contact-company-name").val() != "" &&
        $("#contact-phone-number").val().replace(/\D/g,'').length == 10 &&
        $("#contact-email-address").val() != "" &&
        $("#contact-project-description").val() != "")
        $("#contact-submit").removeClass("disabled");
    else
        $("#contact-submit").addClass("disabled");
});
