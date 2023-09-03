// F(x) para mostrar la lista de alumnos.json
async function mostrarLista(alumnos){
    alumnos.forEach(function (alumno){
        const listaPredet = document.createElement('p');
        listaPredet.textContent = `Nombre y Apellido: ${alumno.nombre} ${alumno.apellido} - Estado: ${alumno.estado}`;
        cajaListado.appendChild(listaPredet);
    });
}

//Cargar datos del .JSON utilizando Fetch
fetch('alumnos.json')
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        //llamamos a la F(x) para mostrar la lista con los datos cargados
        mostrarLista(data.alumnos);
    })
    .catch(function (error){
        console.error('Error al cargar el JSON:', error);
    });

//Agregamos la notificación de la librería Toastify
function notificacion(){
    Toastify({
        text: 'Alumno agregado',
        duration: 3000,
        gravity: 'top',
        position: 'center',
        style: {
            background: "linear-gradient(to right, #e00773, #f87605)",
          }
    }).showToast();
}


//Traemos los id del html
const nombreInput = document.getElementById('ingNombre');
const apellidoInput = document.getElementById('ingApellido');
const estadoInput = document.getElementById('ingEstado');
const cajaListado = document.getElementById('cajaListado');
const submitButton = document.getElementById('submitButton');

//Evento para escuchar el click
submitButton.addEventListener('click', function(){
    
    const nombre = nombreInput.value;
    const apellido = apellidoInput.value;
    const estado = estadoInput.value;

    //Creo el listado con los datos ingresados
    const nuevoElemento = document.createElement('p');
    nuevoElemento.textContent = `Nombre y Apellido: ${nombre} ${apellido} - Estado: ${estado}`;

    cajaListado.appendChild(nuevoElemento);
    notificacion();

    //Resetear los campos de input
    nombreInput.value = '';
    apellidoInput.value = '';
    estadoInput.value = '';
});
