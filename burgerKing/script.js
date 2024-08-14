
let button = document.getElementById('btn');
let inputArray = document.querySelectorAll('input');
let pera=document.getElementById('h1');
let data1 =document.getElementById('selectedorder');
let img = document.querySelector('img');
let button2 = document.getElementById('btn2');
button2.style.display = 'none';

button.addEventListener('click', (event) => {
       let order = [];
    inputArray.forEach(element=>{
       
       if(element.checked) {
        order.push(element.value);
        element.checked = false;
       
    
       }      
    })
    order.forEach(element=>{
        pera.innerHTML ="Selected Item's";

        
        if(element === "burger") {
            let img =document.createElement("img");
            img.src = "./burger.jpg";
            data1.appendChild(img);

    
        }
         else if(element === "fries") {
            
            let img =document.createElement("img");
            img.src = "./fries.jpg";
            data1.appendChild(img);
            
        }
        else if(element === "colddrink") {
            
            let img =document.createElement("img");
            img.src = "./colddrink.webp";
            data1.appendChild(img);
        }
       
    })
//  console.log(order);
if(order.length > 0) {
button2.style.display = "block";
 button2.style.margin= "auto";
button2.innerHTML = "Order Now";
}
}) ; 

button2.addEventListener('click', () => {
    alert("Your order has been placed!");
    pera.innerHTML ="Order Id: " + 105;
    data1.innerHTML = "";
    inputArray.forEach(element=>{
        element.checked = false;
    })
    button2.style.display = "none";
    img.src = "";
});






