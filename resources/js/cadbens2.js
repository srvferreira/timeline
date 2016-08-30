/**
 * 
 */

var valorAquisicao = 0;

function replaceAll(string, token, newtoken) {
	while (string.indexOf(token) != -1) {
 		string = string.replace(token, newtoken);
	}
	
	return string;
}

function mascara(o,f){   
    v_obj=o;   
    v_fun=f;   
    setTimeout("execmascara()",1);   
}   
  
function execmascara(){  
    v_obj.value=v_fun(v_obj.value);
    
    
    
}  

function moeda(v){   
    v=v.replace(/\D/g,""); // permite digitar apenas numero   
    v=v.replace(/(\d{1})(\d{15})$/,"$1.$2"); // coloca ponto antes dos ultimos digitos   
    v=v.replace(/(\d{1})(\d{11})$/,"$1.$2"); // coloca ponto antes dos ultimos 11 digitos   
    v=v.replace(/(\d{1})(\d{8})$/,"$1.$2"); // coloca ponto antes dos ultimos 8 digitos   
    v=v.replace(/(\d{1})(\d{5})$/,"$1.$2"); // coloca ponto antes dos ultimos 5 digitos   
    v=v.replace(/(\d{1})(\d{1,2})$/,"$1,$2"); // coloca virgula antes dos ultimos 2 digitos   
    return v;   
}  


function gerarTaxaDep()
{
	
	var valor = document.getElementById('vu').value.replace(",", ".");
	
	var aux = valor * 12;
	var taxa;
	if(aux > 0)
	{
		
		taxa = 100 / (aux / 12);
	}
	else
	{
		taxa = 0;
	}
	
	
	document.getElementById('txDeprec').value = taxa;

}

function somar(tipoSoma)
{
	document.getElementById("vl_origem").value = "0";
}

function gerenciarValorBem(campo)
{
	
	
	switch(campo)
	{
		case "fatura":
			
			document.getElementById("tabCadbens:vl_origem").value = 0;
			document.getElementById("tabCadbens:vl_doacao").value = 0;
			document.getElementById("tabCadbens:vl_transferencia").value = 0;
			document.getElementById("tabCadbens:vl_justo").value = 0;
			break;
			
		case "vl_origem":
			
			
			document.getElementById("tabCadbens:fatura").value = 0;
			document.getElementById("tabCadbens:vl_doacao").value = 0;
			document.getElementById("tabCadbens:vl_transferencia").value = 0;
			document.getElementById("tabCadbens:vl_justo").value = 0;
			break;
			
		case "vl_doacao":
			
			
			document.getElementById("tabCadbens:vl_origem").value = 0;
			document.getElementById("tabCadbens:fatura").value = 0;
			document.getElementById("tabCadbens:vl_transferencia").value = 0;
			document.getElementById("tabCadbens:vl_justo").value = 0;
			break;
			
		case "vl_transferencia":
			
			
			document.getElementById("tabCadbens:vl_origem").value = 0;
			document.getElementById("tabCadbens:vl_doacao").value = 0;
			document.getElementById("tabCadbens:fatura").value = 0;
			document.getElementById("tabCadbens:vl_justo").value = 0;
			break;
			
		case "vl_justo":
			
			
			document.getElementById("tabCadbens:vl_origem").value = 0;
			document.getElementById("tabCadbens:vl_doacao").value = 0;
			document.getElementById("tabCadbens:vl_transferencia").value = 0;
			document.getElementById("tabCadbens:fatura").value = 0;
			break;
	}
}




function teclas(event){ 
if(((event.keyCode < 96) || (event.keyCode > 105)) && ((event.keyCode < 48) || (event.keyCode > 57)) ) { 
campo.value = campo.value.replace(String.fromCharCode(event.keyCode).toLowerCase(),""); 
} 
} 
function numMoeda(event,campo){ 
teclas(campo); 
str = campo.value; 
while(str.search(",") != -1) 
str = str.replace(",",""); 
i = 0; 
while(i< str.length){ 
if(str.substr(i,1) == ".") 
str = str.replace(".",""); 
i++; 
} 
part1 = str.substr(0,str.length - 2); 
while(part1.search(" ") != -1) 
part1 = part1.replace(" ",""); 
part2 = str.substr(str.length - 2,2); 
res = ""; 
i = part1.length; 
sob = i % 3; 
if((sob != 0) && (i > 2)) 
res = part1.substr(0,sob) + "."; 
else 
res = part1.substr(0,sob); 
j = 1; 
part1 = part1.substr(sob); 
i = 0; 
while(i < part1.length){ 
if(j == 3){ 
if(i + 1 == part1.length) 
res = res + part1.substr(i-2,3); 
else res = res + part1.substr(i-2,3) + "."; 
} 
i++; 
j = j<3?j+1:1; 
} 
campo.value = res + "," + part2; 
} 

function soma() {


vlFatura = document.getElementById("form_cadbens:tabCadbens:fatura").value;



}