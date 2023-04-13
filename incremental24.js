const foto = document.getElementById('foto');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const pais = document.getElementById('pais');
const ciudad = document.getElementById('ciudad');

fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
        const usuario = data.results[0];
        foto.src = usuario.picture.large;
        nombre.textContent = `${usuario.name.first} ${usuario.name.last}`;
        email.textContent = usuario.email;
        telefono.textContent = usuario.phone;
        pais.textContent = usuario.location.country;
        ciudad.textContent = usuario.location.city;
    })
    .catch(error => console.error(error));

// const usersList = document.querySelector('.usersList');

// fetch('https://randomuser.me/api/?results=1')
//     .then(response => response.json())
//     .then(data => {
//     data.results.forEach(user => {
//         const userElement = document.createElement('div');
//         userElement.classList.add('card', 'bg-dark', 'border', 'border-success', 'rounded','ajuste', 'm-2', 'text-cente','tamaño');
//         userElement.innerHTML = `
//         <div class="container align-items-center p-3">
//             <div class="row">
//                 <div class="ratio ratio-1x1">
//                     <img src="${user.picture.large}" class="img-fluid rounded" alt="${user.name.first} ${user.name.last}">
//                 </div>
//             </div>
//             <div class="col">
//                 <div class="row text-center">
//                     <h2 class="mb-0">${user.name.first} ${user.name.last}</h2>
//                     <p class="mb-0">${user.dob.age}</p>
//                     <p class="mb-0">${user.location.city}, ${user.location.country}</p>

//                 </div>
//             </div>
//         </div>
//         `;
//         usersList.appendChild(userElement);
//     });
//     })
//     .catch(error => console.log(error));