// Seus scripts aqui
var NOME = document.getElementById('string');
var DATA = document.getElementById('date');
var IDADE = document.getElementById('idade');
var SEXOM = document.getElementById('masc');
var SEXOF = document.getElementById('fem');

var checkbox = document.querySelector('#checkbox-painel-Seg');
var TEXTO = document.querySelector('.texto');
const text = document.querySelector("#text");

var bot = document.querySelector('#bot');
var formulario = document.querySelector('.formulario');

checkbox.addEventListener('click', function(){
  if( TEXTO.style.display === 'block'){
    TEXTO.style.display = 'none';
  }else{
    TEXTO.style.display = 'block';
  }
});

bot.addEventListener('click', function(){
  if( formulario.style.display === 'block'){
    formulario.style.display = 'none';
  }else{
    formulario.style.display = 'block';
  }
});

text.addEventListener("keypress", function(e){
 const max = 10;
 const inputLength = text.value.length;
  if(inputLength >= max){
    e.preventDefault();
    window.console.log("máximo permitido é 10 caracteres");
  }
});

