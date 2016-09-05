/**
 * 
 */
$(function()
			{
				$('[id="tabImoveisProcurar:valorImovelIni"]').maskMoney({
					thousands:'.', decimal:',', symbolStay: false});
				
				$('[id="tabImoveisProcurar:valorImovelFim"]').maskMoney({ 
					thousands:'.', decimal:',', symbolStay: false});
				
				$('[id="tabImoveisProcurar:valorTerrenoIni"]').maskMoney({ 
					thousands:'.', decimal:',', symbolStay: false});
				
				$('[id="tabImoveisProcurar:valorTerrenoFim"]').maskMoney({
					thousands:'.', decimal:',', symbolStay: false});
				
				$('[id="tabImoveisProcurar:valorAluguelIni"]').maskMoney({
					thousands:'.', decimal:',', symbolStay: false});
				
				$('[id="tabImoveisProcurar:valorAluguelFim"]').maskMoney({
					thousands:'.', decimal:',', symbolStay: false});
				
				$('[id="tabImoveis-1:vl_imovel"]').maskMoney({
					thousands:'.', decimal:',', symbolStay: false});
				
				$('[id="tabImoveis-1:vl_terreno"]').maskMoney({
					thousands:'.', decimal:',', symbolStay: false});
				
				$('[id="tabImoveis-1:vl_aluguel"]').maskMoney({
					thousands:'.', decimal:',', symbolStay: false});
			});

$(document).ready(
		function(){
	
			$('[id="tabImoveis-1:vl_imovel"]').keyup(
					function(){
				
						vlImovel = $('[id="tabImoveis-1:vl_imovel"]').maskMoney('unmasked')[0];
						$('[id="vl_imovel"]').val(vlImovel);
						
						console.log("Valor Imóvel - " + vlImovel);
			});
			
			$('[id="tabImoveis-1:vl_aluguel"]').keyup(
					function(){
				
						vlAluguel = $('[id="tabImoveis-1:vl_aluguel"]').maskMoney('unmasked')[0];
						$('[id="vl_aluguel"]').val(vlAluguel);
						
						console.log("Valor aluguel - " + vlAluguel);
			});
			
			$('[id="tabImoveis-1:vl_terreno"]').keyup(
					function(){
				
						vlTerreno = $('[id="tabImoveis-1:vl_terreno"]').maskMoney('unmasked')[0];
						$('[id="vl_terreno"]').val(vlTerreno);
						
						console.log("Valor aluguel - " + vlTerreno);
			});
			
			$('[id="tabImoveisProcurar:valorImovelIni"]').keyup(
					function(){
						
						vlImovelIni = $('[id="tabImoveisProcurar:valorImovelIni"]').maskMoney('unmasked')[0];
						
						$('[id="vl_imovelpIni"]').val(vlImovelIni);
						
						console.log(vlImovelIni);
					});
			
			$('[id="tabImoveisProcurar:valorImovelFim"]').keyup(
					function(){
						
						vlImovelFim = $('[id="tabImoveisProcurar:valorImovelFim"]').maskMoney('unmasked')[0];
						
						$('[id="vl_imovelpFim"]').val(vlImovelFim);
						
						console.log(vlImovelFim);
					});
			
			$('[id="tabImoveisProcurar:valorAluguelIni"]').keyup(
					function(){
						
						vlAluguelIni = $('[id="tabImoveisProcurar:valorAluguelIni"]').maskMoney('unmasked')[0];
						
						$('[id="vl_aluguelpIni"]').val(vlAluguelIni);
						console.log(vlAluguelIni);
					});
			
			$('[id="tabImoveisProcurar:valorAluguelFim"]').keyup(
					function(){
						
						vlAluguelFim = $('[id="tabImoveisProcurar:valorAluguelFim"]').maskMoney('unmasked')[0];
						
						$('[id="vl_aluguelpFim"]').val(vlAluguelFim);
						
						console.log(vlAluguelFim);
					});
			
			$('[id="tabImoveisProcurar:valorTerrenoIni"]').keyup(
					function(){
						
						vlTerrenoIni = $('[id="tabImoveisProcurar:valorTerrenoIni"]').maskMoney('unmasked')[0];
						
						$('[id="vl_terrenopIni"]').val(vlTerrenoIni);
						
						console.log(vlTerrenoIni);
					});
			
			$('[id="tabImoveisProcurar:valorTerrenoFim"]').keyup(
					function(){
						
						vlTerrenoFim = $('[id="tabImoveisProcurar:valorTerrenoFim"]').maskMoney('unmasked')[0];
						
						$('[id="vl_terrenopFim"]').val(vlTerrenoFim);
						
						console.log(vlTerrenoFim);
					});
});

