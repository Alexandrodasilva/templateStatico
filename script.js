// Seus scripts aqui

var NOME = document.getElementById('string');
var DATA = document.getElementById('date');
var IDADE = document.getElementById('idade');
var SEXOM = document.getElementById('masc');
var SEXOF = document.getElementById('fem');

var checkbox = document.querySelector('#checkbox-painel-Seg');
var TEXTO = document.querySelector('.texto');

checkbox.addEventListener('click', function(){
   
  if( TEXTO.style.display === 'block'){
    TEXTO.style.display = 'none';
  }else{
    TEXTO.style.display = 'block';
  }

});








function verificar(){
}
function datetime() {
    var title = document.getElementById('title');
    var now = new Date();
    
    title.innerHTML = title.innerHTML + ' (' + now.toLocaleTimeString() + ')';
  }
  
  
  datetime();