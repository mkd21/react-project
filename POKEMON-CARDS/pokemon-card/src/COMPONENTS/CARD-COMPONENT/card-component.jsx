

import CardRenderer from "./card-renderer.jsx";

const CardComponent = ({pokemonData}) =>{

return (

    <div id="parentContainer" style={{backgroundColor : "yellowgreen" , display : "flex" , flexWrap : "wrap"}} >
        {
            pokemonData.map( (iter) => <CardRenderer key={iter.id}  pokemonName = {iter.name} pokemonImage = {iter.sprites.front_default} />)
        }
        
    </div>
);

}

export default CardComponent;