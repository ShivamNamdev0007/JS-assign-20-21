

let button = document.getElementById('btn');
let text=document.getElementById('joke');

async function joke() {
       try {
           let config = await fetch("https://icanhazdadjoke.com/", {
               headers: {
                   Accept: "application/json",
               }
           });
   
           if (!config.ok) {
               throw new Error(`HTTP error! Status: ${config.status}`);
           }
   
           let response = await config.json();
           text.innerHTML=response.joke;
       } catch (error) {
           console.error("Failed to fetch a joke:", error.message);
       }
   }
   
   button.addEventListener('click',joke);
