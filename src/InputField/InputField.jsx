import React, {useRef} from 'react';
import "./InputField.css"


function InputField(props) {
    // useRef for reading data
    const nameInputRef=useRef("")
    const ageInputRef=useRef("")
    const collegeInputRef=useRef("")


    // SendData When Button Click
    function sendDataOnButtonClick(e){
        e.preventDefault()


        let name=nameInputRef.current.value;
        let age=ageInputRef.current.value;
        let college=collegeInputRef.current.value;

        if(name==="" || age==="" || college===""){
            props.setModal(true)
            props.getError({head:"Empty Field Detected!",error:"Please Enter Something Before Submit"})
            return 
        }


        props.dataTaker({name:name,age:age,college:college})
    }



    return (
        <form className='inputFieldDiv' action="#">
            <input className='inputFieldInput'  type="text" placeholder='Name'   ref={nameInputRef} />
            <input className='inputFieldInput'  type="text" placeholder='Age' ref={ageInputRef} />
            <input className='inputFieldInput'  type="text" placeholder='CollegeName' ref={collegeInputRef} />
            <button className='inputFieldButton' onClick={sendDataOnButtonClick} >ADD</button>
        </form>
     );
}

export default InputField;