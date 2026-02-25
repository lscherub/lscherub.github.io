/**
 * Panel navigation for the portfolio homepage.
 *
 * Each panel (about, blog, work, contact) slides in from a specific
 * direction using animate.css classes. The class is removed after the
 * animation completes (800ms) so that re-opening the panel replays it.
 *
 * Functions: showabout / closeabout, showblog / closeblog,
 *            showwork  / closework,  showcontact / closecontact
 */

function showabout() {
    $('#about_container').css('display', 'inherit');
    $('#about_container').addClass('animated slideInLeft');
    setTimeout(function() {
        $('#about_container').removeClass('animated slideInLeft');
    }, 800);
}

function closeabout() {
    $('#about_container').addClass('animated slideOutLeft');
    setTimeout(function() {
        $('#about_container').removeClass('animated slideOutLeft');
        $('#about_container').css('display', 'none');
    }, 800);
}

function showblog() {
    $('#blog_container').css('display', 'inherit');
    $('#blog_container').addClass('animated slideInRight');
    setTimeout(function() {
        $('#blog_container').removeClass('animated slideInRight');
    }, 800);
}

function closeblog() {
    $('#blog_container').addClass('animated slideOutRight');
    setTimeout(function() {
        $('#blog_container').removeClass('animated slideOutRight');
        $('#blog_container').css('display', 'none');
    }, 800);
}

function showwork() {
    $('#work_container').css('display', 'inherit');
    $('#work_container').addClass('animated slideInUp');
    setTimeout(function() {
        $('#work_container').removeClass('animated slideInUp');
    }, 800);
}

function closework() {
    $('#work_container').addClass('animated slideOutDown');
    setTimeout(function() {
        $('#work_container').removeClass('animated slideOutDown');
        $('#work_container').css('display', 'none');
    }, 800);
}

function showcontact() {
    $('#contact_container').css('display', 'inherit');
    $('#contact_container').addClass('animated slideInUp');
    setTimeout(function() {
        $('#contact_container').removeClass('animated slideInUp');
    }, 800);
}

function closecontact() {
    $('#contact_container').addClass('animated slideOutDown');
    setTimeout(function() {
        $('#contact_container').removeClass('animated slideOutDown');
        $('#contact_container').css('display', 'none');
    }, 800);
}

// Dismiss the loading overlay and reveal the page after 1.5s
setTimeout(function() {
    $('#loading').addClass('animated fadeOut');
    setTimeout(function() {
        $('#loading').removeClass('animated fadeOut');
        $('#loading').css('display', 'none');
        $('#box').css('display', 'none');
        $('#about').removeClass('animated fadeIn');
        $('#blog').removeClass('animated fadeIn');
        $('#contact').removeClass('animated fadeIn');
        $('#work').removeClass('animated fadeIn');
    }, 1000);
}, 1500);
