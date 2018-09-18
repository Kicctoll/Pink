$('document').ready(function () {
    let navbarBurger = $('.navbar-burger');
    let navMenu  = $('.nav-menu');
    $(navbarBurger).click(function (event) {
        event.preventDefault();
        let realHeight = navMenu[0].scrollHeight;

        if(navMenu.css('max-height') === '0px') {
            navMenu.css('max-height', realHeight + 'px');
        } else {
            navMenu.css('max-height', '0px');
        }
    });
});