$(document).ready(function(){
	$('#alert').hide();
	$('.btn-delete').click(function(e){
		e.preventDefault();
		if ( ! confirm("¿Esta seguro de eliminar?")) {
			return false;
		}
		
	var row = $(this).parents('tr');
	var row = $(this).parents('tr');
	var url = form.attr('action');
	
	$('#alert').show();
	
	$.post(url, form.serialize(), function(result) {
		row.fadeOut();
		$('#products-total').html(result.total);
		$('#alert').html(result.message);
	}).fail(function(){
		$('#alert').html("Algo salió mal");
	});
	});
});