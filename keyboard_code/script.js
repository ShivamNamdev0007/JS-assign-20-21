let keypress=document.getElementById("keypress");
let keyvalue=document.getElementById("keyvalue");
document.addEventListener("keyup", function(e){
    let key = e.key;   
    keypress.innerText="Key Pressed: "+key;
   
    keyvalue.innerText=e.keyCode;
   

});