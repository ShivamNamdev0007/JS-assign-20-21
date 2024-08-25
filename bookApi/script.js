

// ****************
const count = 350,
    defaults = {
        origin: { y: 0.7
        
         },
    };

function fire(particleRatio, opts) {
    confetti(
        Object.assign({}, defaults, opts, {
            particleCount: Math.floor(count * particleRatio),
        })
    );
}
window.addEventListener('load', () => {
    fire(0.25, {
        spread: 26,
        startVelocity: 55,
    });

    fire(0.2, {
        spread: 60,
    });

    fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
    });

    fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2,
    });

    fire(0.1, {
        spread: 120,
        startVelocity: 45,
    });
    
});
// **********************************
async function fetcheddata() {
    
    let data = await fetch("https://books-backend.p.goit.global/books/top-books");
    let jsonData = await data.json();
    let contai= document.getElementById("books");
    let books = jsonData.map(book => book.books);
    
    books.forEach(book => {
        book.forEach(book => {
            let maindiv = document.createElement("div");
            
            let book_img = document.createElement("img");
            let book_title = document.createElement("h6");
            book_title.classList = "book-title";
            let book_author = document.createElement("span");
            book_author.classList = "book-author";
            book_img.src = book.book_image;
            book_title.textContent = ("Title : " + book.title);
            book_author.textContent = ("Author : " + book.author);
            maindiv.appendChild(book_img);
            maindiv.appendChild(book_title);
            maindiv.appendChild(book_author);
            contai.appendChild(maindiv);
        });

    });


}


fetcheddata();