/**
 * 
 */
function configurarCamposMoney()
{
	
function gerarTaxaDep(v)
{
	
	//var valor = document.getElementById('tabCadbens:vu').maskMoney('unmasked')[0];
	
	var aux = v * 12;
	var taxa;
	if(aux > 0)
	{
		
		taxa = 100 / (aux / 12);
	}
	else
	{
		taxa = 0;
	}
	
	
	document.getElementById('pageCad:tabCadbens:txDeprec').value = taxa;

}

function limparCampos(campoAtual)
{
	switch(campoAtual)
	{
		case "fatura":
			    $('[id="pageCad:tabCadbens:vl_origem"]').val("0.0"); 
				$('[id="pageCad:tabCadbens:vl_doacao"]').val("0.0");
				$('[id="pageCad:tabCadbens:vl_transferencia"]').val("0.0");
				$('[id="pageCad:tabCadbens:vl_justo"]').val("0.0");
				break;
				
		case "vl_origem":
				$('[id="pageCad:tabCadbens:fatura"]').val("0.0"); 
				$('[id="pageCad:tabCadbens:vl_doacao"]').val("0.0");
				$('[id="pageCad:tabCadbens:vl_transferencia"]').val("0.0");
				$('[id="pageCad:tabCadbens:vl_justo"]').val("0.0");
				break;
				
		case "vl_transferencia":
				$('[id="pageCad:tabCadbens:fatura"]').val("0.0"); 
				$('[id="pageCad:tabCadbens:vl_doacao"]').val("0.0");
				$('[id="pageCad:tabCadbens:vl_origem"]').val("0.0");
				$('[id="pageCad:tabCadbens:vl_justo"]').val("0.0");
				break;
				
		case "vl_doacao":
				$('[id="pageCad:tabCadbens:vl_origem"]').val("0.0"); 
				$('[id="pageCad:tabCadbens:fatura"]').val("0.0");
				$('[id="pageCad:tabCadbens:vl_transferencia"]').val("0.0");
				$('[id="pageCad:tabCadbens:vl_justo"]').val("0.0");
				break;
				
		case "vl_justo":
				$('[id="pageCad:tabCadbens:vl_origem"]').val("0.0"); 
				$('[id="pageCad:tabCadbens:vl_doacao"]').val("0.0");
				$('[id="pageCad:tabCadbens:vl_transferencia"]').val("0.0");
				$('[id="pageCad:tabCadbens:fatura"]').val("0.0");
				break;
			
	}
}

function somarCampos()
{
	fatura = ($('[id="pageCad:tabCadbens:fatura"]').maskMoney('unmasked')[0]                  == "") ? "0"  : $('[id="pageCad:tabCadbens:fatura"]').maskMoney('unmasked')[0];
	origem = ($('[id="pageCad:tabCadbens:vl_origem"]').maskMoney('unmasked')[0]               == "") ? "0"  : $('[id="pageCad:tabCadbens:vl_origem"]').maskMoney('unmasked')[0]; 
	doacao = ($('[id="pageCad:tabCadbens:vl_doacao"]').maskMoney('unmasked')[0]               == "") ? "0"  : $('[id="pageCad:tabCadbens:vl_doacao"]').maskMoney('unmasked')[0];
	transferencia = ($('[id="pageCad:tabCadbens:vl_transferencia"]').maskMoney('unmasked')[0] == "0") ? "0" : $('[id="pageCad:tabCadbens:vl_transferencia"]').maskMoney('unmasked')[0];
	justo = ($('[id="pageCad:tabCadbens:vl_justo"]').maskMoney('unmasked')[0]                 == "") ? "0"  : $('[id="pageCad:tabCadbens:vl_justo"]').maskMoney('unmasked')[0];
	
	residual = ($('[id="pageCad:tabCadbens:vl_residual"]').maskMoney('unmasked')[0]        == "") ? "0"  : $('[id="pageCad:tabCadbens:vl_residual"]').maskMoney('unmasked')[0];
	
	
	frete      = ($('[id="pageCad:tabCadbens:frete"]').maskMoney('unmasked')[0]      == "") ? "0" : $('[id="pageCad:tabCadbens:frete"]').maskMoney('unmasked')[0];
	montagem   = ($('[id="pageCad:tabCadbens:montagem"]').maskMoney('unmasked')[0]   == "") ? "0" : $('[id="pageCad:tabCadbens:montagem"]').maskMoney('unmasked')[0];
	instalacao = ($('[id="pageCad:tabCadbens:instalacao"]').maskMoney('unmasked')[0] == "") ? "0" : $('[id="pageCad:tabCadbens:instalacao"]').maskMoney('unmasked')[0];
	seguro     = ($('[id="pageCad:tabCadbens:seguro"]').maskMoney('unmasked')[0]     == "") ? "0" : $('[id="pageCad:tabCadbens:seguro"]').maskMoney('unmasked')[0];
	outros     = ($('[id="pageCad:tabCadbens:outros"]').maskMoney('unmasked')[0]     == "") ? "0" : $('[id="pageCad:tabCadbens:outros"]').maskMoney('unmasked')[0];
	
	total = parseFloat(frete) + parseFloat(montagem) + parseFloat(seguro) + parseFloat(instalacao) + parseFloat(outros) +
	parseFloat(fatura) + parseFloat(origem) + parseFloat(doacao) + parseFloat(transferencia) + parseFloat(justo);
	
	//totalFinal = total - residual;
	
	$('[id="pageCad:tabCadbens:vl_aquisicao"]').val(total);
	
	$('[id="pageCad:tabCadbens:valorTotalAquisicao"]').val(total); //fazendo a gambiarra para poder mostrar o valor no campo, e mandar para o bean
	
	console.log("fatura - " + fatura + "\norigem - " + origem + "\ndoacao - " + doacao + "\ntransferencia - " +
			transferencia + "\njusto - " + justo + "\nfrete - " + frete + "\nmontagem" + montagem +
			"\ninstalacao - " + instalacao + "\nseguro - " + seguro + "\noutros - " + outros + "\nresidual - " +
			residual + "\nvalor total - " + total);
}

$(document).ready(
		function(){
			
			$('[id="pageCad:tabCadbens:vu"]').keyup(
					function(){
				
						gerarTaxaDep($('[id="pageCad:tabCadbens:vu"]').maskMoney('unmasked')[0]);
			});
		});
$(document).ready( 
		function()
		{
			
               $('[id="pageCad:pageCad:tabCadbens:fatura"]').keypress(function (){
				
				limparCampos("fatura");
			});
			
			
			$('[id="pageCad:pageCad:tabCadbens:fatura"]').keyup(
					
					function()
					{
						
						somarCampos();
					}
			);
						
	    }
);


$(document).ready( 
		function()
		{
			
			$('[id="pageCad:tabCadbens:vl_origem"]').keypress(function (){
				
				limparCampos("vl_origem");
				
			});
			
			$('[id="pageCad:tabCadbens:vl_origem"]').keyup(
					
					function()
					{
						somarCampos();
					}
			);
						
	    }
);

$(document).ready( 
		function()
		{
               $('[id="pageCad:tabCadbens:vl_transferencia"]').keypress(function (){
				
            	   
					limparCampos("vl_transferencia");
					
               });
			
			$('[id="pageCad:tabCadbens:vl_transferencia"]').keyup(
					
					function()
					{
						
						somarCampos();
					}
			);
						
	    }
);


$(document).ready( 
		function()
		{
			
			$('[id="pageCad:tabCadbens:vl_doacao"]').keypress(
					function(){
						
						limparCampos("vl_doacao");
					});
			
			$('[id="pageCad:tabCadbens:vl_doacao"]').keyup(
					
					function()
					{
						
						somarCampos();
					}
			);
						
	    }
);


$(document).ready( 
		function()
		{
			$('[id="pageCad:tabCadbens:vl_justo"]').keypress(
					function(){
				
						limparCampos("vl_justo");
						
			});
			
			
			$('[id="pageCad:tabCadbens:vl_justo"]').keypress(
					
					function()
					{
						somarCampos();
					}
			);
						
	    }
);

$(document).ready( 
		function()
		{
			
			$('[id="pageCad:tabCadbens:frete"]').keyup(
					
					function()
					{
						somarCampos();
					}
			);
						
	    }
);


$(document).ready( 
		function()
		{
			
			$('[id="pageCad:tabCadbens:seguro"]').keyup(
					
					function()
					{
						somarCampos();
					});
						
	    });

$(document).ready( 
		function()
		{
			
			$('[id="pageCad:tabCadbens:instalacao"]').keyup(
					
					function()
					{
						somarCampos();
					}
			);
						
	    }
);


$(document).ready( 
		function()
		{
			
			$('[id="pageCad:tabCadbens:montagem"]').keyup(
					
					function()
					{
						somarCampos();
					}
			);
						
	    }
);

$(document).ready( 
		function()
		{
			
			$('[id="pageCad:tabCadbens:outros"]').keyup(
					
					function()
					{
						somarCampos();
					}
			);
						
	    }
);


$(document).ready( 
		function()
		{
			
			$('[id="pageCad:tabCadbens:vl_residual"]').keyup(
					
					function()
					{
						 
						somarCampos();
					}
			);
						
	    }
);


	$(function()
			{
				$('[id="pageCad:tabCadbens:fatura"]').maskMoney({
					thousands:'.', decimal:',', symbolStay: false});
				
				$('[id="pageCad:tabCadbens:vl_origem"]').maskMoney({ 
					thousands:'.', decimal:',', symbolStay: false});
				
				$('[id="pageCad:tabCadbens:vl_doacao"]').maskMoney({ 
					thousands:'.', decimal:',', symbolStay: false});
				
				$('[id="pageCad:tabCadbens:vl_transferencia"]').maskMoney({
					thousands:'.', decimal:',', symbolStay: false});
				
				$('[id="pageCad:tabCadbens:vl_justo"]').maskMoney({
					thousands:'.', decimal:',', symbolStay: false});
				
				$('[id="pageCad:tabCadbens:frete"]').maskMoney({
					thousands:'.', decimal:',', symbolStay: false});
				
				$('[id="pageCad:tabCadbens:seguro"]').maskMoney({
					thousands:'.', decimal:',', symbolStay: false});
				
				$('[id="pageCad:tabCadbens:instalacao"]').maskMoney({
					thousands:'.', decimal:',', symbolStay: false});
				
				$('[id="pageCad:tabCadbens:montagem"]').maskMoney({
					thousands:'.', decimal:',', symbolStay: false});
				
				$('[id="pageCad:tabCadbens:outros"]').maskMoney({
					thousands:'.', decimal:',', symbolStay: false});
				
				$('[id="pageCad:tabCadbens:vl_aquisicao"]').maskMoney({
					thousands:'.', decimal:',', symbolStay: false});
				
				$('[id="pageCad:tabCadbens:vu"]').maskMoney({
					thousands:'.', decimal:',', symbolStay: false});
				
				$('[id="pageCad:tabCadbens:vl_residual"]').maskMoney({
					thousands:'.', decimal:',', symbolStay: false});
			});

}

