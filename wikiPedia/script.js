let searchButton =document.getElementById('searchButton');
searchButton.addEventListener('click', function() {
    let container = document.querySelector(".container");
    let img=document.getElementById("img11");
    img.style.display="none";
    container.style.flexDirection="row";
    const searchQuery = document.getElementById('searchInput').value;
    
    searchWikipedia(searchQuery);
});

async function searchWikipedia(query) {
    const randomNumber = Math.floor(Math.random() * 90) + 10;
    const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&utf8=&format=json&origin=*&srlimit=${randomNumber}&srsearch=${query}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayResults(data.query.search);
        console.log(data); 
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayResults(results) {
    const resultsDiv = document.getElementById('results');
    const count =document.querySelector("#count");
    count.innerText=results.length;
    resultsDiv.innerHTML = ''; // Clear previous results

    results.forEach(result => {
        let dynamicResults =document.createElement('div');
        const title = result.title;
        const snippet = result.snippet;
        const url = `https://en.wikipedia.org/wiki/${encodeURIComponent(title)}`;

        dynamicResults.innerHTML += `
            <div>
                <h3>${title}</h3>
                <p>${snippet}</p>
                <a href="${url}" target="_blank">Read More...</a>
                
            </div>
        `;
        resultsDiv.appendChild(dynamicResults);
    });
}



// *********************
const startButton = document.getElementById('mic');
const textOutput = document.getElementById('searchInput');

if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

  recognition.onresult = (event) => {
    textOutput.value += event.results[0][0].transcript + ' ';
  };

  startButton.addEventListener('click', () => {
    
    recognition.start();
    startButton.disabled = true;
    textOutput.value='';
  });

  recognition.onend = () => {
    startButton.disabled = false;
  };
} else {
  textOutput.value = "Speech recognition not supported.";
}