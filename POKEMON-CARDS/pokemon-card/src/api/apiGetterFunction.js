
// "https://pokeapi.co/api/v2/pokemon?limit=124"

const fetchData = async() =>{

    // phase 1 
    const receivedRes = await fetch("https://pokeapi.co/api/v2/pokemon?limit=32");
    const res = await receivedRes.json();


    // phase 2 
    const detailsOfPokemon = res.results;
    const usefulData  = detailsOfPokemon.map( async (iter) => {
        const resp = await fetch(iter.url);
        const result = await resp.json();
        return result;
    });

    const finalData = await Promise.all(usefulData);
    return finalData;
}

export default fetchData;