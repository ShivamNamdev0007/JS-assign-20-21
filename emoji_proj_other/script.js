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




