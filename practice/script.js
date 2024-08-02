
let button =document.getElementById('Add-notes');
let text = document.getElementById('textarea');
let color = document.getElementById('color');
let notes = document.getElementById('notes-container');
let pera1 = document.getElementById('pera');


 function addnotes(){
    pera1.innerText="";


    if (text.value ==" "){
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

//  **********************

let showemoji = document.getElementById('showemoji');
let search=document.getElementById("search");
let buttongroup = document.getElementById("buttongroup");
function displayemoji(searcheddata) {
    showemoji.innerHTML = "";
    let filteredlist=emojiList.filter(function(emoji)
    {
        if (emoji.description.indexOf(searcheddata)!=-1) {
            return true;
    };
    if (emoji.category.indexOf(searcheddata)!=-1) {
        return true;
};
    

});

    filteredlist.forEach(function(emoji) {
        // console.log(emoji.emoji);
        let div= document.createElement('div');
        let p= document.createElement('p');

        div.appendChild(p);

        p.innerText = emoji.emoji;

        showemoji.appendChild(div);
        // console.log(filteredlist.length);
        p.addEventListener('click',function(e) {
            navigator.clipboard.writeText(e.target.innerHTML);
            // console.log(e.target.innerHTML);
            

        
        });
    });
}
search.addEventListener('keyup',function(e) {
    let values=search.value;
    displayemoji(values);
    // console.log(value);
});

window.addEventListener('load',displayemoji(""));
buttongroup.addEventListener('click',function(e) {
    let btnval=e.target.value;
    displayemoji(btnval);  // call the function with the current search value
    console.log(e.target.value);

});





