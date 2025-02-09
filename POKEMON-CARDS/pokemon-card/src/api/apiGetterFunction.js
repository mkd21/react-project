
// "https://pokeapi.co/api/v2/pokemon?limit=124"

const fetchData = async() =>{

    // phase 1 
<<<<<<< HEAD
    const receivedRes = await fetch("https://pokeapi.co/api/v2/pokemon?limit=32");
=======
    const receivedRes = await fetch("https://pokeapi.co/api/v2/pokemon");
>>>>>>> 0245bf045e58944e25244ebd965aad9414416a2c
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