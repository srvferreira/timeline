/**
 * 
 */
$.main = 
{
	
gerarTaxaDep : function(v){
	
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
	
	
	document.getElementById('tabCadbens:txDeprec').value = taxa;

},

limparCampos : function(campoAtual){
	switch(campoAtual)
	{
		case "fatura":
			    $('[id="tabCadbens:vl_origem"]').val("0.0"); 
				$('[id="tabCadbens:vl_doacao"]').val("0.0");
				$('[id="tabCadbens:vl_transferencia"]').val("0.0");
				$('[id="tabCadbens:vl_justo"]').val("0.0");
				break;
				
		case "vl_origem":
				$('[id="tabCadbens:fatura"]').val("0.0"); 
				$('[id="tabCadbens:vl_doacao"]').val("0.0");
				$('[id="tabCadbens:vl_transferencia"]').val("0.0");
				$('[id="tabCadbens:vl_justo"]').val("0.0");
				break;
				
		case "vl_transferencia":
				$('[id="tabCadbens:fatura"]').val("0.0"); 
				$('[id="tabCadbens:vl_doacao"]').val("0.0");
				$('[id="tabCadbens:vl_origem"]').val("0.0");
				$('[id="tabCadbens:vl_justo"]').val("0.0");
				break;
				
		case "vl_doacao":
				$('[id="tabCadbens:vl_origem"]').val("0.0"); 
				$('[id="tabCadbens:fatura"]').val("0.0");
				$('[id="tabCadbens:vl_transferencia"]').val("0.0");
				$('[id="tabCadbens:vl_justo"]').val("0.0");
				break;
				
		case "vl_justo":
				$('[id="tabCadbens:vl_origem"]').val("0.0"); 
				$('[id="tabCadbens:vl_doacao"]').val("0.0");
				$('[id="tabCadbens:vl_transferencia"]').val("0.0");
				$('[id="tabCadbens:fatura"]').val("0.0");
				break;
			
	}
},

somarCampos : function(){
	fatura = ($('[id="tabCadbens:fatura"]').maskMoney('unmasked')[0]                  == "") ? "0"  : $('[id="tabCadbens:fatura"]').maskMoney('unmasked')[0];
	origem = ($('[id="tabCadbens:vl_origem"]').maskMoney('unmasked')[0]               == "") ? "0"  : $('[id="tabCadbens:vl_origem"]').maskMoney('unmasked')[0]; 
	doacao = ($('[id="tabCadbens:vl_doacao"]').maskMoney('unmasked')[0]               == "") ? "0"  : $('[id="tabCadbens:vl_doacao"]').maskMoney('unmasked')[0];
	transferencia = ($('[id="tabCadbens:vl_transferencia"]').maskMoney('unmasked')[0] == "0") ? "0" : $('[id="tabCadbens:vl_transferencia"]').maskMoney('unmasked')[0];
	justo = ($('[id="tabCadbens:vl_justo"]').maskMoney('unmasked')[0]                 == "") ? "0"  : $('[id="tabCadbens:vl_justo"]').maskMoney('unmasked')[0];
	
	residual = ($('[id="tabCadbens:vl_residual"]').maskMoney('unmasked')[0]        == "") ? "0"  : $('[id="tabCadbens:vl_residual"]').maskMoney('unmasked')[0];
	
	
	frete      = ($('[id="tabCadbens:frete"]').maskMoney('unmasked')[0]      == "") ? "0" : $('[id="tabCadbens:frete"]').maskMoney('unmasked')[0];
	montagem   = ($('[id="tabCadbens:montagem"]').maskMoney('unmasked')[0]   == "") ? "0" : $('[id="tabCadbens:montagem"]').maskMoney('unmasked')[0];
	instalacao = ($('[id="tabCadbens:instalacao"]').maskMoney('unmasked')[0] == "") ? "0" : $('[id="tabCadbens:instalacao"]').maskMoney('unmasked')[0];
	seguro     = ($('[id="tabCadbens:seguro"]').maskMoney('unmasked')[0]     == "") ? "0" : $('[id="tabCadbens:seguro"]').maskMoney('unmasked')[0];
	outros     = ($('[id="tabCadbens:outros"]').maskMoney('unmasked')[0]     == "") ? "0" : $('[id="tabCadbens:outros"]').maskMoney('unmasked')[0];
	
	total = parseFloat(frete) + parseFloat(montagem) + parseFloat(seguro) + parseFloat(instalacao) + parseFloat(outros) +
	parseFloat(fatura) + parseFloat(origem) + parseFloat(doacao) + parseFloat(transferencia) + parseFloat(justo);
	
	//totalFinal = total - residual;
	
	$('[id="tabCadbens:vl_aquisicao"]').val(total);
	
	$('[id="tabCadbens:valorTotalAquisicao"]').val(total); //fazendo a gambiarra para poder mostrar o valor no campo, e mandar para o bean
	
	console.log("fatura - " + fatura + "\norigem - " + origem + "\ndoacao - " + doacao + "\ntransferencia - " +
			transferencia + "\njusto - " + justo + "\nfrete - " + frete + "\nmontagem" + montagem +
			"\ninstalacao - " + instalacao + "\nseguro - " + seguro + "\noutros - " + outros + "\nresidual - " +
			residual + "\nvalor total - " + total);
}};

$(document).ready(
		function(){
			
			$('[id="tabCadbens:vu"]').keyup(
					function(){
				
						gerarTaxaDep($('[id="tabCadbens:vu"]').maskMoney('unmasked')[0]);
			});
		});
$(document).ready( 
		function()
		{
			
               $('[id="tabCadbens:fatura"]').keypress(function (){
				
				limparCampos("fatura");
			});
			
			
			$('[id="tabCadbens:fatura"]').keyup(
					
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
			
			$('[id="tabCadbens:vl_origem"]').keypress(function (){
				
				limparCampos("vl_origem");
				
			});
			
			$('[id="tabCadbens:vl_origem"]').keyup(
					
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
               $('[id="tabCadbens:vl_transferencia"]').keypress(function (){
				
            	   
					limparCampos("vl_transferencia");
					
               });
			
			$('[id="tabCadbens:vl_transferencia"]').keyup(
					
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
			
			$('[id="tabCadbens:vl_doacao"]').keypress(
					function(){
						
						limparCampos("vl_doacao");
					});
			
			$('[id="tabCadbens:vl_doacao"]').keyup(
					
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
			$('[id="tabCadbens:vl_justo"]').keypress(
					function(){
				
						limparCampos("vl_justo");
						
			});
			
			
			$('[id="tabCadbens:vl_justo"]').keypress(
					
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
			
			$('[id="tabCadbens:frete"]').keyup(
					
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
			
			$('[id="tabCadbens:seguro"]').keyup(
					
					function()
					{
						somarCampos();
					});
						
	    });

$(document).ready( 
		function()
		{
			
			$('[id="tabCadbens:instalacao"]').keyup(
					
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
			
			$('[id="tabCadbens:montagem"]').keyup(
					
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
			
			$('[id="tabCadbens:outros"]').keyup(
					
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
			
			$('[id="tabCadbens:vl_residual"]').keyup(
					
					function()
					{
						 
						somarCampos();
					}
			);
						
	    }
);


	$(function()
			{
				$('[id="tabCadbens:fatura"]').maskMoney({
					thousands:'.', decimal:',', symbolStay: false});
				
				$('[id="tabCadbens:vl_origem"]').maskMoney({ 
					thousands:'.', decimal:',', symbolStay: false});
				
				$('[id="tabCadbens:vl_doacao"]').maskMoney({ 
					thousands:'.', decimal:',', symbolStay: false});
				
				$('[id="tabCadbens:vl_transferencia"]').maskMoney({
					thousands:'.', decimal:',', symbolStay: false});
				
				$('[id="tabCadbens:vl_justo"]').maskMoney({
					thousands:'.', decimal:',', symbolStay: false});
				
				$('[id="tabCadbens:frete"]').maskMoney({
					thousands:'.', decimal:',', symbolStay: false});
				
				$('[id="tabCadbens:seguro"]').maskMoney({
					thousands:'.', decimal:',', symbolStay: false});
				
				$('[id="tabCadbens:instalacao"]').maskMoney({
					thousands:'.', decimal:',', symbolStay: false});
				
				$('[id="tabCadbens:montagem"]').maskMoney({
					thousands:'.', decimal:',', symbolStay: false});
				
				$('[id="tabCadbens:outros"]').maskMoney({
					thousands:'.', decimal:',', symbolStay: false});
				
				$('[id="tabCadbens:vl_aquisicao"]').maskMoney({
					thousands:'.', decimal:',', symbolStay: false});
				
				$('[id="tabCadbens:vu"]').maskMoney({
					thousands:'.', decimal:',', symbolStay: false});
				
				$('[id="tabCadbens:vl_residual"]').maskMoney({
					thousands:'.', decimal:',', symbolStay: false});
				
				$('[id="valorTotalFrete"]').maskMoney({
					thousands:'.', decimal:',', symbolStay: false});
				
				$('[id="valorBemNF"]').maskMoney({
					thousands:'.', decimal:',', symbolStay: false});
				
				$('[id="valorTotalNF"]').maskMoney({
					thousands:'.', decimal:',', symbolStay: false});
				
				$('[id="valorDoFrete"]').maskMoney({
					thousands:'.', decimal:',', symbolStay: false});
			});
	

function calcularRateioFrete()
{
	vlTotalFrete = ($('[id="valorTotalFrete"]').maskMoney('unmasked')[0] == "") ? "0" : $('[id="valorTotalFrete"]').maskMoney('unmasked')[0];
	vlTotalNF = ($('[id="valorTotalNF"]').maskMoney('unmasked')[0] == "") ? "0" : $('[id="valorTotalNF"]').maskMoney('unmasked')[0];
	vlBemNF = ($('[id="valorBemNF"]').maskMoney('unmasked')[0] == "") ? "0" : $('[id="valorBemNF"]').maskMoney('unmasked')[0];
	 
	porcentagemDoValorBem = vlBemNF/vlTotalNF * 100;
	
	totalFreteBem = vlTotalFrete/100 * porcentagemDoValorBem;
	
	
	$('[id="valorDoFrete"]').val((totalFreteBem).toFixed(2)) ;
	$('[id="tabCadbens:frete"]').val((totalFreteBem).toFixed(2));
	
	
	configurarCamposMoney.somarCampos();
	
}


