  async function criptoApi() {
    try{
        let response = await fetch("https://api.coingecko.com/api/v3/search/trending");
        let data = await response.json();
        let coins = data.coins;
        console.log(coins);
        coins.forEach((element)=>{

            console.log(element.item.name);
            console.log(element.item.symbol);
            console.log(element.item.small);
            
           let price =(element.item.data.
                price_change_percentage_24h
                .inr);
                console.log(price.toFixed(4));
        });


    }
    catch(err){
        console.log(err);
    }
    


} 
criptoApi();