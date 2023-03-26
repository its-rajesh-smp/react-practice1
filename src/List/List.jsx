import React from 'react';
import "./List.css"

function List(props) {
    return ( 
    <div className='ListDiv' >
        <p> <span>{props.name}</span> {"("} <span>{props.age}</span> {"Years Old ) "} <span>{props.college}</span> </p>
    </div> );
}

export default List;