$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass('holder')
        } else {
            $('.navbar').removeClass('holder');
        }
    })
    $('#btnOpenMenu').click(function() {
        $('.nav-menu').toggleClass('active')
    })
})