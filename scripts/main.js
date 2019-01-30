$(document).ready(function(){
    var navBar = $('#nav-top').eq(0);
    navBar.attr('navHeight', navBar.height());
    $(window).on("scroll", changeNavBackground);
})

function changeNavBackground(event) {
    var windowWidth = $(window).width();
    var headerImg = $('#header-img').eq(0);
    var brandImg = $('img.logo').eq(0);
    var navBar = $('#nav-top').eq(0);
    var triggerHeight = headerImg.height() - navBar.attr('navHeight');
    console.log($(window).scrollTop());
    if ($(window).scrollTop() >= triggerHeight) {
        if (!navBar.hasClass('bg-dark')) {
            navBar.removeClass('bg-semitransparent navbar-light');
            navBar.addClass('bg-dark navbar-dark');
            // if window width less than 576 don't animate/change height, it affects menu collapsing
            if (windowWidth >= 576) { 
                navBar.stop().animate(
                    {height: "40px"},
                    700
                );
                brandImg.stop().animate(
                    {height: "35px",
                        width: "35px"},
                    700
                );
            }
        }
    } else if (navBar.hasClass('bg-dark')) {
            navBar.removeClass('bg-dark navbar-dark');
            navBar.addClass('bg-semitransparent navbar-light');
            navBar.stop().animate(
                {height: navBar.attr('navHeight') + "px"},
                700,
                function(){
                    navBar.removeAttr('style');
                }
            );
            brandImg.stop().animate(
                {height: "50px",
                    width: "50px"},
                700,
                function(){
                    navBar.removeAttr('style');
                }
            );
    }
}