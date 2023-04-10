// --------------------------------------------------------------------------empieza publicaciones--------------------------------------------------
// Obtener los elementos del DOM necesarios
const publicacionForm = document.getElementById('publicacion-form');
const publicacionesContainer = document.getElementById('publicaciones-container');

// Agregar evento submit al formulario
publicacionForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevenir que la pagina se recargue
    
    // Obtener el comentario ingresado
    const comentario = document.getElementById('comment').value; 
    
    // Crear un nuevo elemento de publicación y agregarlo al contenedor
    const nuevaPublicacion = document.createElement('div');
    nuevaPublicacion.classList.add('card', 'mt-4', 'bg-dark', 'text-white', 'w-100');
    
    // Ajustar las clases del nuevo elemento según su posición en el contenedor
    if (publicacionesContainer.firstChild) {
        nuevaPublicacion.classList.add('mt-0');
    }
    
    // Agregar el HTML correspondiente al nuevo elemento de publicación
    nuevaPublicacion.innerHTML = `
        <div class="card-body mb-3">
            ${comentario}
            <div class="d-flex justify-content-end align-items-center mt-3 me-3">
                <button type="button" class="btn badge position-relative fa fa-heart">
                    <span class="position-absolute top-0 start-100 translate-middle badge contador rounded-pill bg-secondary ">
                        0
                    </span>
                </button>
            </div>
        </div>
    `;
    
    // Agregar el nuevo elemento de publicación al contenedor
    publicacionesContainer.appendChild(nuevaPublicacion);
    
    // Limpiar el campo de texto del formulario
    document.getElementById('comment').value = '';
    
    // Agregar evento click al botón de "Me gusta"
    const btnMeGusta = nuevaPublicacion.querySelector('.btn');
    const contadorMeGusta = nuevaPublicacion.querySelector('.contador');
    let numMeGusta = 0;
    let haDadoMeGusta = false;
    btnMeGusta.addEventListener('click', () => {
        if (!haDadoMeGusta) {
            // Aumentar el contador de "Me gusta"
            numMeGusta++;
            contadorMeGusta.innerText = numMeGusta;
            btnMeGusta.classList.add('active');
            haDadoMeGusta = true;
        } else {
            // Disminuir el contador de "Me gusta"
            numMeGusta--;
            contadorMeGusta.innerText = numMeGusta;
            btnMeGusta.classList.remove('active');
            haDadoMeGusta = false;
        }
    });
});

// -----------------------------------------------------------------Empieza teclers por el mundo-----------------------------------------------------
const usersList = document.querySelector('.usersList');

// Realizar una petición fetch a la API de randomuser.me para obtener 10 usuarios aleatorios
fetch('https://randomuser.me/api/?results=10')
    .then(response => response.json())
    .then(data => {
        // Iterar sobre la lista de usuarios obtenida y crear un elemento HTML para cada uno
        data.results.forEach(user => {
            // Crear un nuevo elemento HTML para el usuario
            const userElement = document.createElement('div');
            // Agregar clases CSS al elemento para darle estilo
            userElement.classList.add('container', 'bg-dark', 'border', 'border-success', 'rounded', 'mb-1', 'limited-width','mt-2');
            // Agregar contenido HTML al elemento usando la información del usuario obtenida de la API
            userElement.innerHTML = `
                <div class="row align-items-center">
                    <div class="col-lg-4">
                        <div class="ratio ratio-1x1">
                            <img src="${user.picture.large}" class="img-fluid rounded" alt="${user.name.first} ${user.name.last}">
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="row text-center">
                            <div class="col-12">
                                <p class="mb-0">${user.name.first} ${user.name.last}</p>
                            </div>
                            <div class="col-12">
                                <p class="mb-0">${user.location.city}, ${user.location.country}</p>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-6 btn-group p-1 mb-1">
                                <button type="submit" class="btn btn-outline-success w-100 fuente">Aceptar</button>
                                <button type="submit" class="btn btn-outline-success w-100 fuente">Ignorar</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            // Agregar el elemento HTML del usuario creado a la lista de usuarios
            usersList.appendChild(userElement);
        });
    })
    .catch(error => console.log(error));
// -----------------------------------------------------------------Empieza busqueda de publicaciones por nombre de us-----------------------------------------------------
