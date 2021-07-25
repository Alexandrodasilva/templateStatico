// Seus scripts aqui
var NOME = document.getElementById('string');
var DATA = document.getElementById('date');
var IDADE = document.getElementById('idade');
var SEXO = document.getElementsByName('opt1');


var DONOME = document.getElementById('dostring');
var DOIDADE = document.getElementById('doidade');
var DODATA = document.getElementById('dodate');
var DOSEXO = document.getElementById('dosexo');

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

var genero = ' ';
if(SEXO[0]){
    genero = 'Masculino';
    window.console.log("é masc");
}else if(SEXO[1]){
    genero = 'Feminino';
    window.console.log("é femin");
}

function listar(){
  var captarNome = " ";
  var captarIdade = " ";
  var captarData = " ";
  var captarSexo = ' ';
  
  captarNome  = NOME.value;
  DONOME.innerHTML = captarNome+", ";

  captarIdade  = IDADE.value;
  DOIDADE.innerHTML = captarIdade+", ";

  captarData  = DATA.value;
  DODATA.innerHTML = captarData+", ";

 
  captarSexo = genero.value;
  DOSEXO.innerHTML = genero;
}