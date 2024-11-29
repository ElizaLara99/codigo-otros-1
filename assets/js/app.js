const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('#name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

//AL HABER UN AWAIT DEBEMOS DECLARAR A LA FUNCION COMO ASINCRONA
async function displayUser (username) {
  $n.textContent = 'cargando...';
  //AL HABER UN FETCH LA RESPUESTA DEBE SER EN JSON
  try {
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json();
  if (!response.ok){
    throw new Error(data.message);
  }
  //SE DEBEN INVERTIR LAS COMILLAS SIMPLES 
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
} catch (err){
  handleError(err);
}
}
function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  //SE TENIA QUE AGREGAR $ TAL COMO SE DECLARA EN LA LINEA 18 Y CREO FALTANA EL ;
  $n.textContent = `Algo salió mal: ${err}`;
}

displayUser('stolinski').catch(handleError);