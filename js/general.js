$(document).ready(function(){

    $('.main .contenedor .showAdmin').hover(function(){
        $('.barra-lateral .logo h2').css('display','none');
    }, function(){
        $('.barra-lateral .logo h2').css('display','block');
    });

    
    $('.main .contenedor .show').on('click', function(){
        $('.barra-lateral .logo h2').text("JOE");
        /* $('.barra-lateral .logo h2').css('display','none'); */
    });

});