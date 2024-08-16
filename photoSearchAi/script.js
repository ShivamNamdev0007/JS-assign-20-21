

const accessKey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";
const form = document.querySelector('form');
const searchInput=document.querySelector('input');
const searchResults = document.getElementById('images-container');
const submitButton = document.getElementById("showMore");
let page=1;
let inputData="";

async function searchImages(){
  let inputData = searchInput.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
  const response = await fetch(url);
  const data = await response.json();
  let results=data.results;
  if (page === 1)
  {
    searchResults.innerHTML = "";  // clear previous search results if page is 1
  }
    results.map((result) => {
    const div = document.createElement('div');   // create container for single photo or heading
    div.classList.add('images');                // take class for that image div
    const img = document.createElement('img');  //create img to contain single image
    const h1=document.createElement('h1');      // create heading for that image
    h1.innerText=result.user.name;    //  add title
    img.src = result.urls.small;        // add url to image tag
    div.appendChild(img);
    div.appendChild(h1);
    searchResults.appendChild(div);
  });
  page++;
  if(page>1){
    showMore.style.display="block";
  }


}

form.addEventListener('submit',(event)=>{

  event.preventDefault();
  page=1;
  searchImages();
  
});
showMore.addEventListener('click',()=>{
  searchImages();  // call function to fetch more images when show more button is clicked
 
});


