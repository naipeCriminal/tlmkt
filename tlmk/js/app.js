$(document).ready(function(){
	avisoPrivacidad();
	planesAoB();
	domicilio();
	formaPago();
	envioP();

	$("#checkbox-1").click(function(){
		avisoPrivacidad();
	})
	$(".planAB").click(function(){
		planesAoB();
	})
	$(".pregDom").click(function(){
		domicilio();
	})
	$(".entregaP").click(function(){
		envioP();
	})
})
$('[data-toggle="tooltip"]').tooltip();
function avisoPrivacidad(){
	if( $('#checkbox-1').prop('checked') ){
			$( ".registro" ).prop( "enabled", true );
			$( ".registro" ).prop( "disabled", false );
		}else {
			$( ".registro" ).prop( "disabled", true );
			$( ".registro" ).prop( "enabled", false );
		}
}
function planesAoB(){
	if( $('#radio-1').prop('checked') ){
			$(".a").addClass("active");
			$(".b").removeClass("active");
		}else {
			$(".b").addClass("active");
			$(".a").removeClass("active");
		}
}
function domicilio(){
	if( $('#radio-domC').prop('checked') ){
		$('.edificio').fadeOut();
		$('.casa').fadeIn();
	} else {
		$('.casa').fadeOut();
		$('.edificio').fadeIn();
	}
}
function formaPago(){
	$(".row .plan button").click(function(){
		$(".row .plan").removeClass("active");
		$(this).parent().parent().addClass("active");
	})
}
function envioP(){
	if( $('#radioEnvio').prop('checked') ){
		$('.envio').fadeIn();
	} else {
		$('.envio').fadeOut();
	}
}