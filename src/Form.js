import React, { useEffect, useState } from 'react'

function Form() {
        const data={name:"",email:"",password:""};
        const [inputData, setInputData]=useState(data)
        const [flag, setFlag]=useState(false)

        useEffect(()=>{
            console.log("Registered");
        },[flag]);

        function handleData(e){
            setInputData({...inputData, [e.target.name]: e.target.value});
        }

        function handleSubmit(e){
            e.preventDefault();
            if(!inputData.name || !inputData.email || !inputData.password){
                alert("All Fields are mandatory")
            }
            else{
                setFlag(true);
            }
        }
    return(
        <>
        <pre>{(flag)?<h2 className='ui-define'>Hello {inputData.name}, You Have Registered Successfully</h2>:""}
        </pre>
        <form className='container' onSubmit={handleSubmit}>
            <div className='header'>
                <h1>REGISTRATION FORM</h1>
            </div>

            <div>
                <input type='text' placeholder='Enter Your Name' name='name' value={inputData.name} onChange={handleData} required></input>
            </div>
            <div>
                <input type='text' placeholder='Enter Your Email Address' name='email' value={inputData.email} onChange={handleData} required></input>
            </div>
            <div>
                <input type='text' placeholder='Enter Your Password' name='password' value={inputData.password} onChange={handleData} required></input>
            </div>
            <div>
                <button type='submit'>SUBMIT</button>
            </div>


        </form>
        {/* {flag && (
        <div className='container'>
          <h2>Hello {inputData.name}, You have registered successfully</h2>
        </div>
      )} */}
        

        </>
    );
}

export default Form;