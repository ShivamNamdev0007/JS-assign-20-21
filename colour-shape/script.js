

let chngColourBtn = document.getElementById("btn1");
let changeShapeBtn =document.getElementById("btn2");
let rounds = document.getElementById("round");
let shape = document.getElementById("shape");

chngColourBtn.addEventListener("click", () => { 
    let letters = '0123456789ABCDEF';
    let colour = '#';
    for (let i = 0; i < 6; i++) {
        colour += letters[Math.floor(Math.random() * 16)];
        // console.log(colour);
        
    }
   
    rounds.style.backgroundColor = colour;
    
});

changeShapeBtn.addEventListener('click', () => {
    let shapes = [
        "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
        "polygon(50% 0%, 0% 100%, 100% 100%)",
        "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
        "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
        "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
        "polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)",
        "polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%)",
        "polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)",
        
    ];
    
    let randomIndex = Math.floor(Math.random() * shapes.length);
    let selectedShape = shapes[randomIndex];
    shape.style.clipPath = selectedShape;
    let letters = '0123456789ABCDEF';
    let colour = '#';
    for (let i = 0; i < 6; i++) {
        colour += letters[Math.floor(Math.random() * 16)];
    }
    shape.style.backgroundColor = colour;

    });

