// let likes;
// let contadorLikes = 0;
// sumarLikes=()=>{
//     likes=document.getElementById("likes");
//     likes= parseInt(likes.textContent);
//     contadorLikes=likes+1;
//     likes=document.getElementById("likes")
//     likes.textContent=contadorLikes
// }

let contadorLikes = 45;
let haDadoLike = false;

sumarLikes = (button) => {
    likes = document.getElementById("likes");
    likesCount = parseInt(likes.textContent);
    if (!haDadoLike) {
    contadorLikes += 1;
    likes.textContent = contadorLikes;
    button.classList.add("liked");
    } else {
    contadorLikes -= 1;
    likes.textContent = contadorLikes;
    button.classList.remove("liked");
    }
    haDadoLike = !haDadoLike;
};

