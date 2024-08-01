let keypress=document.getElementById("keypress");
let keyvalue=document.getElementById("keyvalue");
document.addEventListener("keyup", function(e){
   
    keypress.innerText="Key Pressed: "+e.key;
    keyvalue.innerText=e.keyCode;

});