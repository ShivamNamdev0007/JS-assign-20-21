
let data = [];
let fname = document.querySelector(".fname");
let lname = document.querySelector(".lname");
let country = document.querySelector(".country");
let score = document.querySelector(".score");
let btn = document.querySelector("button");
let section = document.getElementById("section2");





btn.addEventListener("click", function (e) {
    e.preventDefault();
    if (fname.value === "" || lname.value === "" || country.value === "" || score.value === "") {
        alert("Please fill all fields");
        return;
    }
    else {
        let playerobj = {
            firstName: fname.value,
            lastName: lname.value,
            country: country.value,
            score: score.value
        };
        data.push(playerobj);
        fname.value = "";
        lname.value = "";
        country.value = "";
        score.value = "";
        updateDataOnUi();

    }




})
function updateDataOnUi() {
    data.sort(function(a, b) {
        return b.score - a.score;
    })
    let showdata='';
    // let date = new Date();
    data.forEach(function(item){
        showdata += `
        <div class = "button_group">
        <span>${item.firstName}</span>
        <span>${item.lastName}</span>
        <span>${item.country}</span>
        <span>${item.score}</span>
        <button id= "crossbutton">x</button>
        <button id= "dec">-5</button>
        <button id= "inc">+5</button>
        </div>`;
    });
    section.innerHTML = showdata;
    activatebtn();


};
 let activatebtn =()=>{
document.querySelectorAll(".button_group").forEach((ele,index)=>
{
    ele.addEventListener("click", (e)=>
    {
        if(e.target.id === "crossbutton"){
            data.splice(index,1); 
            updateDataOnUi();

        }
        
        else if(e.target.id === "dec")
        { if (data[index].score>0){
            data[index].score -=5;
            console.log(data[index].score);
            updateDataOnUi();
        }

        }
        else if(e.target.id === "inc")
        {
             decriment= parseInt(data[index].score);
             decriment+=5;
             data[index].score=decriment;
            updateDataOnUi();
        
        }
        
    

    });
});

         
    

 }