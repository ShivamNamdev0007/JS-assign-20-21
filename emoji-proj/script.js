let emoje_container = document.getElementById("emoje_container");
let search=document.getElementById("search");


function displayemoji(searchedValue){
    emoje_container.innerHTML = "";
    let filteredEmojies = emojiList.filter(function(emojee){
        if(emojee.description.indexOf(searchedValue) != -1){
            return true;
        }
    })

   

    filteredEmojies.forEach(function(emoji){
        // console.log(emoji);
        let row = document.createElement("tr");
        let col1 = document.createElement("td");
        let col2 = document.createElement("td");
        let col3 = document.createElement("td");

        row.appendChild(col1);  
        row.appendChild(col2);
        row.appendChild(col3);

        col1.innerText = emoji.emoji;
        col2.innerText = emoji.description;
        col3.innerText = emoji.category;

        emoje_container.appendChild(row);

    }
);
}


window.addEventListener('load', displayemoji(""));
search.addEventListener("keyup", function() {
    let values=search.value;
    displayemoji(values);  // call the function with the current search value
    // console.log(values);
}) ;









