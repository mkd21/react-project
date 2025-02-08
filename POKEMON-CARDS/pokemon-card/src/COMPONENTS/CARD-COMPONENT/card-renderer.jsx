
function CardRenderer({pokemonName , pokemonImage})
{
    console.log(pokemonName);

    return(
        
        <div id="cardParentContainer" style={{backgroundColor : "greenyellow" , border : "1px solid black" , margin : "3rem"}}>
            <div className="eachCardContentsHolder">
                <section className="pokemonImage">
                    <img src={pokemonImage} alt="" />
                </section>

                <section className="pokemonName" >
                    <h2>{pokemonName}</h2>
                </section>
                    
            </div>
        </div>
        
    );
}

export default CardRenderer;