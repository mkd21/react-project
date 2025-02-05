
import { useState } from "react";

let spacing = {
    marginRight : "3rem",
    marginTop : "2rem",
    padding : "1rem",
    fontSize : "2rem",
    borderRadius : "23px",
    border: "none",
    display : "block"
}

function UseStateChallenge()
{
    const [currentCount , updateCount] = useState(0);
    const [value , updateValue] = useState(0);

    const incrementFunction = () =>{
        updateValue( (prev) =>{
            if(currentCount == 0) return prev + 1;
            return prev + Number(currentCount);
        });
    }

    const decrementFunction = () =>{
        updateValue( (prev) => {
            if(currentCount == 0 || prev == 0) return prev;

            return prev - Number(currentCount);
        });
    }

    const resetFunction = () =>{
        updateCount(0);
        updateValue(0);
    }

    return(

        <div className="parentDiv" >

            <h1>Usestate Challenge</h1>
            <p> Count : {value}</p>

            <p style={{display : "inline" , marginRight : "1rem"}}>Step</p>
            <input type="number" style={{ marginBottom : "3rem"}} value={currentCount} onChange={(e) => updateCount(e.target.value)} />

            <button style={spacing} onClick={incrementFunction} > Increment </button>
            <button style={spacing} onClick={decrementFunction} > Decrement </button>
            <button style={spacing} onClick={resetFunction} > Reset </button>

        </div>
    );
}

export default UseStateChallenge;