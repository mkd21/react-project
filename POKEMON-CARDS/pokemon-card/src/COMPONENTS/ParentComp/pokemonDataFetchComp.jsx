
import { useState , useEffect } from "react";

import fetchData from "../../api/apiGetterFunction.js";

// importing components 

import CardComponent from "../CARD-COMPONENT/card-component.jsx";

import { InputComponent } from "../INPUT-COMPONENT/inputComp.jsx";

// imported react loader 
import { DotLoader } from "react-spinners";


// importing styles 
import loaderStyle from "../../styles/loader-style/loaderStyle.module.css";


function ParentComp()
{
    const [data , updateData] = useState([]);
    const [loading , updateLoading] = useState(true);

    useEffect( () =>{   

        const processData = async () =>{
            const res = await fetchData();
            updateData(res);
            updateLoading(false);
        }
        processData();
    } , []);

    
    // when data is being fetched 
    if(loading)
    {
        return <DotLoader color="#c43c3c" size={70} className= {loaderStyle.loader} />
    }

    // when data is available 
    return (
        <>
            <InputComponent />
            <CardComponent pokemonData = {data} />
        </> 
    );
}

export default ParentComp;