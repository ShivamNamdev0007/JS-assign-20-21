
let btn=document.getElementById('btn');
let container=document.getElementById('container');
let p = document.querySelector('p');





btn.addEventListener('click',function() {
    
    
    let characters = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let Rpass = '';
    for (let i = 0; i < 12; i++) {
        Rpass += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    p.innerText = Rpass;

});
