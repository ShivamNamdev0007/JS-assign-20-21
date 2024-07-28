const darkmode =document.getElementById('night');


darkmode.addEventListener('click', () => {
    
    document.body.style.backgroundImage="url('https://th.bing.com/th/id/OIP.CdIByKdo3t5Z9OLw3Lb59wHaE7?w=700&h=466&rs=1&pid=ImgDetMain')";
    document.body.style.backgroundSize="cover";
    document.querySelector('h1').style.color ="white";
    document.querySelector('h1').innerText ="Switch to Light Mode Click Right Button";
    darkmode.style.backgroundColor="goldenrod";
    lightmode.style.backgroundColor="White";
});
const lightmode =document.getElementById('morning');
lightmode.addEventListener('click', () => {
    document.body.style.backgroundImage="url('https://th.bing.com/th/id/R.59c7ba4583ccbd3112446a289c73935a?rik=vjvyYxvyaQLp3A&riu=http%3a%2f%2fwww.wallpaperama.com%2fpost-images%2fwallpapers%2flandscape%2fgood-morning.jpg&ehk=FQSenG7wVAM%2fwVlEJSIkhfkak1lVZTJCql8GOt4irvs%3d&risl=&pid=ImgRaw&r=0')";
    document.body.style.backgroundSize="cover";    
    document.querySelector('h1','h2').style.color ="black";
    document.querySelector('h1').innerText="Switch to Dark  Mode Click Left Button";
    darkmode.style.backgroundColor="White";
    lightmode.style.backgroundColor="goldenrod";

});