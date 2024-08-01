
let button =document.getElementById('Add-notes');
let text = document.getElementById('textarea');
let color = document.getElementById('color');
let notes = document.getElementById('notes-container');
let pera1 = document.getElementById('pera');


 function addnotes(){
    pera1.innerText="";


    if (text.value ==""){
        alert('Please enter the text');
        return;
    };
    let div = document.createElement('div');    // create a div element dinamicly
    let  peragraph= document.createElement("p"); 
    let crossbtn = document.createElement('button');
    
    div.appendChild(peragraph);     // children of newly created div    
    div.appendChild(crossbtn);
    peragraph.innerHTML = text.value;   // children of newly created div   
    // crossbtn.innerText="";   // assign the text to the button
if(color.value == "#000000")
{
    peragraph.style.color="white";
}
    div.style.backgroundColor=color.value; 
    
    notes.appendChild(div);

    crossbtn.addEventListener("click",() => {
        div.style.display="none";
    });

    text.value = "";

 }

 button.addEventListener('click',addnotes);
