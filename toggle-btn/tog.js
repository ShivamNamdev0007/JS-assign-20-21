let slider=document.getElementById('main');
let button = document.getElementById('button'); 

let body =document.querySelector('body');




slider.addEventListener("click",() => {
    button.classList.toggle("blank");
    button.classList.toggle("blank1");

    body.classList.toggle("lightmode");
    body.classList.toggle("darkmode");
});

// let slider = document.getElementById('main');
// let button = document.getElementById('xyz'); 

// slider.addEventListener("click", () => {
//     button.classList.toggle('blank1');
//     button.classList.toggle('blank');
// });