var API ='AIzaSyB78m9I-ZKaT9AGSmLmTFM2Pj8LgEJ7RFs';


function initMap() {

    var latLng = {
        lat: 4.696564,
        lng: -74.1222587
    };

    var map = new google.maps.Map(document.getElementById('mapa'), {
        'center': latLng, 
        'zoom': 18        
    });

    var contenido = '<h2>GDLWebCamp</h2>'+
                    '<p>Te Esperamos</p>'+
                    '<p>Carrera 99 No64g-65'

    var informacion = new google.maps.InfoWindow({
        content: contenido
    });

    var marker = new google.maps.Marker({
        position:latLng,
        map:map,
        title: 'Mi casa'
    });

    marker.addListener('click',function(){
        informacion.open(map, marker);
    });
}

(function() {
    "use strict";
    var regalo = document.querySelector('#regalo')
    document.addEventListener('DOMContentLoaded', function(){

        console.log('Ready');
        //Campos Datos Usuario
        var nombre = document.querySelector('#nombre');
        var apellido = document.querySelector('#apellido');        
        var email = document.querySelector('#email');

        //Campos pases
        var pase_dia = document.querySelector('#pase_dia');        
        var pase_dosdias = document.querySelector('#pase_dosdias');
        var pase_completo = document.querySelector('#pase_completo');

        //Botones y Divs
        var calcular = document.querySelector('#calcular');        
        var error = document.querySelector('#error');
        var btnRegistro = document.querySelector('#btnRegistro');
        var resultado = document.querySelector('#lista-productos');
        var total =  document.querySelector('#suma-total');

        //Extras
        var etiquetas = document.querySelector('#etiquetas');
        var camisa = document.querySelector('#camisa_evento')
        
        if(calcular){

        calcular.addEventListener('click', calcularMontos);
        pase_dia.addEventListener('blur', mostrarDias);
        pase_dosdias.addEventListener('blur', mostrarDias);
        pase_completo.addEventListener('blur', mostrarDias);
        nombre.addEventListener('blur', validarCampos);
        apellido.addEventListener('blur', validarCampos);
        email.addEventListener('blur', validarCampos);
        email.addEventListener('blur', validarEmail);

        function calcularMontos(event) {
            event.preventDefault();
            if(regalo.value === ''){
                alert("Debes elegir un regalo");
                regalo.focus();
            }else{
                var boletosDia = parseInt(pase_dia.value,10) || 0,
                    boletos2Dias = parseInt(pase_dosdias.value,10) || 0,
                    boletosCompleto = parseInt(pase_completo.value,10) || 0,
                    Netiquetas = parseInt(etiquetas.value,10) || 0,
                    Ncamisa = parseInt(camisa.value,10) || 0;

                var totalPagar = boletosDia*30+boletos2Dias*45+boletosCompleto*50+(Ncamisa*10*.93)+Netiquetas*2;

                total.innerHTML = '$ '+ totalPagar.toFixed(2);
                
                var listado_productos = [];
                if(boletosDia>=1){
                    listado_productos.push(boletosDia + ' Pases Por Dia')
                }
                if(boletos2Dias>=1){
                    listado_productos.push(boletos2Dias + ' Pases Por 2 Dia')
                }
                if(boletosCompleto>=1){
                    listado_productos.push(boletosCompleto + ' Pases Completos')
                }
                if(Ncamisa>=1){
                    listado_productos.push(Ncamisa + ' Pases Camisas')
                }
                if(Netiquetas>=1){
                    listado_productos.push(Netiquetas + ' Pases Etiquetas')
                }

                for (var i = 0; i < listado_productos.length; i++) {
                    resultado.innerHTML += listado_productos[i] +'<br/>';
                    
                }

                resultado.style.display='block'

            }
        }

        function mostrarDias() {
            var boletosDia = parseInt(pase_dia.value,10) || 0,
                boletos2Dias = parseInt(pase_dosdias.value,10) || 0,
                boletosCompleto = parseInt(pase_completo.value,10) || 0;
            
            var diasElegidos = [];

            if(boletosDia>0){
                diasElegidos.push('viernes');
            }
            if(boletos2Dias>0){
                diasElegidos.push('viernes','sabado');
            }
            if(boletosCompleto>0){
                diasElegidos.push('viernes', 'sabado', 'domingo');
            }

            for (var i = 0; i < diasElegidos.length; i++) {                
                document.getElementById(diasElegidos[i]).style.display = 'block';

            }

        }

        function validarCampos() {
            if(this.value == ''){
                error.style.display = 'block';
                error.innerHTML = "Este campo es Obligatorio";
                this.style.border = '1px solid red';
                error.style.border = '1px solid red';
            }else{
                error.style.display = 'none';
                this.style.border = '1px solid #cccccc';
            }
        }

        function validarEmail() {
            if (this.value.indexOf('@') > -1) {
                error.style.display = 'none';
                this.style.border = '1px solid #cccccc';                
            }else{
                error.style.display = 'block';
                error.innerHTML = "Este campo debe contener un correo valido";
                this.style.border = '1px solid red';
                error.style.border = '1px solid red';                
            }
        }
        }

    });//DOM Content Loades
})();


$(function() {

    //lettering

    //$('.nombre-sitio').lettering();

    //Menu fijo
    var windowHeight = $(window).height();
    var barraAltura = $('.barra').innerHeight();

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll>windowHeight){
            $('.barra').addClass('fixed');
            $('body').css({'margin-top':barraAltura+'px'});
        }
        else{
            $('.barra').removeClass('fixed');
            $('body').css({'margin-top':'0px'});
        }
    })

    //Menu responsive

    $('.menu-movil').on('click', function(){
        $('.navegacion-principal').slideToggle();
    })



    //Programa de Conferencia
    $('.programa-evento .info-curso:first').show();
    $('.menu-programa a:first').addClass('activo');

    $('.menu-programa a').on('click', function(){
        $('.menu-programa a').removeClass();
        $(this).addClass('activo');
        $('.ocultar').hide();
        var enlace = $(this).attr('href');
        $(enlace).fadeIn(1000);

        return false;

    });

    //Animaciones para los numeros

    $('.resumen-evento li:nth-child(1) p').animateNumber({number : 6}, 1200);
    $('.resumen-evento li:nth-child(2) p').animateNumber({number : 15}, 1200);
    $('.resumen-evento li:nth-child(3) p').animateNumber({number : 3}, 1500);
    $('.resumen-evento li:nth-child(4) p').animateNumber({number : 9}, 1500);

    //Cuenta Regresiva

    $('.cuenta-regresiva').countdown('2017/10/10 09:00:00', function(event){
        $('#dias').html(event.strftime('%D'));
        $('#horas').html(event.strftime('%H'));
        $('#minutos').html(event.strftime('%M'));
        $('#segundos').html(event.strftime('%S'));
    })
    
});