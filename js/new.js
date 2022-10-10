$(document).ready(function(){

    $('[data-trigger="dropdown"]').on ('mouseenter', function(){
       var submenu = $(this).parent().find('.submenu')
       submenu.fadeIn(350)

       $('.menu').on('mouseleave', function(){
        submenu.fadeOut(350)
       })
    })

 
})