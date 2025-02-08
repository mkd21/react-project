

import cardStyles from "../../styles/card-style/cardStyling.module.css";

function CardRenderer({pokemonName , pokemonImage , typeOfParticularPokemon , heightOfPokemon , weightOfPokemon , detailedSpeed , experienceOfPokemon , attackDetails , abilitiesDetails})
{

    return(
        
        <div id="cardParentContainer" className={cardStyles.cardParentContainer} >
            <div className="eachCardContentsHolder">

                <section className="pokemonImage" style={{backgroundColor : "violet" , width : "10rem" , margin : "auto"}} >
                    <img src={pokemonImage} alt="" style={{width : "100%"}} />
                </section>

                <section className={cardStyles.pokemonNameContainer}>
                    <h2 style={{textAlign : "center"}} >{pokemonName}</h2>
                </section>
                    
                <section >
                    {
                        typeOfParticularPokemon.map( (iter) => <p key={iter.type.name}>{iter.type.name}</p> )
                    }
                </section>
                
                <div className="detailsOfPokemon">

                    <section> Height : {heightOfPokemon} </section>
                    <section> Weight : {weightOfPokemon} </section>
                    <section> {detailedSpeed.stat.name} : {detailedSpeed.base_stat} </section>
                    <section> Experience : {experienceOfPokemon} </section>
                    <section> {attackDetails.stat.name} : {attackDetails.base_stat} </section>
                    <section> Ability : {abilitiesDetails.ability.name} </section>
                    
                </div>
                

            </div>
        </div>
        
    );
}

export default CardRenderer;