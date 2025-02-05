import { useState } from "react";


function FormComponent()
{
    const [userDetails , updateDetails] = useState({

        firstName : "",
        lastName : "",
        phoneNumber : ""

    });

    function handleChange(receivedData)
    {
        updateDetails( (prev) => {
            return {...prev , [receivedData.name] : receivedData.value}
        });
    }

    function handleSubmit(e)
    {
        console.log(userDetails);
        e.preventDefault();
    }

    return(

        <>
            <form action="">
                <div>
                    <h1>Sign up</h1>
                    <p>Please fill this form to create your account</p>

                    <label htmlFor="firstName">
                        <b>First Name</b>
                    </label>

                    <input type="text" name="firstName" placeholder="Enter your First Name" required  value={userDetails.firstName}  onChange={(e) =>{handleChange(e.target)}} />

                    <label htmlFor="lastName">
                        <b>Last Name</b>
                    </label>
                    <input type="text" name="lastName" placeholder="Enter your Last Name"  value={userDetails.lastName} onChange={(e) =>{handleChange(e.target)}} />

                    <label htmlFor="phoneNumber">
                        <b>Phone Number</b>
                    </label>
                    <input type="text" maxLength="10" pattern="\d{10}" inputMode="numeric" name="phoneNumber" placeholder="Enter your Phone Number" value={userDetails.phoneNumber}  onChange={(e) =>{handleChange(e.target)}} />


                    <button onClick={ (e) => handleSubmit(e)} >Submit</button>
                </div>
            </form>
        </>

    );
}

export default FormComponent;