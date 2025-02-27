$(document).ready(function(){
    $(".app-nav-link").click(function() {
        $(".app-nav-link").removeClass('active');

        $(this).addClass('active');
    })
})