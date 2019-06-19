document.getElementById('formulario').addEventListener('submit', pesquisaCidade);
function pesquisaCidade(addEventListener){
	var cidadePesquisa = document.getElementById('pesquisar').value;
	buscaCidade(cidadePesquisa);
	event.preventDefault();
}

function buscaCidade(cidadePesquisa){
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q="+cidadePesquisa+"&units=metric&appid=d5057569c837296f67af81ec9008ae8e&lang=pt", function(data) {
var iconUrl = "http://openweathermap.org/img/w/" + icone + ".png";
var icone = data.weather[0].icon;
var temperatura = Math.floor(data.main.temp);  //Math.floor serve para retornar um valor do tipo inteiro. // 
var humidade = (data.main.humidity);
var descricaoTemp = (data.weather[0].description);
var velocidadeVento = Math.floor(data.wind.speed);

    
  //Pegar o ícone referente à temperatura//
$(".icone").html("<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'+'>");
     
  /*Saída de resultados*/
document.querySelector('.cidade').innerHTML= cidadePesquisa;
document.querySelector('.temperatura').innerHTML = temperatura+"°C";
document.querySelector('.humidade').innerHTML = "Humidade: "+humidade+"%";
document.querySelector('.descricaoTemp').innerHTML = descricaoTemp;           // conversão de m/s para km/h //
document.querySelector('.velocidadeVento').innerHTML ="Velocidade do vento:" + velocidadeVento*3.6+" km/h";

    });
}
//não exibir pesquisas feitas anteriormente (histórico)//
$(document).ready(function() { $('form').attr('autocomplete','off'); });


