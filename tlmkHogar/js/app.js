$(document).ready(function(){
	avisoPrivacidad();
	formaPago();
	envioP();
	qBene();
	$(".qBeneficiario").fadeOut();
	
	$('[data-toggle="tooltip"]').tooltip();

	$("#checkbox-1").click(function(){
		avisoPrivacidad();
	})
	$(".entregaP").click(function(){
		envioP();
	})
		$("#checkbox-Acepto").click(function(){
		terminosCondiciones()
	})
    $('.selector').datepicker({
		changeMonth: true,
		changeYear: true, 	
		yearRange: "1940:2004",
		dateFormat: 'd-m-yy',
		inline: true,
		onSelect: function() {
			var date = $(".selector").val();
			splitDate = date.split("-")
			$('#day').val(splitDate[0])
			$('#moth').val(splitDate[1])
			$('#year').val(splitDate[2])
		} 
    });	
    $('.selector2').datepicker({
		changeMonth: true,
		changeYear: true, 	
		yearRange: "1940:2004",
		dateFormat: 'd-m-yy',
		inline: true,
		onSelect: function() {
			var date2 = $(".selector2").val();
			splitDate2 = date2.split("-")
			$('#day2').val(splitDate2[0])
			$('#moth2').val(splitDate2[1])
			$('#year2').val(splitDate2[2])
		} 
    });	
})
function avisoPrivacidad(){
	if( $('#checkbox-1').prop('checked') ){
			$( ".registro" ).prop( "enabled", true );
			$( ".registro" ).prop( "disabled", false );
		}else {
			$( ".registro" ).prop( "disabled", true );
			$( ".registro" ).prop( "enabled", false );
		}
}
function formaPago(){
	$(".row .plan button").click(function(){
		$(".row .plan").removeClass("active");
		$(this).parent().addClass("active");
	})
}
function envioP(){
	if( $('#radioEnvio').prop('checked') ){
		$('.envio').fadeIn();
	} else {
		$('.envio').fadeOut();
	}
}
function qBene(){
	$(".pregB button").click(function(){
		$(".qBeneficiario").fadeIn();
	})
}
function terminosCondiciones(){
	if( $('#checkbox-Acepto').prop('checked') ){
			$( ".acepto1" ).prop( "enabled", true );
			$( ".acepto1" ).prop( "disabled", false );
		}else {
			$( ".acepto1" ).prop( "disabled", true );
			$( ".acepto1" ).prop( "enabled", false );
		}
}