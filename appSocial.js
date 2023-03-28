// let likes;
// let contadorLikes = 0;
// sumarLikes=()=>{
//     likes=document.getElementById("likes");
//     likes= parseInt(likes.textContent);
//     contadorLikes=likes+1;
//     likes=document.getElementById("likes")
//     likes.textContent=contadorLikes
// }

let contadorLikes;
let haDadoLike = false;

let likes = document.getElementById("likes");


sumarLikes = () => {
    contadorLikes = parseInt(likes.textContent);
    
    if (!haDadoLike) {
        contadorLikes += 1;
        likes.textContent = contadorLikes;
        likes.classList.add("liked");
    } else {
        contadorLikes -= 1;
        likes.textContent = contadorLikes;
        likes.classList.remove("liked");
    }
    haDadoLike = !haDadoLike;
};

likes.addEventListener("click", sumarLikes);


//BUSCAR TARGET EN DOCUMENTACIÓN