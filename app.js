let likes;
let contadorLikes = 0;
sumarLikes=()=>{
    likes=document.getElementById("likes");
    likes= parseInt(likes.textContent);
    contadorLikes=likes+1;
    likes=document.getElementById("likes")
    likes.textContent=contadorLikes
}
