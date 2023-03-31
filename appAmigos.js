const usersList = document.querySelector('.usersList');

fetch('https://randomuser.me/api/?results=20')
    .then(response => response.json())
    .then(data => {
    data.results.forEach(user => {
        const userElement = document.createElement('div');
        userElement.classList.add('card', 'bg-dark', 'border', 'border-success', 'rounded','ajuste', 'm-2', 'text-cente','tamaño');
        userElement.innerHTML = `
        <div class="container align-items-center p-3">
            <div class="row">
                <div class="ratio ratio-1x1">
                    <img src="${user.picture.large}" class="img-fluid rounded" alt="${user.name.first} ${user.name.last}">
                </div>
            </div>
            <div class="col">
                <div class="row text-center">
                    <p class="mb-0">${user.name.first} ${user.name.last}</p>
                    <p class="mb-0">${user.location.city}, ${user.location.country}</p>
                </div>
                <div class="row mt-2">
                    <div class="col btn p-1">
                        <a href="#" class="btn btn-danger">Amigo</a>
                    </div>
                </div>
            </div>
        </div>
        `;
        usersList.appendChild(userElement);
    });
    })
    .catch(error => console.log(error));
