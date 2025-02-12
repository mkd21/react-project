
import { useEffect, useState } from "react";
import inputStyle from "../../styles/input-style/inputStyle.module.css";


export const InputComponent = ({filterPokemon}) =>{

    const [currentValue , updateValue] = useState("");

    const handleOnChange = (receivedText) =>{
        updateValue(receivedText);
    }

    useEffect( () =>{
        filterPokemon(currentValue);
    } , [currentValue]);

    return(

        <div className={inputStyle.inputSectionHolder} >
            <input type="text" placeholder="Search your favourite pokemon.." value={currentValue} onChange={(e) => handleOnChange(e.target.value)} />
        </div>
    );
}