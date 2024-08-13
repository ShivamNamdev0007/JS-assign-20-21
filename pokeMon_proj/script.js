async function fatchPokemon(i){
    let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    let result =await data.json();
    return result;
}


async function fatchManyPokemons(){
    for(let i=1; i<=150; i++)
    {
        let pokemon = await fatchPokemon(i) ;   
        console.log(pokemon);
    }
}

fatchManyPokemons();