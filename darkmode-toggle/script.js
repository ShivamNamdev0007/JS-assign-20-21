let button=document.getElementById('button');
let body =document.querySelector('body');



button.addEventListener("click",()=>{

    body.classList.toggle("lightmode");
    body.classList.toggle("darkmode");
    console.log("clicked");


});
