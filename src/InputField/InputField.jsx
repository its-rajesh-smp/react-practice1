import React, {useState } from 'react';
import "./InputField.css"


function InputField(props) {
    
    const [name,Fname]=useState("")
    const [age,Fage]=useState("")

    // SendData When Button Click
    function sendDataOnButtonClick(e){
        e.preventDefault()

        if(name==="" || age===""){
            props.setModal(true)
            props.getError({head:"Empty Field Detected!",error:"Please Enter Something Before Submit"})
            return 
        }


        props.dataTaker({name:name,age:age})
        Fname("")
        Fage("")
    }



    return (
        <form className='inputFieldDiv' action="#"  >
            <input className='inputFieldInput'  type="text" placeholder='Name' value={name} onChange={(e)=>{Fname(e.target.value)}} />
            <input className='inputFieldInput'  type="text" placeholder='Age' value={age} onChange={(e)=>{Fage(e.target.value)}} />
            <button className='inputFieldButton' onClick={sendDataOnButtonClick} >ADD</button>
        </form>
     );
}

export default InputField;