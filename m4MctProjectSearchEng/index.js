

let form = document.querySelector('form');
let Container = document.querySelector("#datafromapi")
let navbar = document.getElementById('navbar');
let image= document.getElementById('image');
let language = document.getElementById('language');
// let footer = document.getElementById('footer');
let imagepage2=document.getElementById('imgpage2');


form.addEventListener('submit', function (e) {
    Container.innerHTML = '';
    
    form.style.flexDirection = 'row';
    navbar.innerHTML ='';
    image.style.display="none";
    language.style.display="none";
    // footer.style.display="none" ;
    imagepage2.style.display= 'block';

    e.preventDefault();
    let searchTerm = document.getElementById('Search_data').value; // Get the search term from the input
    let query = searchTerm;
    let getdata = async function () {

        try {
            let response = await fetch('https://api.serpstack.com/search?access_key=2c714f1715ee54e33691d14509fd94dd&type=web&query=' + query);
            let data = await response.json();

            data.organic_results.forEach(element => {

                let newDiv = document.createElement('div');
                newDiv.classList.add('dynamic-results');
                newDiv.innerHTML = `<h2>${element.title}</h2>
                <a href="${element.url}">Visit Site: ${element.url}</a>
                <p>${element.snippet}</p>
                `;
                Container.appendChild(newDiv);
                console.log(element);
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    getdata();
});

