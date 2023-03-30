const publicacionForm = document.getElementById('publicacion-form');
const publicacionesContainer = document.getElementById('publicaciones-container');

// Agregar evento submit al formulario
publicacionForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevenir que el formulario se envíe automáticamente
    
    const comentario = document.getElementById('comment').value; // Obtener el comentario ingresado
    
    // Crear un nuevo elemento de publicación y agregarlo al contenedor
    const nuevaPublicacion = document.createElement('div');
    nuevaPublicacion.classList.add('card', 'mt-4', 'bg-dark', 'text-white', 'w-100');
    if (publicacionesContainer.firstChild) {
        nuevaPublicacion.classList.add('mt-0');
    }
    nuevaPublicacion.innerHTML = `
        <div class="card-body">
            ${comentario}
            <div class="d-flex justify-content-end align-items-center mt-3">
                <button type="button" class="btn badge fa fa-heart me-2"><span> 0</span></button>
                
            </div>
        </div>
    `;
    publicacionesContainer.appendChild(nuevaPublicacion);
    
    // Limpiar el campo de texto del formulario
    document.getElementById('comment').value = '';
    
    // Agregar evento click al botón de "Me gusta"
    const btnMeGusta = nuevaPublicacion.querySelector('.btn');
    const contadorMeGusta = nuevaPublicacion.querySelector('.badge');
    let numMeGusta = 0;
    let haDadoMeGusta = false;
    btnMeGusta.addEventListener('click', () => {
        if (!haDadoMeGusta) {
            numMeGusta++;
            contadorMeGusta.innerText = numMeGusta;
            btnMeGusta.classList.add('active');
            haDadoMeGusta = true;
        } else {
            numMeGusta--;
            contadorMeGusta.innerText = numMeGusta;
            btnMeGusta.classList.remove('active');
            haDadoMeGusta = false;
        }
    });
});





const usersList = document.querySelector('.usersList');

fetch('https://randomuser.me/api/?results=10')
    .then(response => response.json())
    .then(data => {
    data.results.forEach(user => {
        const userElement = document.createElement('div');
        userElement.classList.add('container', 'bg-dark', 'border', 'border-success', 'rounded', 'mb-1', 'limited-width','mt-2');
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
        usersList.appendChild(userElement);
    });
    })
    .catch(error => console.log(error));