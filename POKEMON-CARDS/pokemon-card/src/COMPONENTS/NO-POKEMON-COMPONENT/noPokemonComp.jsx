
import NocardStyle from "../../styles/no-cards/no-pokemon-cards.module.css";


function NoPokemon({loadAllCards})
{
    return(
        <div className={NocardStyle["no-pokemon-card-holder"]} >
            <h1>No Data Found..</h1>
            <button className={NocardStyle["no-card-button"]} onClick={loadAllCards} >Reset Cards</button>
        </div>
    );
}

export default NoPokemon;