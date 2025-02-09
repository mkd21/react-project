

import cardStyles from "../../styles/card-style/cardStyling.module.css";

const capitalizeWord = (receivedName) =>{
    return receivedName.charAt(0).toUpperCase() + receivedName.slice(1);
}

function CardRenderer({pokemonName , pokemonImage , typeOfParticularPokemon , heightOfPokemon , weightOfPokemon , detailedSpeed , experienceOfPokemon , attackDetails , abilitiesDetails})
{

    return(
        
        <div id="cardParentContainer" className={cardStyles.cardParentContainer} >
            <div className={cardStyles.eachCardContentsHolder}>

                {/* pokemon image section  */}
                <section className={cardStyles.pokemonImage} >
                    <img src={pokemonImage} alt="" style={{width : "100%"}} />
                </section>

                {/* pokemon name  */}
                <section className={cardStyles.pokemonNameContainer}>
                    <h2 style={{textAlign : "center" , color : "white"}} >{capitalizeWord(pokemonName)}</h2>
                </section>
                    
                {/* pokemon type  */}
                <section className={cardStyles.pokemonTypeHolder} >
                    {
                        typeOfParticularPokemon.map( (iter) => <p key={iter.type.name}>{iter.type.name}</p> )
                    }
                </section>
                

                {/* other details of pokemon  */}
                <div className={cardStyles.detailsOfPokemon} >

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