import React, { useState } from 'react';
import "./App.css"
import Container from '../Container/Container';
import List from '../List/List';
import InputField from '../InputField/InputField';
import Modal from '../Modal/Modal';

function App() {

    // State To Set Data
    const[setList,setList_FUNC]=useState([])

    // Grab Input Data
    function grabInputDataFromInputField(inptValue){
        // Show In Dom
        setList_FUNC((prev)=>{
            return [inptValue, ...prev]
        })
    }

    // Show Modal On Error
    const[setModal_BOOL,setModal_FUNC]=useState(false)
    // Send Data 
    const[eData,seteData]=useState({})
    function getErrorDetails(e){
        seteData(e)
    }



    return ( 
        <div>
            {setModal_BOOL && <Modal data={eData}  closeModal={setModal_FUNC}/>}
            <InputField dataTaker={grabInputDataFromInputField} setModal={setModal_FUNC} getError={getErrorDetails}/>

            <Container>
                {setList.map((val)=>{
                    return (
                        <List name={val.name} age={val.age} key={Math.random()}  />
                    )
                })}
            </Container>
        </div>
     );
}

export default App;
