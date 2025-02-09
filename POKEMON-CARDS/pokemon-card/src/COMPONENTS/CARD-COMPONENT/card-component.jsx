

import CardRenderer from "./card-renderer.jsx";

import cardStyles from "../../styles/card-style/cardStyling.module.css";


const CardComponent = ({pokemonData}) =>{

return (

    <div id="parentContainer" className={cardStyles.parentContainer} >

        {
            pokemonData.map( (iter) => <CardRenderer key={iter.id}  

            pokemonName = {iter.name} 
            pokemonImage = {iter.sprites.other.dream_world.front_default} 
            typeOfParticularPokemon = {iter.types}
            weightOfPokemon = {iter.weight}
            heightOfPokemon = {iter.height}
            detailedSpeed = {iter.stats[5]}
            experienceOfPokemon = {iter.base_experience}
            attackDetails = {iter.stats[1]}
            otherDetails = {iter.abilities}
            abilitiesDetails = { (iter.abilities.length == 2) ? iter.abilities[1] : iter.abilities[0] }
            
            />)
        }
        
    </div>
);

}

export default CardComponent;