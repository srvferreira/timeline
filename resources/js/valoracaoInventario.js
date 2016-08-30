/**
 * 
 */
$(function()
			{
				$('[id="tabValorInventario:cota1"]').maskMoney({
					thousands:'.', decimal:',', symbolStay: false});
				
				$('[id="tabValorInventario:cota2"]').maskMoney({ 
					thousands:'.', decimal:',', symbolStay: false});
				
				$('[id="tabValorInventario:cota3"]').maskMoney({ 
					thousands:'.', decimal:',', symbolStay: false});
				
				$('[id="tabValorInventario:cota4"]').maskMoney({
					thousands:'.', decimal:',', symbolStay: false});
				
				$('[id="tabValorInventario:cota5"]').maskMoney({
					thousands:'.', decimal:',', symbolStay: false});
			});

$(document).ready(
		function(){
	
	$('[id="tabValorInventario:cota1"]').keyup(
			function(){
		
		         c1 = $('[id="tabValorInventario:cota1"]').maskMoney('unmasked')[0]; 
		     
		console.log("valora da fatura " + c1);
		$('[id="cotacao1"]').val(c1);
		
	});
	
	$('[id="tabValorInventario:cota2"]').keyup(
			function(){
				
				c2 = $('[id="tabValorInventario:cota2"]').maskMoney('unmasked')[0];
				
				console.log("valor da cotacao2 - " + c2);
				$('[id="cotacao2"]').val(c2);
	});
	
	$('[id="tabValorInventario:cota3"]').keyup(
			function(){
				
				c3 = $('[id="tabValorInventario:cota3"]').maskMoney('unmasked')[0];
				
				console.log("valor da cotacao2 - " + c3);
				$('[id="cotacao3"]').val(c3);
	});
	
	$('[id="tabValorInventario:cota4"]').keyup(
			function(){
				
				c4 = $('[id="tabValorInventario:cota4"]').maskMoney('unmasked')[0];
				
				console.log("valor da cotacao2 - " + c4);
				$('[id="cotacao4"]').val(c4);
	});
	
	$('[id="tabValorInventario:cota5"]').keyup(
			function(){
				
				c5 = $('[id="tabValorInventario:cota5"]').maskMoney('unmasked')[0];
				
				console.log("valor da cotacao2 - " + c5);
				$('[id="cotacao5"]').val(c5);
	});
});