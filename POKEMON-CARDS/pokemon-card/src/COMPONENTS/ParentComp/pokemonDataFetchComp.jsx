
import { useState , useEffect } from "react";

import fetchData from "../../api/apiGetterFunction.js";

// importing components 

import CardComponent from "../CARD-COMPONENT/card-component.jsx";

import { InputComponent } from "../INPUT-COMPONENT/inputComp.jsx";

// no pokemon compoment 

import NoPokemon from "../NO-POKEMON-COMPONENT/noPokemonComp.jsx";


// imported react loader 
import { DotLoader } from "react-spinners";


// importing styles 
import loaderStyle from "../../styles/loader-style/loaderStyle.module.css";


function ParentComp()
{
    const [data , updateData] = useState([]);
    const [loading , updateLoading] = useState(true);

    // this will manage the cards when user starts pressing the backspace 
    const [dataForFilter , updateDataForFilter] = useState(data);

    function showAvailablePokemon(receivedData)
    {   
        if(receivedData == "")
        {
            updateData(dataForFilter);
        }
        else
        {   
            const desiredPokemon = dataForFilter.filter( (iter) =>{
                if(iter.name.toLowerCase().includes(receivedData)) 
                {
                    return iter;
                }
            })
            updateData(desiredPokemon);
        }
    }

    // this method will fetch the data from api updating all the state variables accordingly
    useEffect( () =>{   

        const processData = async () =>{
            const res = await fetchData();
            updateData(res);
            updateDataForFilter(res);
            updateLoading(false);
        }
        processData();
    } , []);

    // this will be executed when reset button will be clicked
    function NoDesiredPokemonAvailable()
    {
        const processData = async () =>{
            const res = await fetchData();
            updateData(res);
            updateDataForFilter(res);
            updateLoading(false);
        }
        processData();
    }
    
    // when data is being fetched 
    if(loading)
    {
        return <DotLoader color="#c43c3c" size={70} className= {loaderStyle.loader} />
    }

    // when no pokemon is found 
    if(data.length == 0)
    {
        return <NoPokemon loadAllCards = {NoDesiredPokemonAvailable} />
    }

    // when data is available 
    return (
        <>
            <InputComponent filterPokemon = {showAvailablePokemon} />
            <CardComponent pokemonData = {data} />
        </> 
    );
}

export default ParentComp;