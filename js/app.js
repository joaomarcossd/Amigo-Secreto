let nome = '';
let listaDeAmigos = [];
let listaSorteio = [];
let nomeDoAmigo = document.getElementById('nome-amigo');

function reiniciar() {
  nomeDoAmigo.value = '';
  listaDeAmigos = [];
  listaSorteio = [];
  document.getElementById('lista-sorteio').textContent = listaSorteio;
  document.getElementById('lista-amigos').textContent = listaDeAmigos;
  numeros1 = [];
  numeros2 = [];
}


function listar(nome) {
   return ' ' + nome.replace(/(^|\s)(\w)/g, (letra) => letra.toUpperCase());
}

function adicionar() {

  if (nomeDoAmigo.value == '') {
   return alert('Nenhum nome foi inserido');
  } if (listaDeAmigos.includes(listar(nomeDoAmigo.value))) {
    return alert('O nome inserido já esta na lista');
  }

  listaDeAmigos.push(listar(nomeDoAmigo.value));
  document.getElementById('lista-amigos').textContent = listaDeAmigos;
  nomeDoAmigo.value = '';
}

let numeros1 = [];
let numeros2 = [];

function aleatorizar(array) {

  let numero1 = array[Math.floor(Math.random() * array.length)]
  console.log('Esse foi o primeiro 1 ' + numero1)

   while (numeros1.includes(numero1)) {
    numero1 = array[Math.floor(Math.random() * array.length)]
  }
  numeros1.push(numero1);

  let numero2 = array[Math.floor(Math.random() * array.length)]
  console.log('Esse foi o primeiro 2' + numero2)
      
  while (numeros2.includes(numero2) || numero2 == numero1) {
    numero2 = array[Math.floor(Math.random() * array.length)]
  }
  numeros2.push(numero2);

  console.log(numero1)
  console.log(numero2)

  return numero1 + ' ➙ ' + numero2;
}

function sortear() {
  if (listaDeAmigos.length % 2 === 0) {
    if (listaSorteio.length > 0) {
  listaSorteio = [];
  numeros1 = [];
  numeros2 = [];
  } for (let i = 0; i < listaDeAmigos.length; i++) {
   listaSorteio.push(aleatorizar(listaDeAmigos));
  } 
  document.getElementById('lista-sorteio').style.whiteSpace = 'pre-line'
  document.getElementById('lista-sorteio').textContent = listaSorteio.join('\n')
  } else {
    return alert('O numero de amigos é impar')
  }
}


