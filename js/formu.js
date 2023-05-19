$('#btn_registrarse').click(function(){
    $('.formulario form').animate({'opacity': '0'}, 500,function(){
        $('#barra li').css({'transition':'all .5s ease', 'margin-left':'50%'});
        $('.formulario form').css({'display':'none'});
        $('.formulario #registro-form').css({'display':'block'});
        $('.formulario #registro-form').animate({'opacity':'1'}, 500);
    })
})

$('#btn_conectarse').click(function(){
    $('.formulario form').animate({'opacity': '0'}, 500,function(){
        $('#barra li').css({'transition':'all .5s ease', 'margin-left':'left'});
        $('.formulario form').css({'display':'none'});
        $('.formulario #login-form').css({'display':'block'});
        $('.formulario #login-form').animate({'opacity':'1'}, 500);
    })
})