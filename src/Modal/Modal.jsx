import React from "react";
import ReactDOM from 'react-dom';
import "./Modal.css";






function Modal(props) {


  return (
    <>
    {
      ReactDOM.createPortal(
        <div className="blur">
        <div className="ModalDiv">
          <div className="ModalDiv-heading">
            <h1>OOPs!</h1>
            <p>{props.data.head}</p>
          </div>
    
          <div className="ModalDiv-error" >
            <p>{props.data.error}</p>
          </div>
    
          <div className="ModalDiv-btn" >
            <button onClick={()=>{props.closeModal(false)}} >Close</button>
          </div>
        </div>
      </div>
        
        , document.querySelector("#error-card"))
    }
    </>
  );
}

export default Modal;
