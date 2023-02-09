const $mobileNavBar = $('.mobile-nav-bar')
const $navBar = $('.nav-bar')
const $mobileNavBarX = $('.mobile-nav-bar-x')
const $overlay = $('.overlay')

$mobileNavBar.click(function(){
    $navBar.addClass('nav-bar-displayed')
    $mobileNavBarX.addClass('nav-bar-x-displayed')
    $overlay.addClass('darken')
})

$mobileNavBarX.click(function(){
    $navBar.removeClass('nav-bar-displayed')
    $mobileNavBarX.removeClass('nav-bar-x-displayed')
    $overlay.removeClass('darken')
})